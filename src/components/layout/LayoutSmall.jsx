import styled from "styled-components";
import { HeaderSmall } from "./HeaderSmall";
import { Footer } from "./Footer";

export const LayoutSmall = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderSmall />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100vw;
  margin: auto;
`;
