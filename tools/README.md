## General Information
The root of this folder contains the following files:

| Filename     | Description |
| :----------- | :---------- |
| `.gitignore` | Adds the generated `*.js` and `.js.map` files to the list of ignores files for git |
| `config.ts`  | Exports the project configuration, which contains of the basic configuration provided by `/config/base.config.ts` and the project specific overrides defined by `/config/project.config.ts` |
| `debug.ts`   | Provides the ability to debug a specific build task |
| `README.md`  | The documentation of the tools section |
| `utils.ts`   | Exports the utilities provided by the base barrel file (`/utils/base.utils.ts`) and the project specific barrel file (`/utils/project.utils.ts`) |

## Tasks

| Filename               | Description |
| :--------------------- | :---------- |
| `build.assets.dev.ts`  | Copies the assets (located in `src/client/assets`) over to the `dist/dev/assets` directory |
| `build.assets.prod.ts` | Copies the assets (located in `src/client/assets`) over to the `dist/prod/assets` directory |
| `build.bundles.app.ts` | Bundles the JavaScript files using the SystemJS Builder |
| `build.bundles.ts`     | Bundles the JavaScript shim dependencies |
| `build.docs.ts`        | Builds the documentation for the TypeScript files using `typedoc` |
| `build.pug_scss.ts`    | Builds the `pug`/`html` and `scss`/`css` files and applies CSS postprocessing |
| `build.index.dev.ts`   | Builds the `index.html` for the `dev` environment |
| `build.index.prod.ts`  | Builds the `index.html` for the `prod` environment |
| `build.js.dev.ts`      | Transpiles the TypeScript files (excluding specs and e2e specs) for the `dev` environment |
| `build.js.e2e.ts`      | Transpiles the TypeScript files (excluding specs and e2e specs) for the `e2e` environment |
| `build.js.prod.ts`     | Transpiles the TypeScript files (excluding specs and e2e specs) for the `prod` environment |
| `build.js.test.ts`     | Transpiles the TypeScript files (excluding specs and e2e specs) for the `test` environment |
| `build.js.tools.ts`    | Transpiles the TypeScript files located in `/tools` |
| `check.versions.ts`    | Checks if the required Node and NPM (as defined in `/config/base.config.ts`) are installed |
| `clean.all.ts`         | Cleans all files within the `/dist` directory |
| `clean.coverage.ts`    | Cleans all files within the `/coverage` directory |
| `clean.dev.ts`         | Cleans all files within the `/dist/dev` directory |
| `clean.prod.ts`        | Cleans all files within the `/dist/prod` directory |
| `clean.tools.ts`       | Cleans all JavaScript files (which got transpiled from the TypeScript files) within the `/tools` directory  |
| `copy.js.prod.ts`      | Copies all TypeScript files (excluding specs and e2e specs) over to the `/tmp` dir |
| `css-lint.ts`          | Lints all `css` files using `stylelint` |
| `e2e.ts`               | Runs all e2e specs using `protractor` |
| `generate.manifest.ts` | Generates a `manifest` file for the application |
| `karma.start.ts`       | Starts the unit tests using `karma` |
| `serve.coverage.ts`    | Serves the unit test coverage report using an `express` server |
| `serve.docs.ts`        | Serves the application documentation using an `express` server |
| `server.prod.ts`       | Serves the files from `/dist/prod` using an `express` server |
| `server.start.ts`      | Serves the files from `/dist/dev` using an `express` server |
| `tslint.ts`            | Lints the TypeScript files using `codelyzer` |
| `watch.dev.ts`         | Watches for code changes and rebuilds the files in `/dist/dev` |
| `watch.e2e.ts`         | Watches for code changes and rebuilds the files in `/dist/e2e` |
| `watch.test.ts`        | Watches for code changes and rebuilds the files in `/dist/test` |
| `webdriver.ts`         | Installs the Selenium webdriver used for the Protractor e2e specs |

## Utilities

| Filename               | Description |
| :--------------------- | :---------- |
| `clean.ts`             | Provides a utility to clean files and directories |
| `code_change_tools.ts` | Provides utilities to make use of BrowserSync to refresh the browser after a code change |
| `server.ts`            | Provides utilities to start `express` servers for the application, the documentation and the unit test coverage |
| `task_tools.ts`        | Provides utilities to start tasks (matching task names as string input parameters from the `gulpfile.ts` to the corresponding files) |
| `template_locals.ts`   | Provides a utility for template locals |
| `tsproject.ts`         | Provides a utility to configure the TypeScript transpilation |
| `watch.ts`             | Provides a utility to watch for file changes and notify live reloads |
