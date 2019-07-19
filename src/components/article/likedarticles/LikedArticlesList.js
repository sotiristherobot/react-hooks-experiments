import React from "react";
import { Box, DataTable } from "grommet";
import { Like } from "grommet-icons/es6";

function LikedArticlesList() {
  return (
    <Box align="center">
      <Box width="60%" align="center">
        <DataTable
          resizable={true}
          sortable={true}
          alignSelf="center"
          columns={[
            {
              property: "id",
              header: "id",
              primary: true
            },
            {
              property: "title",
              header: "title"
            },
            {
              property: "statusbar",
              header: "status",
              render: status => (
                <Box>
                  <Like size="medium" />
                </Box>
              )
            }
          ]}
          data={[
            { id: 0, title: "testr", percent: 20 },
            { id: 1, title: "test1", percent: 30 },
            { id: 2, title: "test2", percent: 40 },
            { id: 3, title: "test3", percent: 80 }
          ]}
        />
      </Box>
    </Box>
  );
}
export default LikedArticlesList;
