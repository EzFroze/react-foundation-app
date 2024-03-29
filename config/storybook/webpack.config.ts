import path from "path";
import webpack, { type Configuration, type RuleSetRule } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { type BuildPaths } from "../build/types/config";

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(config.mode === "development"),
      __API__: JSON.stringify(""),
      __PROJECT__: JSON.stringify("storybook" as Project),
    })
  );

  config.module?.rules?.push(buildCssLoaders(true), buildSvgLoader());

  return config;
};
