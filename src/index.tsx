import { App } from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoudary";
import { StoreProvider } from "app/providers/StoreProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { render } from "react-dom";
import "./app/styles/index.scss";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18n from "shared/config/i18n/i18n";

render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById("root")
);
