import React from "react";
import styled from "styled-components";
import { Image } from "grommet";

const RoundedImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default function Avatar(props) {
    console.log(props.fullName);
  return <RoundedImage  src={props.url} alt={props.fullName} />;
}
