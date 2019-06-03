import React, { useState, useEffect } from "react";
import { Box } from "grommet";
import axios from "axios";

import Header from "../header/Header";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = (() => {
      axios.get(
          "https://294d9b6e-de77-48ff-9163-ccfa95c32cfe.mock.pstmn.io/user"
      ).then(response => {
        const {status, data} = response;

        if (status === 200) {
          setData({ user: data, isLoading: false, errorMsg: null});
        }
      }).catch(error => {
        setData({isLoading: true, errorMsg: error.message})
      });

    });
    fetchData();
  }, []);

  return (
    <Box direction="column" alignSelf="stretch">
      {data && data.user? <Header user={data.user} />: ''}
    </Box>
  );
}
