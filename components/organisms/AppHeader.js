import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

export const AppHeader = () => {
  const Links = [
    { key: "works", href: "/works" },
    { key: "about", href: "/history" },
    { key: "contact", href: "/history" },
  ];
  return (
    <>
      <HeaderBase>
        <HeaderLayout>
          <ImageContainer>
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="this is logo"
                quality={100}
                width={100}
                height={35}
              ></Image>
            </Link>
          </ImageContainer>
          {Links.map((data) => {
            return (
              <Link href={data.href} key={data.key} passHref>
                <PageAnchor>{data.key}</PageAnchor>
              </Link>
            );
          })}
        </HeaderLayout>
      </HeaderBase>
    </>
  );
};

const HeaderBase = styled.header`
  grid-area: "header";
  background-color: #5b677520;
  z-index: 10;
`;

const HeaderLayout = styled.div`
  height: 10vh;
  padding: 4rem;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  margin: 0 4rem;
  padding-top: 0.5em;
  max-width: 25rem;
`;

const PageAnchor = styled.a`
  font-size: 4rem;
  margin: 0 2rem;
  font-weight: bold;
  color: #4e4e4e;
  &:hover {
    color: #b12a1c;
    cursor: pointer;
  }
`;
