# karma-rollup-preprocessor-issue-3

This is a demonstration of the issue reported as [Watching all looked up files](https://github.com/showpad/karma-rollup-preprocessor/issues/3).

The issue will exhibit by:

1. Run karma (`karma start`)
2. Note the values printed (`dv` and `mv`)
3. Edit `src/entry.js` or `src/dependency.js` and change the variables
4. Karma should recompile with the new values when the files above are saved. It does not.

