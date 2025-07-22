import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
        sourceType: "module",
      },
      globals: {
        // 加入测试环境下常用全局变量
        test: true,
        expect: true,
        describe: true,
        it: true,
        jest: true,
        beforeEach: true,
        afterEach: true,
        document: true,
        window: true,
        alert: true,
        console: true,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
  prettier,
];
