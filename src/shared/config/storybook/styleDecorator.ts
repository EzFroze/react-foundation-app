import 'app/styles/index.scss';
import { type ReactRenderer } from '@storybook/react';
import { type PartialStoryFn } from '@storybook/types';

export const styleDecorator = (story: PartialStoryFn<ReactRenderer, Record<string, any>>) => story();
