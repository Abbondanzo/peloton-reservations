import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase/constants/auth";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Popover } from "../../theme/components/Popover";
import { Paths } from "../constants/paths";

const SignInButton = styled.button`
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.75em 1.5em;
  &:hover {
    filter: brightness(90%);
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

const TextButtonWrapper = styled.button`
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  border: none;
  width: 100%;
  padding: 0.25em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const SessionInfo = () => {
  const sessionState = useAppSelector(selectSession);
  const [showPopover, setShowPopover] = useState(false);

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
    <ButtonWrapper>
      <SignInButton onClick={() => setShowPopover(true)}>
        {sessionState.data.displayName}
      </SignInButton>
      <Popover open={showPopover} onClose={() => setShowPopover(false)}>
        <TextButtonWrapper onClick={() => auth?.signOut()}>
          Sign Out
        </TextButtonWrapper>
      </Popover>
    </ButtonWrapper>
  );
};
