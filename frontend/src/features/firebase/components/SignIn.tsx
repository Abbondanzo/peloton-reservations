import { captureException } from "@sentry/react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../../navigation/constants/paths";
import { auth } from "../constants/auth";
import { signInErrorToFriendlyError } from "../operators/signInErrorToFriendlyError";

const Heading = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.main};
  margin: 0 0 6px;
`;

const Subheading = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.main};
`;

const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  font-size: 15px;
  font-family: inherit;
  color: ${(p) => p.theme.colors.main};
  background-color: ${(p) => p.theme.colors.mainSurface};
  transition:
    border-color 0.15s,
    box-shadow 0.15s;

  &::placeholder {
    color: ${(p) => p.theme.colors.secondary};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.accent};
    box-shadow: 0 0 0 3px ${(p) => p.theme.colors.accent}22;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 11px 16px;
  border: none;
  border-radius: ${(p) => p.theme.borderRadius};
  background-color: ${(p) => p.theme.colors.accent};
  color: #fff;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.15s;

  &:hover:not(:disabled) {
    filter: brightness(94%);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 11px 16px;
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  background-color: transparent;
  color: ${(p) => p.theme.colors.main};
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover:not(:disabled) {
    background-color: ${(p) => p.theme.colors.hoverSurface};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 4px 0;
  color: ${(p) => p.theme.colors.secondary};
  font-size: 13px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: ${(p) => p.theme.borderColor};
  }
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${(p) => p.theme.colors.error};
`;

const ToggleRow = styled.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondary};
  text-align: center;
`;

const ToggleButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  color: ${(p) => p.theme.colors.accent};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailAuth = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!auth || !email || !password) return;

      setLoading(true);
      setError("");

      try {
        if (isSignUp) {
          await createUserWithEmailAndPassword(auth, email, password);
        } else {
          await signInWithEmailAndPassword(auth, email, password);
        }
        navigate(Paths.CLASS_LIST);
      } catch (err: unknown) {
        console.error("Email auth error:", err);
        const errorMessage =
          err && typeof err === "object" && "code" in err
            ? signInErrorToFriendlyError(
                err as { code: string; message: string }
              )
            : "Authentication failed";
        setError(errorMessage);
        captureException(err);
      } finally {
        setLoading(false);
      }
    },
    [email, password, isSignUp, navigate]
  );

  const handleGoogleSignIn = useCallback(async () => {
    if (!auth) return;

    setLoading(true);
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate(Paths.CLASS_LIST);
    } catch (err: unknown) {
      console.error("Google sign-in error:", err);
      const errorMessage =
        err && typeof err === "object" && "code" in err
          ? signInErrorToFriendlyError(err as { code: string; message: string })
          : "Google sign-in failed";
      setError(errorMessage);
      captureException(err);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  return (
    <div>
      <Heading>{isSignUp ? "Create account" : "Sign in"}</Heading>
      <Subheading>
        Set alerts, persist filters across devices, and access beta features.
      </Subheading>

      <Form onSubmit={handleEmailAuth}>
        <Field>
          <Label htmlFor="signin-email">Email</Label>
          <Input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </Field>
        <Field>
          <Label htmlFor="signin-password">Password</Label>
          <Input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </Field>
        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
        <PrimaryButton type="submit" disabled={loading}>
          {loading ? "Loading…" : isSignUp ? "Create account" : "Sign in"}
        </PrimaryButton>
      </Form>

      <Divider style={{ marginTop: 20, marginBottom: 16 }}>or</Divider>

      <GoogleButton
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
      >
        Continue with Google
      </GoogleButton>

      <ToggleRow>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <ToggleButton
          type="button"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError("");
          }}
          disabled={loading}
        >
          {isSignUp ? "Sign in" : "Create account"}
        </ToggleButton>
      </ToggleRow>
    </div>
  );
};
