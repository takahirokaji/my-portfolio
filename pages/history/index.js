import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import Router from "next/router";

export default function history() {
  const pushPage = (href) => {
    Router.push(href);
  };
  const language = ["html5", "css3", "sass", "javascript", "Ruby"];
  const teck = [
    "Vue.js",
    "Nuxt.js",
    "React.js",
    "Next.js",
    "Firebase Cloud Firestore ",
    "Cloud Storage for Firebase",
    "Google Cloud Functions",
    "Google App Engine",
    "github",
    "Ruby on rails",
    "Docker",
    "Heroku",
    "MySQL",
  ];
  const other = [
    "Adobe Illustrator(ロゴ・広告用ポスター作成)",
    "Adobe XD(プロトタイプ作成)",
    "figma(プロトタイプ作成)",
    "Filmora(動画制作)",
  ];
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
          <p>
            こんにちわ。静岡大学総合科学技術研究科１年の梶
            貴広です。私は、日々の生活を改善するアプリをいくつか作成しました。このK's
            portでは今まで制作したアプリケーションを紹介させていただきます。
            <WordLink onClick={() => pushPage("works")}>works</WordLink>
            から制作物一覧を閲覧していただけると幸いです。
          </p>
        </DetailsText>
        <h2>好きなこと</h2>
        <DetailsText>
          <p>
            <ol>
              <li>音楽を聞くこと</li>
              <AdditionalDetials>
                <span>好きな歌手</span>
                <li>Vaundy</li>
                <li>Saucy Dog</li>
                <li>優里</li>
                <li>藤井風</li>
                <li>クリープハイプ</li>
              </AdditionalDetials>
              <li>アニメを見ること</li>
              <AdditionalDetials>
                <span>好きなアニメ</span>
                <li>銀魂</li>
                <li>ジョジョの奇妙な冒険(特に3&5)</li>
                <li>進撃の巨人</li>
              </AdditionalDetials>
              <li>運動をすること</li>
              <AdditionalDetials>
                <span>好きな運動・スポーツ</span>
                <li>筋トレ</li>
                <li>登山</li>
                <li>よさこい</li>
                <li>バスケ</li>
              </AdditionalDetials>
              <li>お酒を呑むこと</li>
              <AdditionalDetials>
                <span>好きなお酒</span>
                <li>レモンサワー</li>
                <li>ビール(アサヒ)</li>
                <li>ハイボール</li>
              </AdditionalDetials>
            </ol>
          </p>
        </DetailsText>
        <h2>目指すエンジニア</h2>

        <DetailsText>
          <p>
            私は今まで、身近な日常の中で改善したいコトに焦点を当ててに様々なアプリケーションを作成してきました。その過程の中で私は
            <span>人生を通した目標として、</span>
            <span>
              世の中が少しでも便利になるようなサービスを世の中に提供して、人々が自分や家族に使う時間を増やしたい。
            </span>
            と思う様になりました。
          </p>
          <p style={{ paddingTop: "10px" }}>
            また、 エンジニアとして<span>どのようなエンジニアになりたいか</span>
            というと、
            自分が携わるプロジェクトの全容をしっかりと把握して、それがなぜ、誰のために、何のために、どのように利益を得るかなどの
            <span>
              ビジネスの視点を持ち、それを踏まえた上で実装を行えるエンジニアになりたいと思っています。
            </span>
          </p>
          <p style={{ paddingTop: "10px" }}>
            具体的になりたいものとしては、<span>フロントエンドエンジニア</span>
            もしくは、<span>バックエンドエンジニア</span>
            です。ですが、将来的には自分の技術を磨きつつ他の職種にも挑戦していきたいと考えています。
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
    font-weight: bold;
  }
  ul,
  ol {
    font-weight: bold;
    font-size: 5rem;
  }
  ol {
    padding-left: 1em;
  }
`;

const AdditionalDetials = styled.ul`
  font-weight: bold;
  margin-left: 10px;
  color: #4e4e4e;
  span {
    font-size: 5rem;
    color: #b12a1c;
  }
  li {
    font-weight: normal;
    margin-left: 10px;
    font-size: 4.5rem;
  }
`;

const WordLink = styled.span`
  display: inline;
  font-weight: bold;
  :hover {
    cursor: pointer;
    color: #b12a1c;
  }
`;
