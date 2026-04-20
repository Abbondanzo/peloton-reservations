import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase/constants/auth";
import { MessagingContext } from "../../messaging/context/MessagingContext";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Paths } from "../constants/paths";

const SignInLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: ${(p) => p.theme.colors.accent};
  border: 1px solid ${(p) => p.theme.colors.accent}40;
  border-radius: ${(p) => p.theme.borderRadius};
  transition: background-color 0.15s;

  &:hover {
    background-color: ${(p) => p.theme.colors.accent}0a;
  }
`;

const AccountInfo = styled.div`
  font-size: 13px;
  color: ${(p) => p.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SignOutButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${(p) => p.theme.colors.secondary};
  background: none;
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  cursor: pointer;
  transition:
    background-color 0.15s,
    color 0.15s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: ${(p) => p.theme.colors.main};
  }
`;

export const MobileSessionInfo = () => {
  const sessionState = useAppSelector(selectSession);
  const { deleteToken } = useContext(MessagingContext);

  const onSignOut = useCallback(async () => {
    await deleteToken();
    await auth?.signOut();
  }, [deleteToken]);

  if (sessionState.state === "loading") {
    return null;
  }

  if (sessionState.state !== "fulfilled" || !sessionState.data) {
    return <SignInLink to={Paths.SIGN_IN}>Sign in</SignInLink>;
  }

  return (
    <>
      <AccountInfo>{sessionState.data.displayName}</AccountInfo>
      <SignOutButton type="button" onClick={onSignOut}>
        Sign out
      </SignOutButton>
    </>
  );
};
