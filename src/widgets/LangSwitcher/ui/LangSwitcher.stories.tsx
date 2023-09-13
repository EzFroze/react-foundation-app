import type { Meta, StoryObj } from "@storybook/react";
import "shared/config/i18n/i18nForTest";

import { LangSwitcher } from "./LangSwitcher";

const meta: Meta<typeof LangSwitcher> = {
  title: "widget/LangSwitcher",
  component: LangSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Primary: Story = {};
