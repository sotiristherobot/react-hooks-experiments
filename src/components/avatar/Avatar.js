import React from "react";
import styled from "styled-components";
import { Image, Menu } from "grommet";
import { withRouter } from 'react-router-dom';

const RoundedImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Avatar = function(props) {
  const { history } = props;

  return (
    <Menu
      label={<RoundedImage src={props.url} alt={props.fullName} />}
      items={[
        { label: `Logged in as: ${props.fullName}` },
        {
          label: "Liked articles",
          onClick: () => history.push("/liked-articles")
        },
        {
          label: "Edit profile",
          onClick: () => history.push("/profile")
        },
        { label: "Logout", onClick: () => {} }
      ]}
    />
  );
};

export default withRouter(Avatar);
