import * as React from "react";
import styled from "styled-components";
import AppButton from "../components/atom/AppButton";
import Router from "next/router";

export default function Home() {
  const Links = [
    { key: "works", href: "/works", label: "works" },
    { key: "about", href: "/history", label: "about me" },
  ];
  const pushPage = (href) => {
    Router.push(href);
  };
  return (
    <FlexContainer>
      <Introduction>お越しいただきありがとうございます</Introduction>
      <ButtonContainer>
        {Links.map((data) => {
          return (
            <AppButton onClickEvent={() => pushPage(data.href)} key={data.key}>
              {data.label}
            </AppButton>
          );
        })}
      </ButtonContainer>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const Introduction = styled.p`
  font-size: 8rem;
  padding: 0.75em;
  margin: 0.8em;
`;

const ButtonContainer = styled.div`
  display: flex;
`;
