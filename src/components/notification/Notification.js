import React, { useEffect } from "react";
import { Box, Layer, Text } from "grommet";

export default function Notification(props) {
  useEffect(() => {
    /*
     This solves a bug when the user was navigating to another page while
     the notification was shown. To solve this we take advantage of closures and
     we set state only if the component is there.
    */
    let isNotificationActive = true;
    setTimeout(() => {
      isNotificationActive &&
        props.setShowNotification({ show: false, text: null });
    }, props.timeLimit);

    return function cleanup() {
      isNotificationActive = false;
    };
  });

  return (
    <Layer
      modal={false}
      position="bottom"
      margin={{ vertical: "medium", horizontal: "small" }}
      responsive={false}
      plain
    >
      <Box
        align="center"
        direction="row"
        gap="small"
        justify="between"
        round="medium"
        elevation="medium"
        pad={{ vertical: "xsmall", horizontal: "small" }}
        background="status-ok"
      >
        <Text>{props.text}</Text>
      </Box>
    </Layer>
  );
}
