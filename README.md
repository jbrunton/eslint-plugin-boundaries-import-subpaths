# import subpath patterns with eslint-plugin-boundaries

Test case for `eslint-plugin-boundaries` with [import subpath patterns](https://nodejs.org/api/packages.html#subpath-patterns).

To run:

```
npm install
npm start
```

This works as expected with recent Node versions (tested with v18).

To lint:

```
npm run lint
```

This fails on the imports using import subpath patterns:

```
/home/eslint-plugin-boundaries-import-subpaths/src/main.js
  1:23  error  Importing ignored files is not allowed  boundaries/no-ignored
  2:22  error  Importing ignored files is not allowed  boundaries/no-ignored
```
