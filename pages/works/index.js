import * as React from "react";
import styles from "../../styles/Home.module.scss";
import AppCard from "../../components/atom/AppCard";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../lib/firebase";

export default function Home(props) {
  const showCard = () => {
    console.log("hello from parent");
  };
  const handler = () => {
    Router.push("works/detail");
  };

  return (
    <Flex>
      {props.works.map((data) => {
        return (
          <AppCard
            key={data.id}
            name={data.title}
            info={data.info}
            Imgurl={data.Imgurl}
            onClickEvent={(showCard, handler)}
          />
        );
      })}
    </Flex>
  );
}

export const getStaticProps = async () => {
  const worksSnapshot = await getDocs(collection(firestore, "works"));
  let works = [];
  worksSnapshot.forEach((doc) => {
    works.push({
      id: doc.id,
      info: doc.data().info,
      title: doc.data().name.ja,
      Imgurl: doc.data().thumbnail,
    });
    console.log(works);
  });
  return {
    props: { works },
  };
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
`;
