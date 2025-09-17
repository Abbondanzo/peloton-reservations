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

const Wrapper = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4285f4;
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #4285f4;
  color: white;
  width: 100%;

  &:hover:not(:disabled) {
    background-color: #3367d6;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437;
  color: white;
  width: 100%;

  &:hover:not(:disabled) {
    background-color: #c23321;
  }
`;

const ErrorMessage = styled.div`
  color: #d93025;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const MicroCopy = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  margin-bottom: 2em;
`;

const Divider = styled.div`
  text-align: center;
  margin: 1rem 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #ddd;
  }

  span {
    background: white;
    padding: 0 1rem;
    color: #666;
    position: relative;
  }
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #666;
  font-size: 14px;

  button {
    color: #4285f4;
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
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
    <Wrapper>
      <Title>{isSignUp ? "Create Account" : "Sign In"}</Title>
      <MicroCopy>
        Set your own alerts, persist your filters across devices, and get access
        to beta features.
      </MicroCopy>

      <Form onSubmit={handleEmailAuth}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <PrimaryButton type="submit" disabled={loading}>
          {loading ? "Loading..." : isSignUp ? "Create Account" : "Sign In"}
        </PrimaryButton>
      </Form>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Divider>
        <span>or</span>
      </Divider>

      <GoogleButton
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
      >
        Continue with Google
      </GoogleButton>

      <ToggleText>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          type="button"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError("");
          }}
          disabled={loading}
        >
          {isSignUp ? "Sign in" : "Create account"}
        </button>
      </ToggleText>
    </Wrapper>
  );
};
