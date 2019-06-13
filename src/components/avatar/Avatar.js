import React from "react";
import styled from "styled-components";
import { Image, Menu } from "grommet";
import useReactRouter from "use-react-router";

const RoundedImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default function Avatar(props) {
  const { history } = useReactRouter();

  return (
    <Menu
      label={<RoundedImage src={props.url} alt={props.fullName} />}
      items={[
        { label: `Logged in as: ${props.fullName}` },
        {
          label: "Edit profile",
          onClick: () => history.push("/profile")
        },
        { label: "Logout", onClick: () => {} }
      ]}
    />
  );
}
