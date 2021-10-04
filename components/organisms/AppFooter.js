import Image from "next/image";
import styled from "styled-components";

export const AppFooter = () => {
  return (
    <>
      <Footer>
        <a
          href="https://github.com/takahirokaji"
          target="_blank"
          rel="noopener noreferrer author"
        >
          梶 貴広のgit hub
        </a>
        <span>
          {/* <Image src="/github-icon.svg" alt="Vercel Logo" layout="fill" /> */}
        </span>
      </Footer>
    </>
  );
};

const Footer = styled.footer`
  width: 100vw;
  border-top: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: "relative";
    height: 1em;
    margin-left: 0.5rem;
  }
`;
