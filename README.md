![Webpack logo](https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png)

<h1 align="center">FrontBox Blocks Webpack</h1>

Static WWW builder tool. Connect prepared components to create hermetic website.

## Table of contents

-   [FrontBox Static](#FrontBox-Static-Webpack)
    -   [Table of contents](#table-of-contents)
    -   [Preview/Status](#previewstatus)
    -   [Information](#information)
    -   [Requirements](#requirements)
        -   [Visual Studio Code addons](#visual-studio-code-addons)
    -   [Gulp](#gulp)
        -   [Terminal tasks](#terminal-tasks)
    -   [Projekt Tree](#projekt-tree)
    -   [Bugs](#bugs)

## Playground

[![Link to playground](https://codesandbox.io/static/img/banner.png)](https://codesandbox.io/s/still-wood-ibvfd)

## Preview/Status

[Development](https://quirky-perlman-434ce5.netlify.app/):

![Netlify Status](https://api.netlify.com/api/v1/badges/ad028d61-7253-4819-a571-350e3acd37a5/deploy-status)

[Productive](https://tender-pasteur-b2164f.netlify.app/):

![Netlify Status](https://api.netlify.com/api/v1/badges/7bf6c2d1-2d28-42b2-86d2-2c04fe70d4a1/deploy-status)

[Documentation](https://festive-meitner-bb09bc.netlify.app/):

![Netlify Status](https://api.netlify.com/api/v1/badges/b492ef35-2480-45e6-8420-b7926e588f1f/deploy-status)

## Information

Project contain [FrontBox-Style](https://github.com/BartoszPiwek/FrontBox-Style) package.

|            |                                              |
| ---------- | -------------------------------------------- |
| Author     | Bartosz Piwek                                |
| Version    | 0.0.1                                        |
| HTML       | [Pug](https://pugjs.org/)                    |
| CSS        | [SCSS](https://sass-lang.com)                |
| JavaScript | [TypeScript](https://www.typescriptlang.org) |

### Partial list of npm packages:

| Package                                                  | Description                                                |
| -------------------------------------------------------- | ---------------------------------------------------------- |
| [scroll-lock](https://www.npmjs.com/package/scroll-lock) | Cross-browser JavaScript library to disable scrolling page |
| [vh-check](https://www.npmjs.com/package/vh-check)       | Get reliable CSS vh sizes                                  |

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

## Gulp

### Terminal tasks

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
