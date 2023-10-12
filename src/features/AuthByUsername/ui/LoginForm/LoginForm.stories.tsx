import type { Meta, StoryObj } from "@storybook/react";

import { storeDecorator } from "shared/config/storybook/storeDecorator";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  decorators: [
    storeDecorator({
      loginForm: {
        username: "123",
        password: "asd",
      },
    }),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    storeDecorator({
      loginForm: {
        username: "123",
        password: "asd",
        error: "ERROR",
      },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    storeDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
};
