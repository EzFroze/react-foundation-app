import { App } from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoudary";
import { StoreProvider } from "app/providers/StoreProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { render } from "react-dom";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

import "shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
