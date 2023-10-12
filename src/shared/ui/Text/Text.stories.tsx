import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Hello",
    text: "world",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "This is only title",
  },
};

export const OnlyText: Story = {
  args: {
    text: "This is only text",
  },
};

export const ErrorText: Story = {
  args: {
    title: "ERROR",
    text: "404 not found",
    theme: TextTheme.ERROR,
  },
};
