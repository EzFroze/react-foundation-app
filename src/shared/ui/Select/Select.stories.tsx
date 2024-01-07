import { type Meta, type StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: "test",
    options: [
      {
        value: "1",
        content: "Один",
      },
      {
        value: "2",
        content: "Два",
      },
      {
        value: "3",
        content: "Три",
      },
      {
        value: "4",
        content: "Четыре",
      },
    ],
  },
};
