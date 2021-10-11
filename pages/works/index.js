import * as React from "react";
import styles from "../../styles/Home.module.scss";
import AppCard from "../../components/atom/AppCard";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "../../lib/firebase";

export default function Home(props) {
  const router = useRouter();

  const handler = (id) => {
    router.push({ pathname: `works/${id}` });
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
            onClickEvent={() => handler(data.id)}
          />
        );
      })}
    </Flex>
  );
}

export const getStaticProps = async () => {
  // const worksSnapshot = await getDocs(collection(firestore, "works"));
  const q = query(collection(firestore, "works"), orderBy("priority"));
  const worksSnapshot = await getDocs(q);
  let works = [];
  worksSnapshot.forEach((doc) => {
    works.push({
      id: doc.id,
      info: doc.data().info,
      title: doc.data().name.ja,
      Imgurl: doc.data().thumbnail,
    });
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
  height: 90vh;
  padding: 1em;
`;
