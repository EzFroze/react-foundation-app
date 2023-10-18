import { type ReactRenderer } from "@storybook/react";
import { type PartialStoryFn, type StoryContext } from "@storybook/types";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18n";

export const i18nDecorator = (
  Story: PartialStoryFn<ReactRenderer, Record<string, any>>,
  context: StoryContext<ReactRenderer, Record<string, any>>
) => {
  const { locale } = context.globals;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
