import { AppHeader as Header } from "../organisms/AppHeader";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Grid>
        <Header />
        <Main>{children}</Main>
      </Grid>
    </>
  );
}

const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 10vh 90vh;

  grid-template-areas:
    "header"
    "main"
    "footer";
`;

const Main = styled.main`
  overflow-y: scroll;
`;
