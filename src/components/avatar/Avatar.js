import React, { useCallback } from "react";
import styled from "styled-components";
import { Image, Menu } from "grommet";
import { withRouter } from "react-router-dom";

const RoundedImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Avatar = function(props) {
  const { history } = props,
    likedArticlesHandler = useCallback(
      () => history.push("/liked-articles"),
      []
    ),
    editProfileHandler = useCallback(() => history.push("/profile"), []),
    logoutHandler = useCallback(() => console.log("Logging out"), []);

  return (
    <Menu
      label={<RoundedImage src={props.url} alt={props.fullName} />}
      items={[
        { label: `Logged in as: ${props.fullName}` },
        {
          label: "Liked articles",
          onClick: likedArticlesHandler
        },
        {
          label: "Edit profile",
          onClick: editProfileHandler
        },
        { label: "Logout", onClick: logoutHandler }
      ]}
    />
  );
};

export default withRouter(Avatar);
