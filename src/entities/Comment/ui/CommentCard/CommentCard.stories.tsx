import type { Meta, StoryObj } from "@storybook/react";

import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
  title: "entities/CommentCard",
  component: CommentCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {},
};
