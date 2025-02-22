import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import eslintParserTs from "@typescript-eslint/parser";
import globals from "globals";

export default [
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: eslintParserTs,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.node
        },
        plugins: {
            "@typescript-eslint": eslintPluginTs
        },
        rules: {
            "quotes": ["error", "single"],
            "semi": ["error", "always"],
            "@typescript-eslint/no-explicit-any": "warn"
        }
    }
];
