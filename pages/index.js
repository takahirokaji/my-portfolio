import * as React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <FlexContainer>
      <Introduction>
        本日は、Ks Port にお越しいただきありがとうございます。 K,s Port
        はのポートフォリオサイトになっております。
      </Introduction>
      <Introduction>過去の制作物の一覧は こちら から</Introduction>
      <Introduction>私については こちら から</Introduction>
      <Introduction>私の連絡先は こちら から</Introduction>
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
  font-size: 5rem;
`;
