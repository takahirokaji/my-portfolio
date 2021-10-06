import * as React from "react";
import styled from "styled-components";
import AppButton from "../components/atom/AppButton";
import Router from "next/router";

export default function Home() {
  const Links = [
    { key: "works", href: "/works", label: "作品集" },
    { key: "about", href: "/history", label: "私について" },
  ];
  const pushPage = (href) => {
    console.log(href);
    Router.push(href);
  };
  return (
    <FlexContainer>
      <Introduction>お越しいただきありがとうございます。</Introduction>
      {Links.map((data) => {
        return (
          <AppButton onClickEvent={() => pushPage(data.href)} key={data.key}>
            {data.label}はこちらから
          </AppButton>
        );
      })}
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

const Introduction = styled.p`
  font-size: 10rem;
  max-width: 90%;
  padding: 0.75em;
  margin: 0.8em;
`;
