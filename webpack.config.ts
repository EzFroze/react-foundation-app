import path from "path";
import { type Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import {
  type BuildEnv,
  type BuildMode,
  type BuildPaths,
} from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {
  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || "http://localhost:8000";

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  });
};
