import type { Meta, StoryObj } from "@storybook/react";

import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
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
        form: {
          first: "Piter",
          lastname: "Parker",
          country: Country.Kazakhstan,
          currency: Currency.USD,
          city: "Moscow",
          username: "Vaspupka",
          avatar: "https://avatars.githubusercontent.com/u/43078049?v=4",
        },
      },
    }),
  ],
};
