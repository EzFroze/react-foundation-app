import { App } from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoudary";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { render } from "react-dom";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

import "shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
