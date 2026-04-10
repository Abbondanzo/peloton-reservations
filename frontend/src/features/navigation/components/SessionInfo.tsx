import { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase/constants/auth";
import { MessagingContext } from "../../messaging/context/MessagingContext";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Popover } from "../../theme/components/Popover";
import { Paths } from "../constants/paths";

const SignInLink = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color 0.15s, border-color 0.15s, background-color 0.15s;

  &:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const AccountButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.85);
  background: none;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.15s, border-color 0.15s, background-color 0.15s;
  white-space: nowrap;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

const SignOutButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 14px;
  color: ${(p) => p.theme.colors.main};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const SessionInfo = () => {
  const sessionState = useAppSelector(selectSession);
  const [showPopover, setShowPopover] = useState(false);
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
    <ButtonWrapper>
      <AccountButton
        type="button"
        onClick={() => setShowPopover(true)}
        aria-expanded={showPopover}
        aria-haspopup="dialog"
      >
        {sessionState.data.displayName}
      </AccountButton>
      <Popover open={showPopover} onClose={() => setShowPopover(false)}>
        <SignOutButton type="button" onClick={onSignOut}>
          Sign out
        </SignOutButton>
      </Popover>
    </ButtonWrapper>
  );
};
