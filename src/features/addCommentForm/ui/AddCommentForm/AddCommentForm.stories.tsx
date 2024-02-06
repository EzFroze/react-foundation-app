import type { Meta, StoryObj } from "@storybook/react";

import { storeDecorator } from "shared/config/storybook/storeDecorator";
import AddCommentForm from "./AddCommentForm";

const meta: Meta<typeof AddCommentForm> = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  tags: ["autodocs"],
  decorators: [storeDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
  args: {},
};
