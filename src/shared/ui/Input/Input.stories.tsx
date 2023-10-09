import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "Type text",
  },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(props.value);

    const onChange = (value: string) => {
      setValue(value);
    };

    return <Input value={value} onChange={onChange} {...props} />;
  },
};
