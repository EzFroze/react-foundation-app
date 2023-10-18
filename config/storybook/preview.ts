import type { Preview } from "@storybook/react";
import { THEME } from "app/providers/ThemeProvider";
import { i18nDecorator } from "shared/config/storybook/i18nDecorator";
import { routeDecorator } from "shared/config/storybook/routeDecorator";
import { styleDecorator } from "shared/config/storybook/styleDecorator";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import "loki/configure-react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: THEME.LIGHT,
      toolbar: {
        title: "Theme",
        icon: "sun",
        items: [
          { value: THEME.LIGHT, title: "Light", icon: "sun" },
          { value: THEME.DARK, title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "ru", title: "Russia" },
          { value: "en", title: "English" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [styleDecorator, themeDecorator, routeDecorator, i18nDecorator],
};

export default preview;
