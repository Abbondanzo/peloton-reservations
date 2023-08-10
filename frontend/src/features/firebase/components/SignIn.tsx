import { captureException } from "@sentry/react";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../../navigation/constants/paths";
import { auth } from "../constants/auth";
import { safeInit } from "../operators/safeInit";

const ui = safeInit(() => new firebaseui.auth.AuthUI(auth));

const Wrapper = styled.div`
  width: 100%;

  * {
    font-family: inherit;
  }
`;

export const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const onMount = useCallback(
    (instance: HTMLDivElement) => {
      try {
        ui?.start(instance, {
          signInOptions: [
            {
              provider: EmailAuthProvider.PROVIDER_ID,
              signInMethod: EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
            },
            {
              provider: GoogleAuthProvider.PROVIDER_ID,
              signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
            },
          ],
          signInFlow: "popup",
          callbacks: {
            signInSuccessWithAuthResult: () => {
              navigate(Paths.CLASS_LIST);
              return true;
            },
            signInFailure: (error) => {
              console.error(error);
              captureException(error);
            },
            uiShown: function () {
              setLoading(false);
            },
          },
        });
      } catch (e) {
        console.error(e);
      }

      return () => {
        ui?.reset();
      };
    },
    [navigate]
  );

  return (
    <Wrapper>
      <div ref={onMount} />
      {loading && <div>Loading...</div>}
    </Wrapper>
  );
};
