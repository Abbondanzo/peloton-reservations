import styled from "styled-components";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { Card } from "../../theme/components/Card";
import { Link } from "react-router-dom";
import { Paths } from "../../navigation/constants/paths";

const BodyWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  line-height: 1.5;
  padding: 16px;
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    padding: 8px;
  }
`;

export const AboutRoot = () => {
  return (
    <NavbarProvider>
      <BodyWrapper>
        <Card>
          <h1>About</h1>
          <h2>What's this?</h2>
          <p>
            Great question! If you're not familiar with{" "}
            <a
              href="https://www.onepeloton.com/company"
              target="_blank"
              rel="noreferrer"
            >
              Peloton
            </a>
            , they are a fitness company meets technology meets soft cult. They
            offer live and on-demand classes across their barrage of fitness
            equipment, but they also offer the ability to attend a class in
            person in what's known as the{" "}
            <a
              href="https://studio.onepeloton.com/"
              target="_blank"
              rel="noreferrer"
            >
              Peloton Studios
            </a>
            . It provides a quicker and smarter version of that Peloton Studios
            class reservation website, with additional filters like checking by
            waitlist status.
          </p>
          <h2>How do you view classes?</h2>
          <p>
            All of the classes are displayed on the{" "}
            <Link to={Paths.CLASS_LIST}>Class List page</Link>. You can use the
            sidebar to set custom filters or switch between Peloton Studio
            locations.
          </p>
          <h2>Is the information accurate/is it live?</h2>
          <p>
            Yes! We directly serve content right from Peloton Studios each time
            you load the website. When applying filters in the Class List, the
            information is not refreshed until you refresh the page or switch
            Studio location. However, filters will persist if you choose to
            refresh, unlike the Peloton Studios website.
          </p>
        </Card>
      </BodyWrapper>
    </NavbarProvider>
  );
};
