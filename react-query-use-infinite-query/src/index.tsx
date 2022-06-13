import { Global, ThemeProvider } from "@emotion/react";
import normalize from "emotion-normalize";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { globalStyles } from "./styles";
import { theme } from "./theme";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <Global styles={[normalize, globalStyles]} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
