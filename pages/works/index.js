import * as React from "react";
import styles from "../../styles/Home.module.scss";
import AppCard from "../../components/atom/AppCard";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";

export default function Home() {
  const appData = [
    {
      id: 1,
      name: "パンプラージュ",
      info: "大学内の情報を一元化することによる大学生支援サービス",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      name: "ゴミアプリ",
      info: "ゴミの通知をしてくれるゴミのアプリ",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 3,
      name: "On-be",
      info: "あの会話を取り戻したい！",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 1,
      name: "パンプラージュ",
      info: "大学内の情報を一元化することによる大学生支援サービス",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      name: "ゴミアプリ",
      info: "ゴミの通知をしてくれるゴミのアプリ",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 3,
      name: "On-be",
      info: "あの会話を取り戻したい！",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 1,
      name: "パンプラージュ",
      info: "大学内の情報を一元化することによる大学生支援サービス",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      name: "ゴミアプリ",
      info: "ゴミの通知をしてくれるゴミのアプリ",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 3,
      name: "On-be",
      info: "あの会話を取り戻したい！",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 1,
      name: "パンプラージュ",
      info: "大学内の情報を一元化することによる大学生支援サービス",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      name: "ゴミアプリ",
      info: "ゴミの通知をしてくれるゴミのアプリ",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 3,
      name: "On-be",
      info: "あの会話を取り戻したい！",
      image: "https://source.unsplash.com/random",
    },
  ];
  const showCard = () => {
    console.log("hello from parent");
  };
  const handler = () => {
    Router.push("works/detail");
  };

  return (
    <Flex>
      {appData.map((data) => {
        return (
          <AppCard
            key={data.id}
            name={data.name}
            info={data.info}
            image={data.image}
            onClickEvent={(showCard, handler)}
          />
        );
      })}
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
`;
