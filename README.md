![Turtle UI](./README_cover.png)

This repository contains a source code for the Web Component implementation of [**Turtle UI**][design file], designed by [**@oathkite**](https://github.com/oathkite).

- [Design specification][design file]
- [Documentation](https://pocka.github.io/TurtleUI)

[design file]: https://www.figma.com/community/file/990997715540889664

[![npm](https://img.shields.io/npm/v/@turtleui/webcomponents)](https://www.npmjs.com/package/@turtleui/webcomponents)
[![License](https://img.shields.io/github/license/pocka/TurtleUI)](https://github.com/pocka/TurtleUI/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

## Getting started

```sh
# In your project...
$ npm i @turtleui/webcomponents
```

```js
// index.js
import {
  allComponents,
  registerTurtleUIComponents,
} from "@turtleui/webcomponents";

registerTurtleUIComponents(allComponents);
```

```html
<!-- index.html -->
<body>
  <turtle-design-system>
    <turtle-button variant="primary">Hello, World!</turtle-button>
  </turtle-design-system>
</body>
```

## How to contribute

See [CONTRIBUTING.md](./CONTRIBUTING.md).
