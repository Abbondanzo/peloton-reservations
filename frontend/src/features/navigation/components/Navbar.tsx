import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../constants/paths";
import { SessionInfo } from "./SessionInfo";
// import { SessionInfo } from "./SessionInfo";

const Wrapper = styled.nav`
  height: inherit;
  background-color: #181a2f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 20px;
`;

const RightGap = styled.div`
  display: flex;
  column-gap: 4em;
  align-items: center;
`;

const Routes = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 1.5em;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <Link to={Paths.CLASS_LIST}>
        <Title>Peloton Alerts</Title>
      </Link>
      <RightGap>
        <Routes>
          <Link to={Paths.CLASS_LIST}>Class List</Link>
          <Link to={Paths.ALERTS}>Alerts</Link>
          <Link to={Paths.ABOUT}>FAQ</Link>
        </Routes>
        <SessionInfo />
      </RightGap>
    </Wrapper>
  );
};
