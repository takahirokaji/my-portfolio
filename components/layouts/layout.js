import { AppFooter as Footer } from "../organisms/AppFooter.js";
import { AppHeader as Header } from "../organisms/AppHeader";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  min-height: 80vh;
`;
