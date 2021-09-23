import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/logo.png";
import logo2 from "../../public/logo2.png";

export const AppHeader = () => {
  return (
    <>
      <Header>
        <ImageContainer>
          <Image
            src={logo2}
            alt="this is logo"
            quality={100}
            height={40}
            width={160}
          ></Image>
        </ImageContainer>
      </Header>
    </>
  );
};

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding-top: 10px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  justify-self: left;
`;
