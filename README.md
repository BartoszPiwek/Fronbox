![Webpack logo](https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png)

# FrontBox

Static WWW builder tool. Connect prepared components to create hermetic website.

## Table of contents

-   [Playground](#playground)
-   [Preview/Status](#previewstatus)
-   [Information](#information)
-   [Requirements](#requirements)
    -   [Visual Studio Code addons](#visual-studio-code-addons)
-   [Terminal tasks](#terminal-tasks)
-   [Projekt Tree](#projekt-tree)
-   [Bugs](#bugs)

## Playground

[![Link to playground](https://codesandbox.io/static/img/banner.png)](https://codesandbox.io/s/frontbox-1zmgu)

## Preview/Status

| Type                                                        | Badge                                                                                                       |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Productive](https://frontbox.netlify.app)                  | ![Netlify Status](https://api.netlify.com/api/v1/badges/395471d4-6cc3-4865-ab14-b8e2097b8d78/deploy-status) |
| [Documentation](https://frontbox-documentation.netlify.app) | ![Netlify Status](https://api.netlify.com/api/v1/badges/e0cb4b38-0edd-4f09-a4fb-0e54be98ccad/deploy-status) |

## Information

|            |                                              |
| ---------- | -------------------------------------------- |
| Author     | Bartosz Piwek                                |
| Version    | 0.0.1                                        |
| HTML       | [Pug](https://pugjs.org/)                    |
| CSS        | [SCSS](https://sass-lang.com)                |
| JavaScript | [TypeScript](https://www.typescriptlang.org) |

### Partial list of npm packages:

| Package                                                          | Description                                                                                                                                            |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [FrontBox-Style](https://github.com/BartoszPiwek/FrontBox-Style) | Hermetic SCSS files contain helpful methods used on most websites, divided into categories: functions, generators, modules, shapes, styles, variables. |
| [scroll-lock](https://www.npmjs.com/package/scroll-lock)         | Cross-browser JavaScript library to disable scrolling page                                                                                             |
| [vh-check](https://www.npmjs.com/package/vh-check)               | Get reliable CSS vh sizes                                                                                                                              |

## Requirements

|                                                     |                                       |
| --------------------------------------------------- | ------------------------------------- |
| [Node.js](https://nodejs.org/en)                    | JavaScript run-time environment       |
| [Webpack](https://webpack.js.org/)                  | Module bundler                        |
| [Yarn](https://yarnpkg.com)                         | Fast, reliable, and secure dependency |
| [Visual Studio Code](https://code.visualstudio.com) | IDE                                   |

### Visual Studio Code addons

| Plugin                                                                                        | Description                 |
| --------------------------------------------------------------------------------------------- | --------------------------- |
| [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)   | Modern CSS/SCSS/Less linter |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)        | Code formatter              |
| [Pug beautify](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-pugbeautify) | Simple Pug/Jade beautify    |

## Terminal tasks

| Task       | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| yarn start | Generate website with server and automatic update after modifying files |
| yarn build | Generate prod website                                                   |

## Projekt Tree

```
├─── content                          | Text content
├─── dist                             | Generated website
├─── dosc                             | Documentation
└─── src/
    ├─── components                   | Components {ts, pug, scss}
    ├─── modals                       | Modals content {ts, pug}
    ├─── pages                        | Pages {pug}
    ├─── scripts/
        ├─── abstract                 | Abstract classes
        ├─── app                      | Custom js/ts plugins folder
        ├─── bootstrap                | Framework classes
        ├─── tools                    | Framework tools
        └─── ...

    ├─── services                     | Services
    ├─── static/                      | Static assets
        ├─── audios
        ├─── fonts
        ├─── icons
        ├─── images
        └─── videos

    ├─── style/
        ├─── global
        ├─── utilities
        ├─── variables
        ├─── global.scss
        ├─── utilities.scss
        └─── variables.scss

    ├─── template                      | Pug extends files
    └─── utilities                     | Pug utilities
```

## Bugs

Feel free to [create bug issues](https://github.com/BartoszPiwek/FrontBox-Static-Webpack/issues/new?labels=bug).
