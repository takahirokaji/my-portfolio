import React from "react";
import styled from "styled-components";

export const AppButton = () => {
  const sayFuck = () => {
    console.log("fuck you");
  };

  return (
    <Button primary colorScheme="teal" size="xs" onClick={sayFuck}>
      hello
    </Button>
  );
};

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid "#fafa";
  border-radius: 3px;
`;
