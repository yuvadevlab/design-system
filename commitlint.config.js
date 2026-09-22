export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation
        "style", // Formatting, missing semi colons, etc
        "refactor", // Code refactoring
        "perf", // Performance improvements
        "test", // Adding tests
        "build", // Build system changes
        "ci", // CI configuration
        "chore", // Other changes
        "revert", // Revert a commit
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        "ui",
        "logger",
        "cli",
        "docs",
        "playground",
        "eslint-config",
        "prettier-config",
        "typescript-config",
        "config",
        "workspace",
        "release",
        "infra",
      ],
    ],
    "subject-case": [2, "never", ["upper-case"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
  },
};

// git commit -m "feat(ui): verify commitlint config"
