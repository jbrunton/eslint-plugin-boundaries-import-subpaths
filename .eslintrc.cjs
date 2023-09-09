module.exports = {
  "env": {
    "node": true,
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["boundaries"],
  "extends": ["plugin:boundaries/strict"],
  "rules": {
    "boundaries/element-types": [
      2,
      {
        default: "disallow",
        rules: [
          {
            from: "usecases",
            allow: ["entities"],
          },
          {
            from: "main",
            allow: ["usecases", "entities"],
          },
        ],
      },
    ],
  },
  settings: {
    "boundaries/ignore": [".eslintrc.cjs"],
    "boundaries/elements": [
      {
        type: "entities",
        pattern: "src/entities",
      },
      {
        type: "usecases",
        pattern: "src/usecases",
      },
      {
        type: "main",
        pattern: ["src/main.js"],
        mode: "file",
      }
    ],
  },
}
