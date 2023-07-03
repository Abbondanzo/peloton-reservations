import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../constants/paths";

const Wrapper = styled.nav`
  height: inherit;
  background-color: #181a2f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Routes = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 1em;
`;

const Route = styled.li`
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <Title>Peloton Alerts</Title>
      <Routes>
        <Route>
          <Link to={Paths.CLASS_LIST}>Class List</Link>
        </Route>
        <Route>
          <Link to={Paths.ABOUT}>About</Link>
        </Route>
      </Routes>
    </Wrapper>
  );
};
