import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

const AppCard = (props) => {
  console.log(props.Imgurl);
  return (
    <>
      <Card onClick={props.onClickEvent}>
        <Image
          className="app-image"
          src={props.Imgurl}
          width={400}
          height={250}
          quality={100}
          alt={"this is app image"}
        ></Image>
        <Explain>
          <h1>{props.name}</h1>
          <h2>{props.info}</h2>
        </Explain>
      </Card>
    </>
  );
};

const Card = styled.div`
  margin: 1.5%;
  position: relative;
  .app-image {
    border-radius: 10px;
    filter: brightness(0.4);
    transition: filter 0.5s;
  }
  &:hover {
    cursor: pointer;
    .app-image {
      filter: none;
      transition: filter 1s;
    }
    h1,
    h2 {
      opacity: 0;
      transition: 1s;
    }
  }
`;

const Explain = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 5rem;
  font-weight: bold;
  color: white;
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 3rem;
    overflow-x: hidden;
  }
`;

export default AppCard;
