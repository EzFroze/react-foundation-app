import type { Meta, StoryObj } from "@storybook/react";

import { ArticleList } from "./ArticleList";

const meta: Meta<typeof ArticleList> = {
  title: "entities/ArticleList",
  component: ArticleList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Primary: Story = {
  args: {},
};
