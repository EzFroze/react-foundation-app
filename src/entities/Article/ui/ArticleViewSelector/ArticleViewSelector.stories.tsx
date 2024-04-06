import type { Meta, StoryObj } from "@storybook/react";

import { ArticleViewSelector } from "./ArticleViewSelector";

const meta: Meta<typeof ArticleViewSelector> = {
  title: "???/ArticleViewSelector",
  component: ArticleViewSelector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Primary: Story = {
  args: {},
};
