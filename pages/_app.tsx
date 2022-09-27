import "../styles/main.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
