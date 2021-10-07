import React from "react";
import styled from "styled-components";

const AppButton = (props) => {
  return (
    <Button onClick={(el) => props.onClickEvent(el)}>{props.children}</Button>
  );
};

const Button = styled.button`
  font-size: 6rem;
  padding: 0.5em 1em;
  border: none;
  background-color: #ffffff00;
  border: 1px solid #b12a1c;
  color: #b12a1c;
  border-radius: 2.5em;
  margin: 0.25em;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: #b12a1c;
    color: white;
  }
`;

export default AppButton;
