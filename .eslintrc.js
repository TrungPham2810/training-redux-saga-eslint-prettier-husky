module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    rules: {
        quotes: [1, "double"],
        "react/prop-types": 1,
        "react/jsx-max-props-per-line": 1,
        "react/jsx-filename-extension": 1,
        "no-unused-vars": 1,
        "import/order": 1,
        "import/newline-after-import": 1,
        "import/prefer-default-export": 0,
        "react/prefer-stateless-function": 0,
        "no-var": 1,
        "import/no-useless-path-segments": 1,
        "react/jsx-one-expression-per-line": 1,
        "react/jsx-props-no-spreading": 1,
        "react/jsx-indent": 1,
        "react/jsx-indent-props": 1,
        "no-use-before-define": 1,
        "no-param-reassign": 1,
        "prefer-destructuring": 1,
        "no-fallthrough": 1,
        "react/require-default-props": 1,
        "react/no-unused-prop-types": 1,
        "import/no-cycle": 1,
        "lines-between-class-members": 1,
        "react/forbid-prop-types": 1,
        "react/no-array-index-key": 1,
        "react/jsx-indent-props": 0
    },
    plugins: ["prettier"],
    env: {
        es6: true,
        browser: true,
        node: true
    }
};
