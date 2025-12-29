module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Formatting, missing semi colons, etc.
        'refactor', // Code refactoring
        'test', // Adding tests
        'chore', // Build process or auxiliary tool changes
        'revert', // Revert previous commit
      ],
    ],
    'subject-case': [0],
  },
};
