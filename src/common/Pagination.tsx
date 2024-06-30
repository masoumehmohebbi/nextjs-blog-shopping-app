import { Pagination } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8b5cf6",
    },
  },
});

const pageHandler = () => {};

const PaginationComponent = ({ page, count }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="col-span-6 flex justify-center mb-5">
        <Pagination
          page={page}
          count={count}
          dir="ltr"
          color="primary"
          onChange={pageHandler}
        />
      </div>
    </ThemeProvider>
  );
};

export default PaginationComponent;
