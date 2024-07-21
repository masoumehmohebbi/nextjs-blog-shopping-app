import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useStore } from "react-redux";
import { wrapper } from "src/redux/store";
import { loadUserData } from "src/redux/user/userActions";

function App({ Component, pageProps }: AppProps) {
  const store = useStore();
  useEffect(() => {
    loadUserData(store);
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
export default wrapper.withRedux(App);
