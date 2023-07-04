import { type PartialStoryFn } from '@storybook/types';
import { type ReactRenderer } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const routeDecorator = (
  Story: PartialStoryFn<ReactRenderer, Record<string, any>>
) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
