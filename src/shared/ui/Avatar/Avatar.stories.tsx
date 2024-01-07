import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://avatars.githubusercontent.com/u/43078049?v=4",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
  },
};

export const Small: Story = {
  args: {
    size: 50,
  },
};
