import * as React from "react";
import styles from "../../styles/Home.module.scss";
import AppCard from "../../components/atom/AppCard";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../lib/firebase";

export default function Home() {
  const getData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "works"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };
  getData();
  const appData = [
    {
      id: 1,
      name: "パンプラージュ",
      info: "大学内の情報を一元化することによる大学生支援サービス",
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
