import "../styles/main.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "contexts/themeContext";

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
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
};

export default MyApp;
