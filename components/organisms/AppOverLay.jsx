import React from "react";
import styled from "styled-components";

const AppOverLay = () => {
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
  return (
    <>
      <OverLay></OverLay>
    </>
  );
};

const OverLay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #00000090;
  z-index: 2147483647;
`;

export default OverLay;
