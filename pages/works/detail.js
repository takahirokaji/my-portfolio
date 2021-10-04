import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import frame from "../../public/iphone_frame.png";

const Details = () => {
  const teckList = ["vue.js", "firebase", "TypeScript"];
  const imageURL =
    "https://firebasestorage.googleapis.com/v0/b/k-s-port.appspot.com/o/IMG_224D831531E4-1.jpeg?alt=media&token=29eb96b4-63ee-4018-a205-4c64357bd1bf";

  return (
    <>
      <WorksContainer>
        <ApplicationSumpleContainer>
          <Image
            src={imageURL}
            alt={"this is pinplage Image"}
            layout="fill"
            objectFit="contain"
          ></Image>
        </ApplicationSumpleContainer>

        <DetailsContainer>
          <Title>パンプラージュ</Title>
          <Content>
            <SubTitle>ロゴタイプ</SubTitle>
            <ExplainContainer>
              <p>Ill insert logo here</p>
            </ExplainContainer>
          </Content>

          <Content>
            <SubTitle>説明</SubTitle>
            <ExplainContainer>
              <p>
                静岡大学浜松キャンパス生のためのアプリケーション。キャンパス内にちらばる情報を「パンプラージュ」に集めて提供することでカンタンに情報を入手し、キャンパスライフを支援するアプリ！
              </p>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>使用技術</SubTitle>
            <ExplainContainer>
              <ul>
                {teckList.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>各種リンク</SubTitle>
            <ExplainContainer>
              <p>
                静岡大学浜松キャンパス生のためのアプリケーション。キャンパス内にちらばる情報を「パンプラージュ」に集めて提供することでカンタンに情報を入手し、キャンパスライフを支援するアプリ！
              </p>
            </ExplainContainer>
          </Content>
          <Content></Content>
          <Title>パンプラージュ</Title>
          <Content>
            <SubTitle>ロゴタイプ</SubTitle>
            <ExplainContainer>
              <p>Ill insert logo here</p>
            </ExplainContainer>
          </Content>

          <Content>
            <SubTitle>説明</SubTitle>
            <ExplainContainer>
              <p>
                静岡大学浜松キャンパス生のためのアプリケーション。キャンパス内にちらばる情報を「パンプラージュ」に集めて提供することでカンタンに情報を入手し、キャンパスライフを支援するアプリ！
              </p>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>使用技術</SubTitle>
            <ExplainContainer>
              <ul>
                {teckList.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>各種リンク</SubTitle>
            <ExplainContainer>
              <p>
                静岡大学浜松キャンパス生のためのアプリケーション。キャンパス内にちらばる情報を「パンプラージュ」に集めて提供することでカンタンに情報を入手し、キャンパスライフを支援するアプリ！
              </p>
            </ExplainContainer>
          </Content>
          <Content></Content>
        </DetailsContainer>
      </WorksContainer>
    </>
  );
};

export default Details;

const WorksContainer = styled.div`
  display: grid;
`;

const ApplicationSumpleContainer = styled.div`
  position: fixed;
  height: 60vh;
  width: 30vw;
`;

const DetailsContainer = styled.div`
  max-width: 60vw;
  font-size: 4px;
  padding: 5em;
`;

const Title = styled.h1`
  font-size: 8em;
  font-weight: bold;
  color: #27a7fa;
`;

const SubTitle = styled.h2`
  font-size: 6em;
  color: #27a7fa;
`;

const Content = styled.div`
  margin: 4em;
`;

const ExplainContainer = styled.div`
  /* border-left: 4px solid #27a7fa; */
  background-color: #4e4e4e10;
  border-radius: 1em;
  /* margin-left: 2.5em; */
  padding: 2.5em;
  p {
    font-size: 4em;
    color: #4e4e4e;
  }
  ul {
    padding: 0;
    list-style-type: none;
    li {
      font-size: 4em;
      color: #4e4e4e;
    }
  }
`;
