import type { Meta, StoryObj } from "@storybook/react";
import { THEME, ThemeProvider } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        aspernatur aut autem beatae consectetur excepturi molestias neque
        officiis optio rem tenetur vitae, voluptas. Animi nostrum omnis,
        perspiciatis repudiandae temporibus tenetur!`,
  },
  render: (args) => {
    return (
      <ThemeProvider initialTheme={THEME.LIGHT}>
        <Modal {...args} />
      </ThemeProvider>
    );
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        aspernatur aut autem beatae consectetur excepturi molestias neque
        officiis optio rem tenetur vitae, voluptas. Animi nostrum omnis,
        perspiciatis repudiandae temporibus tenetur!`,
  },
  render: (args) => {
    return (
      <ThemeProvider initialTheme={THEME.DARK}>
        <Modal {...args} />
      </ThemeProvider>
    );
  },
};
