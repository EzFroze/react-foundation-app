import type { Meta, StoryObj } from "@storybook/react";
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
    to:
      document.getElementById("storybook-root") ??
      document.getElementById("storybook-docs") ??
      document.body,
  },
};
