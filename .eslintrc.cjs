module.exports = {
    root: true,
    env:  {
        browser: true,
        es2021:  true,
        node:    true,
    },
    extends: [
        'next/core-web-vitals',
    ],
    plugins: [
        'import-newlines',
    ],
    parserOptions: {
        parser:      __dirname,
        ecmaVersion: 2021,
    },
    rules: {
        'no-console':  'warn',
        'no-debugger': 'warn',
        'quotes':      ['error', 'single'],
        'semi':        ['error', 'always'],
        'key-spacing': [
            'error',
            {
                'align': 'value',
            },
        ],
        'import-newlines/enforce': [
            'error',
            {
                items:     3,
                'max-len': 120,
            },
        ],
    }
};
