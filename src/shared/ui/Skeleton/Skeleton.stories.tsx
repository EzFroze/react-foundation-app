import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "shared/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {
    width: "100%",
    height: "200px",
  },
};

export const Circle: Story = {
  args: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  },
};
