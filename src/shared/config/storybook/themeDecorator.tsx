import { type ReactRenderer } from '@storybook/react';
import { type PartialStoryFn, type StoryContext } from '@storybook/types';

export const themeDecorator = (
  Story: PartialStoryFn<ReactRenderer, Record<string, any>>,
  context: StoryContext<ReactRenderer, Record<string, any>>
) => {
  const globals = context.globals;
  const pageTheme = typeof globals.theme === 'string' ? globals.theme : '';
  return (
    <div className={`app ${pageTheme}`}>
      <Story />
    </div>
  );
};
