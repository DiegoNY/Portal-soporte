import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/libs/redux/store/store";

export default function App({ Component, pageProps }: AppProps) {
  // const t = false;
  // if (t == false) {
  //   return <Login />
  // }
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
