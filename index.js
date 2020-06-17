module.exports = {
  rules: {
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [2, "always", 72],
    "footer-leading-blank": [2, "always"],
    "header-max-length": [2, "always", 50],
    "scope-case": [2,
      "always",
      ["lower-case", "camel-case", "pascal-case"]
    ],
    "subject-case": [
      2,
      "never",
      ["start-case", "pascal-case", "upper-case"]
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "improvement",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  }
};
