import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [pluginJs.configs.recommended, eslintPluginPrettierRecommended];
