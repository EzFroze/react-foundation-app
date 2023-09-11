import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Hello'
  }
};

export const PrimarySizeL: Story = {
  args: {
    children: 'Hello',
    size: ButtonSize.L
  }
};

export const PrimarySizeXL: Story = {
  args: {
    children: 'Hello',
    size: ButtonSize.XL
  }
};

export const Clear: Story = {
  args: {
    children: 'Hello',
    theme: ButtonTheme.CLEAR
  }
};

export const Outline: Story = {
  args: {
    children: 'Hello',
    theme: ButtonTheme.OUTLINE
  }
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Hello',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Hello',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
};

export const Background: Story = {
  args: {
    children: 'Hello',
    theme: ButtonTheme.BACKGROUND
  }
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Hello',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
  }
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
  }
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  }
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  }
};
