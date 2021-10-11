import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function history() {
  const language = [["html5"], "css3", "sass", "javascript", "Ruby"];
  const teck = [
    "Vue.js",
    "React.js",
    "Nuxt.js",
    "Next.js",
    "Firebase",
    "github",
    "Ruby on rails",
    "Docker",
    "Heroku",
    "MySQL",
  ];
  const other = ["illustrator", "AdobeXD", "figma"];
  const books = ["webを支える技術"];
  return (
    <FlexColumnContainer>
      <BaseInfoContainer>
        <Icon>
          <Image
            className="icon"
            src="https://firebasestorage.googleapis.com/v0/b/k-s-port.appspot.com/o/IMG_2646.jpg?alt=media&token=717db28b-3d46-48b9-809e-f994ee2daaa8"
            width={200}
            height={200}
            quality={100}
            alt="my-profile"
          ></Image>
        </Icon>
        <TextInfo>
          <div>
            <h1>梶 貴広</h1>
            <h2>現在：静岡大学　総合科学技術研究科 1年</h2>
            <h2>21年3月：静岡大学　情報学部 行動情報学科 卒業</h2>
            <h2>17年3月：静岡県立沼津東高等学校卒業</h2>
          </div>
        </TextInfo>
      </BaseInfoContainer>
      <DetailsContainer>
        <h1>自己紹介</h1>
        <DetailsText>
          <p>こんにちわ。静岡大学総合科学技術研究科１年の梶 貴広です。</p>
        </DetailsText>
        <h2>好きなこと</h2>
        <DetailsText>
          <p>
            <ul>
              <li>ご飯を食べること</li>
              <li>音楽を聞くこと</li>
              <li>プログラミングをすること</li>
              <li>ゲームをすること</li>
              <li>筋トレをすること</li>
              <li>お酒を呑むこと</li>
            </ul>
          </p>
        </DetailsText>
        <h2>将来なりたいもの</h2>

        <DetailsText>
          <p>
            世の中が少しでも便利になるようなサービスを世の中に提供して、人々が自分や家族に使う時間を増やしたい。
          </p>
          <p>
            具体的になりたいものとしては、<span>フロントエンドエンジニア</span>
            もしくは、<span>バックエンドエンジニア</span>です。
          </p>
        </DetailsText>

        <h2>利用可能な言語</h2>
        <DetailsText>
          <ul>
            {language.map((data, index) => {
              return (
                <li key={index}>
                  <span>{data}</span>
                </li>
              );
            })}
          </ul>
        </DetailsText>
        <h2>利用可能なフレームワーク・技術</h2>
        <DetailsText>
          <ul>
            {teck.map((data, index) => {
              return (
                <li key={index}>
                  <span>{data}</span>
                </li>
              );
            })}
          </ul>
        </DetailsText>
        <h2>その他のスキル</h2>
        <DetailsText>
          <ul>
            {other.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
          </ul>
        </DetailsText>
      </DetailsContainer>
    </FlexColumnContainer>
  );
}

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BaseInfoContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 100vw;
  padding: 5vw 10vw;

  background-size: cover;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/k-s-port.appspot.com/o/IMG_7325.JPG?alt=media&token=f0cc5c19-0650-4bbe-8b12-f12401f2d58d");
`;
const Icon = styled.div`
  max-width: 25vw;
  .icon {
    border-radius: 100%;
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-left: 5rem;
  margin-bottom: 3rem;
  div {
    text-align: left;
    color: white;
    h1 {
      font-size: 10rem;
      span {
        font-size: 100px;
      }
    }
    h2 {
      font-size: 6rem;
    }
  }

  div > h2 {
    font-size: 4rem;
    text-align: left;
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;

  margin: 10rem 0;
  color: #00cccc;

  h1 {
    font-size: 10rem;
  }

  h2 {
    font-size: 8rem;
  }
`;

const DetailsText = styled.div`
  border-left: 2px solid #00cccc;
  font-size: 5rem;
  color: #4e4e4e;
  padding: 1em;
  margin-bottom: 1.5em;
  margin-left: 1em;
  span {
    font-size: 5.4rem;
    font-weight: bold;
  }
`;
