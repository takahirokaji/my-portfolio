import { AppHeader as Header } from "../organisms/AppHeader";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Grid>
        <Header />
        <Main>
          <WidthAdjustment>{children}</WidthAdjustment>
        </Main>
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
    "main";
  /* "footer"; */
`;

const Main = styled.main`
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #50dada;
    border-radius: 100px;
  }
`;

const WidthAdjustment = styled.div`
  max-width: 1500px;
`;
