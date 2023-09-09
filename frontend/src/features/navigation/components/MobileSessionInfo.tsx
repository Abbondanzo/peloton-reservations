import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase/constants/auth";
import { MessagingContext } from "../../messaging/context/MessagingContext";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Paths } from "../constants/paths";

const SignInButton = styled.button`
  background-color: transparent;
  width: 100%;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.75em 1.5em;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const SignedInWrapper = styled.div``;

const InfoWrapper = styled.div`
  margin-bottom: 8px;
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const MobileSessionInfo = () => {
  const sessionState = useAppSelector(selectSession);
  const { deleteToken } = useContext(MessagingContext);

  const onSignOut = useCallback(async () => {
    await deleteToken();
    await auth?.signOut();
  }, [deleteToken]);

  if (sessionState.state === "loading") {
    return <p>Loading...</p>;
  }

  if (sessionState.state !== "fulfilled" || !sessionState.data) {
    return (
      <Link to={Paths.SIGN_IN}>
        <SignInButton>Sign In</SignInButton>
      </Link>
    );
  }

  return (
    <SignedInWrapper>
      <InfoWrapper>Signed in as: {sessionState.data.displayName}</InfoWrapper>
      <SignInButton type="button" onClick={onSignOut}>
        Sign Out
      </SignInButton>
    </SignedInWrapper>
  );
};
