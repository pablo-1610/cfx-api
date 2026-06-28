const eslint = require("@eslint/js")
const tseslint = require("typescript-eslint")
const { defineConfig, globalIgnores } = require("eslint/config")

module.exports = defineConfig([
    globalIgnores(["node_modules", "dist", "tests", "**/*.config.js"]),
    {
        files: ["src/**/*.ts"],
        extends: [eslint.configs.recommended, tseslint.configs.recommended],
        rules: {
            "no-console": 2,
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
])
