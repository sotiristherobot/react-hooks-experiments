import React from "react";
import styled from "styled-components";
import { Image, Menu } from "grommet";

const RoundedImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default function Avatar(props) {
  return (
    <Menu
      label={<RoundedImage src={props.url} alt={props.fullName} />}
      items={[{ label: `Logged in as: ${props.fullName}`},{ label: "Logout", onClick: () => {}}]}
    />
  );
}
