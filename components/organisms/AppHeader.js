import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import logo2 from "../../public/logo2.png";
import works from "../../public/works.png";
import aboutme from "../../public/aboutme.png";

export const AppHeader = () => {
  const Links = [
    { key: "works", href: "/works" },
    { key: "about", href: "/history" },
  ];
  return (
    <>
      <Header>
        <ImageContainer>
          <Image
            src={logo}
            alt="this is logo"
            quality={100}
            width={100}
            height={38}
          ></Image>
        </ImageContainer>
        {Links.map((data) => {
          return (
            <Link href={data.href} key={data.key}>
              <a>{data.key}</a>
            </Link>
          );
        })}
      </Header>
    </>
  );
};

const Header = styled.header`
  background-color: white;
  position: sticky;
  position: -webkit-sticky;
  z-index: 10;
  top: 0;
  padding: 1em;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #5b6775;
  display: flex;
  justify-content: left;
  align-items: center;
  a {
    margin: 0 1em;
    font-weight: bold;
    color: #4e4e4e;
    &:hover {
      color: #b12a1c;
      cursor: pointer;
    }
  }
`;

const ImageContainer = styled.div`
  display: inline;
  margin: 0 1em;
`;
