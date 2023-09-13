import type { Meta, StoryObj } from "@storybook/react";

import { PageLoader } from "./PageLoader";

const meta: Meta<typeof PageLoader> = {
  title: "widget/PageLoader",
  component: PageLoader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Primary: Story = {};
