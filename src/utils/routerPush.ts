import { NextRouter } from "next/router";

const routerPush = (router: NextRouter) => {
  router.push(
    {
      pathname: router.pathname,
      query: router.query,
    },
    undefined,
    { scroll: false }
  );
};

export default routerPush;
