import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Component = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widget/ThemeSwitcher",
  component: Component,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {};
