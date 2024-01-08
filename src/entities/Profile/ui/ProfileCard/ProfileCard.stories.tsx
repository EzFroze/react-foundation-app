import type { Meta, StoryObj } from "@storybook/react";

import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      first: "Piter",
      lastname: "Parker",
      country: Country.Kazakhstan,
      currency: Currency.USD,
      city: "Moscow",
      username: "Vaspupka",
      avatar: "https://avatars.githubusercontent.com/u/43078049?v=4",
    },
  },
};

export const WithError: Story = {
  args: {
    error: "Error",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
