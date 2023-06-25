module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:i18next/recommended",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react", "i18next"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [2, { extensions: [".ts", ".tsx"] }],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"i18next/no-literal-string": [1, { markupOnly: true }],
		"max-len": ["error", { ignoreComments: true, tabWidth: 2 }],
		"@typescript-eslint/ban-ts-comment": 1,
	},
}
