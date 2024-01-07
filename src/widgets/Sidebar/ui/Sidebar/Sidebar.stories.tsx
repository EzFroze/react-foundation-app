import type { Meta, StoryObj } from "@storybook/react";

import { storeDecorator } from "shared/config/storybook/storeDecorator";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "widget/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  decorators: [storeDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {};
