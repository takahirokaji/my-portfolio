import * as React from "react";
import styled from "styled-components";
import AppButton from "../components/atom/AppButton";
import Router from "next/router";

export default function Home() {
  const Links = [
    { key: "works", href: "/works", label: "worksに移動" },
    { key: "about", href: "/history", label: "aboutに移動" },
  ];
  const pushPage = (href) => {
    Router.push(href);
  };
  return (
    <FlexContainer>
      <Introduction>お越しいただき誠にありがとうございます</Introduction>
      <ExplainContainer>
        <ExplainCard>
          <Explain>
            <WordLink onClick={() => pushPage(Links[0].href)}>works</WordLink>
            は、今まで自分が作成した制作物の一覧です。使用技術、やったこと、思い出話、githubのリンクなどが記載してあります。
          </Explain>
          <Spacer />
          <AppButton onClickEvent={() => pushPage(Links[0].href)}>
            {Links[0].label}
          </AppButton>
        </ExplainCard>
        <ExplainCard>
          <Explain>
            <WordLink onClick={() => pushPage(Links[1].href)}>about</WordLink>
            は、私自身についての軽い自己紹介が記載されています。
          </Explain>
          <Spacer />
          <AppButton onClickEvent={() => pushPage(Links[1].href)}>
            {Links[1].label}
          </AppButton>
        </ExplainCard>
      </ExplainContainer>
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
`;

const ExplainCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ebecee;
  background-color: #ebecee;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 10px;
  font-size: 16px;
  margin-top: 10px;
`;

const ExplainContainer = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    width: 650px;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const WordLink = styled.span`
  display: inline;
  font-weight: bold;
  :hover {
    cursor: pointer;
    color: #b12a1c;
  }
`;

const Explain = styled.p``;
