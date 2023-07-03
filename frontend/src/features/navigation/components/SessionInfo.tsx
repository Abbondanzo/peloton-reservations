import { Link } from "react-router-dom";
import { selectSession } from "../../session/selectors/selectSession";
import { useAppSelector } from "../../store/hooks/useStore";
import { Paths } from "../constants/paths";
import styled from "styled-components";

const SignInButton = styled(Link)`
  color: inherit;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.75em 1.5em;
  &:hover {
    filter: brightness(90%);
  }
`;

export const SessionInfo = () => {
  const state = useAppSelector(selectSession);

  if (state.loading) {
    return <p>Loading...</p>;
  }

  if (!state.session) {
    return <SignInButton to={Paths.SIGN_IN}>Sign In</SignInButton>;
  }

  return <p>{state.session.id}</p>;
};
