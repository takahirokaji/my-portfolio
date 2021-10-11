import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import frame from "../../public/iphone_frame.png";
import Router from "next/router";
import { firestore } from "../../lib/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

export default function Detail(props) {
  console.log(props);
  const teckList = ["vue.js", "firebase", "TypeScript"];
  const imageURL =
    "https://firebasestorage.googleapis.com/v0/b/k-s-port.appspot.com/o/pinplage_logo_eng.png?alt=media&token=cc987271-f4fa-408e-92a7-4df7d3397477";
  return (
    <>
      <GridContainer>
        <ApplicationSumpleContainer>
          <ApplicationFrame>
            <Image
              src={imageURL}
              alt={"this is pinplage Image"}
              width={200}
              height={432.85}
              objectFit={"contain"}
            ></Image>
            <FrameTest>
              <Image
                src={frame}
                alt={"this is pinplage Image"}
                z
                width={250}
                height={505}
              ></Image>
            </FrameTest>
          </ApplicationFrame>
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
              <p>{props.details.explain}</p>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>使用技術</SubTitle>
            <ExplainContainer>
              <ul>
                {props.details.used_tech.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </ExplainContainer>
          </Content>
          <Content>
            <SubTitle>自分がやったこと</SubTitle>
            <ExplainContainer>
              <ul>
                {props.details.what_I_did.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </ExplainContainer>
          </Content>
          {/* <Content>
            <SubTitle>各種リンク</SubTitle>
            <ExplainContainer>
              <p>
                静岡大学浜松キャンパス生のためのアプリケーション。キャンパス内にちらばる情報を「パンプラージュ」に集めて提供することでカンタンに情報を入手し、キャンパスライフを支援するアプリ！
              </p>
            </ExplainContainer>
          </Content> */}
        </DetailsContainer>
      </GridContainer>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  let details;
  const docRef = doc(firestore, `works/${params.details}/details/info`);
  const snap = await getDoc(docRef);
  details = snap.data();

  return {
    props: { details },
  };
};

export const getStaticPaths = async () => {
  const ref = collection(firestore, "works");
  const snap = await getDocs(ref);
  const ids = snap.docs.map((doc) => doc.id);
  const paths = ids.map((id) => `/works/${id}`);
  return {
    paths,
    fallback: true,
  };
};

const GridContainer = styled.div`
  display: grid;
  height: 80vh;

  grid-template-columns: 3fr 5fr;
`;

const ApplicationSumpleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailsContainer = styled.div`
  overflow-y: scroll;
  /* max-width: 60vw; */
  font-size: 4px;
  padding: 5em;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: #00cccc; ;
`;

const SubTitle = styled.h2`
  font-size: 6rem;
  color: #00cccc; ;
`;

const Content = styled.div`
  margin: 4em;
`;

const ExplainContainer = styled.div`
  border-left: 2px solid #00cccc;
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

const ApplicationFrame = styled.div`
  position: relative;
  padding: 15px;
`;

const FrameTest = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
