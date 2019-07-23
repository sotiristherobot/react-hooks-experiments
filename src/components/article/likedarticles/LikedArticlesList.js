import React from "react";
import { Box, DataTable } from "grommet";
import { Like } from "grommet-icons/es6";
import { useSelector } from "react-redux";

function LikedArticlesList() {
  const likedArticles = useSelector(state => state.likedarticles.likedArticles);

  return (
    <Box pad={{ top: "medium" }}>
      <DataTable
        resizable={true}
        sortable={true}
        columns={[
          {
            property: "articleIndex",
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
        data={likedArticles}
      />
    </Box>
  );
}
export default LikedArticlesList;
