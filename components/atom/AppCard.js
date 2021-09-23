import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import Image from "next/image";

export function AppCard() {
  return (
    <>
      <h1>App　名</h1>
      <Image
        src={"https://source.unsplash.com/random"}
        width={100}
        height={100}
        alt={"this is app image"}
      ></Image>
    </>
  );
}

const card = styled.div``;
