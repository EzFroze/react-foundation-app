import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const Component = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widget/ThemeSwitcher',
  component: Component,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {};
