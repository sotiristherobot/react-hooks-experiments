import React, { useState, useEffect } from "react";
import { Box } from "grommet";
import axios from "axios";

import Header from "../header/Header";

export default function Home() {
  const [user, setUser] = useState({});
  const [url, setUrl] = useState("https://294d9b6e-de77-48ff-9163-ccfa95c32cfe.mock.pstmn.io/user");
  const [requestStatus, setRequestStatus] = useState({
    isLoading: true,
    errorMsg: null
  });

  useEffect(() => {
    const fetchData = (() => {
      axios.get(
        url
      ).then(response => {
        const {status, data} = response;

        if (status === 200) {
          setUser(data);
          setRequestStatus({...requestStatus, isLoading: false});
        }
      }).catch(error => {
        setRequestStatus({isLoading: true, errorMsg: error.message})
      });

    });
    fetchData();
  }, [url]);

  return (
    <Box direction="column" alignSelf="stretch">
      {user.name? <Header user={user} />: ''}
    </Box>
  );
}
