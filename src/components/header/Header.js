import React, {useCallback} from "react";
import { Box, Heading } from "grommet";
import Avatar from "../avatar/Avatar";
import { withRouter } from 'react-router-dom';

const HeaderStyle = {
  backgroundColor: "#243959"
};

const Header = function(props) {
  const { photo, name } = props.user,
    // in javascript object comparison is happening by reference. we
    // want to avoid creating the function on each render so we useCallback.
    onHeaderClick = useCallback(() => props.history.push("/"));
  console.log('rerendering');

  return (
    <Box align="center" background={HeaderStyle.backgroundColor} flex={{grow: 0, shrink: 0}}>
      <Box width="80%" direction="row" justify="between" align="center">
        <Heading level={3} margin="none" onClick={onHeaderClick}>
          Sotiris
        </Heading>
        <Avatar url={photo} fullName={name} />
      </Box>
    </Box>
  );
};
/**
 * There is no need to re-render <Header/> on every navigation action.
 * React.memo with own comparison function. Not sure if this will cause any bugs, but for the moment
 * it works.
*/
export default withRouter(React.memo(Header, () => true ));