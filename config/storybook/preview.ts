import type { Preview } from "@storybook/react";
import { THEME } from "app/providers/ThemeProvider";
import { routeDecorator } from "shared/config/storybook/routeDecorator";
import { styleDecorator } from "shared/config/storybook/styleDecorator";
import { suspenseDecorator } from "shared/config/storybook/suspenseDecorator";
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
  },
  decorators: [
    styleDecorator,
    themeDecorator,
    routeDecorator,
    suspenseDecorator,
  ],
};

export default preview;
