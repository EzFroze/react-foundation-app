import type { Meta, StoryObj } from "@storybook/react";
import { THEME, ThemeProvider } from "app/providers/ThemeProvider";
import { useEffect, useState } from "react";
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(args.isOpen);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);

    const onClose = () => {
      setIsOpen(false);
    };
    return <Modal {...args} isOpen={isOpen} onClose={onClose} />;
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(args.isOpen);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);

    const onClose = () => {
      setIsOpen(false);
    };
    return (
      <ThemeProvider initialTheme={THEME.DARK}>
        <Modal {...args} isOpen={isOpen} onClose={onClose} />;
      </ThemeProvider>
    );
  },
};
