import type { Meta, StoryObj } from "@storybook/react";

import { storeDecorator } from "shared/config/storybook/storeDecorator";
import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
  decorators: [
    storeDecorator({
      profile: {
        data: undefined,
        error: "",
        isLoading: false,
        readonly: true,
      },
    }),
  ],
};
