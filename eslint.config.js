import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import sonarjs from 'eslint-plugin-sonarjs';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            sonarjs,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'error',
                { allowConstantExport: true },
            ],
            'sonarjs/no-duplicate-string': ['error', { threshold: 3 }],
            'sonarjs/no-identical-functions': 'error',
            'sonarjs/no-duplicated-branches': 'error',
            'sonarjs/cognitive-complexity': ['error', 15],
            'sonarjs/no-redundant-boolean': 'error',
            'sonarjs/prefer-immediate-return': 'error',
            'sonarjs/prefer-single-boolean-return': 'error',
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            }],
            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-unnecessary-condition': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/prefer-reduce-type-parameter': 'error',
            '@typescript-eslint/prefer-return-this-type': 'error',
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
            'max-lines-per-function': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
            'max-statements': ['error', 15],
            'max-depth': ['error', 4],
            'max-nested-callbacks': ['error', 3],
            'max-params': ['error', 4],
            'complexity': ['error', 10],
            'no-inner-declarations': ['error', 'both'],
            '@typescript-eslint/no-loop-func': 'error',
            '@typescript-eslint/no-magic-numbers': ['error', {
                ignore: [0, 1, -1],
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
                ignoreReadonlyClassProperties: true,
                ignoreTypeIndexes: true,
            }],
            'prefer-template': 'error',
            'no-template-curly-in-string': 'error',

            // Immutability & Functional Style
            'no-param-reassign': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'no-plusplus': 'error',
            'no-else-return': 'error',

            // Explicit & Predictable Code
            'eqeqeq': ['error', 'always'],
            'no-implicit-coercion': 'error',
            'no-unneeded-ternary': 'error',
            'no-lonely-if': 'error',
            'object-shorthand': 'error',
            'prefer-arrow-callback': 'error',
            'array-callback-return': 'error',

            // TypeScript Strictness
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/strict-boolean-expressions': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            '@typescript-eslint/no-require-imports': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                { selector: 'default', format: ['camelCase'] },
                { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
                { selector: 'function', format: ['camelCase', 'PascalCase'] },
                { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
                { selector: 'typeLike', format: ['PascalCase'] },
                { selector: 'enumMember', format: ['PascalCase', 'UPPER_CASE'] },
                { selector: 'property', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
                { selector: 'import', format: ['camelCase', 'PascalCase'] },
            ],

            // Ban Unsafe Patterns
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-new-func': 'error',
            'no-async-promise-executor': 'error',
            'no-promise-executor-return': 'error',

            // Functional Programming Restrictions
            'no-restricted-syntax': [
                'error',
                { selector: 'ClassDeclaration', message: 'Classes are not allowed. Use functions and plain objects instead.' },
                { selector: 'ClassExpression', message: 'Classes are not allowed. Use functions and plain objects instead.' },
                { selector: 'ImportNamespaceSpecifier', message: 'Import asterisks (* as) are not allowed. Use named imports instead.' },
                { selector: 'Literal[value=""]', message: 'Empty strings are not allowed. Use a constant or template literal instead.' },
                { selector: ':function :function:not([type="ArrowFunctionExpression"])', message: 'Function declarations inside functions are not allowed. Define functions at module level.' },
                { selector: 'ForInStatement', message: 'for-in is not allowed. Use Object.keys/entries with forEach instead.' },
                { selector: 'ForStatement', message: 'for loops are not allowed. Use .map/.filter/.reduce/.forEach instead.' },
                { selector: 'TSEnumDeclaration', message: 'Enums are not allowed. Use const objects with "as const" instead.' },
                { selector: 'ThisExpression', message: 'this is not allowed. Use closures or pass dependencies as parameters.' },
            ],
            'sonarjs/no-nested-functions': 'error',
        },
    },
    {
        files: ['**/data/**.ts'],
        rules: {
            'max-lines': 'off',
        },
    },
);
