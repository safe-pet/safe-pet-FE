import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100vw;
  margin: auto;
`;
