import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  testMatch: ["/src/__tests__/**/*.tsx", "**/?(*.)+(spec|test).tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};

export default config;
