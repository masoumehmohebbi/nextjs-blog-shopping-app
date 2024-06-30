import { Pagination } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8b5cf6",
    },
  },
});

const PaginationComponent = ({ page, count }) => {
  const router = useRouter();
  const pageHandler = (e, page) => {
    router.query.page = page;
    routerPush(router);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="col-span-6 flex justify-center mb-5">
        {count > 1 && (
          <Pagination
            page={page}
            count={count}
            dir="ltr"
            color="primary"
            onChange={pageHandler}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default PaginationComponent;
