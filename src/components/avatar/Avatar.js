import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { Image, Menu } from "grommet";
import { withRouter } from "react-router-dom";

const RoundedImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Avatar = function({ history, url, fullName }) {
  /**
    Based on https://stackoverflow.com/questions/57870754/difference-between-usecallback-and-useref-hooks-when-useref-is-used-as-an-instan
   */
  const onMenuItemClick = useCallback(
      urlToNavigate => history.push(urlToNavigate),
      [history]
    ),
    onMenuItemClickRef = useRef(onMenuItemClick);

  return (
    <Menu
      label={<RoundedImage src={url} alt={fullName} />}
      items={[
        { label: `Logged in as: ${fullName}` },
        {
          label: "Liked articles",
          onClick: () => onMenuItemClickRef.current("/liked-articles")
        },
        {
          label: "Edit profile",
          onClick: () => onMenuItemClickRef.current("/profile")
        },
        { label: "Logout", onClick: () => console.log("Logging out") }
      ]}
    />
  );
};
export default withRouter(React.memo(Avatar, () => true));
