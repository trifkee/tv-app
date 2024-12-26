import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
      "@typescript-eslint/no-explicit-any": "off",
      "func-call-spacing": ["error", "never"]
    }
  }
];
