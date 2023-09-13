import type { Configuration as DevConfiguration } from "webpack-dev-server";
import { type BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevConfiguration {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
    hot: true,
  };
}
