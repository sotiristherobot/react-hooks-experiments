import React from "react";
import { Box, Heading } from "grommet";
import Avatar from "../avatar/Avatar";
import useReactRouter from "use-react-router";

const HeaderStyle = {
  backgroundColor: '#f44336'
};

export default function Header(props) {
  console.log(props);
  const { photo, name } = props.user,
    { history } = useReactRouter(),
    onHeaderClick = function () {
      history.push('/');
    };

  return (
      <Box
        align="center"
        background={HeaderStyle.backgroundColor}
      >
        <Box
          width="60%"
          direction="row"
          justify="between"
          align="center"
        >
        <Heading level={3} margin="none" onClick={onHeaderClick}>Sotiris</Heading>
        <Avatar url={photo} fullName={name} />
        </Box>
      </Box>
  );
}
