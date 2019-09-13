import React from "react";
import { Box, Heading } from "grommet";
import Avatar from "../avatar/Avatar";
import { withRouter } from "react-router-dom";

const HeaderStyle = {
  backgroundColor: "#243959"
};

const Header = function({user, history, isAuthed}) {
  const { photo, name } = user,
    onHeaderClick = () => history.push("/");
  console.log("rerendering");
  return (
    isAuthed && (
      <Box
        align="center"
        background={HeaderStyle.backgroundColor}
        flex={{ grow: 0, shrink: 0 }}
      >
        <Box width="80%" direction="row" justify="between" align="center">
          <Heading level={3} margin="none" onClick={onHeaderClick}>
            Sotiris
          </Heading>
          <Avatar url={photo} fullName={name} />
        </Box>
      </Box>
    )
  );
};
/**
 * There is no need to re-render <Header/> on every navigation action.
 * <Header/> is now pure component using React.memo with it's own comparison function that always returns true on props comparisons,
 * to avoid re-renders based on the history, from withRouter HOC.
 */
export default withRouter(React.memo(Header, () => true));
