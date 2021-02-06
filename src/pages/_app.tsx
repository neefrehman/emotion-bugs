import React from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import { GlobalStyles } from "styles/GlobalStyles";
import { theme } from "styles/theme";

export const AppProviders = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

const App = ({ Component, pageProps }: AppProps) => (
    <AppProviders>
        <Component {...pageProps} />
    </AppProviders>
);

export default App;
