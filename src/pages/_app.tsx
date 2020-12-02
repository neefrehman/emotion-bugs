import React from "react";
import { ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";

import { GlobalStyles } from "styles/GlobalStyles";
import { theme } from "styles/theme";

const App = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
    </ThemeProvider>
);

export default App;
