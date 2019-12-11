# Figma Plugin TypeScript Boilerplate

[![Actions Status](https://github.com/aarongarciah/figma-plugin-typescript-boilerplate/workflows/CI/badge.svg)](https://github.com/aarongarciah/figma-plugin-typescript-boilerplate/actions)
[![Greenkeeper badge](https://badges.greenkeeper.io/aarongarciah/figma-plugin-typescript-boilerplate.svg)](https://greenkeeper.io/)

Figma plugin TypeScript boilerplate to start developing right away.

## Quick start

In your terminal, execute these commands

```bash
mkdir my-plugin
cd my-plugin
npx degit https://github.com/aarongarciah/figma-plugin-typescript-boilerplate
```

or [download the repo](https://github.com/aarongarciah/figma-plugin-typescript-boilerplate/archive/master.zip) and extract it into your empty plugin folder.

> You'll need Node and at least npm v5.2.0 to execute the `npx` command

## Development

To develop a Figma plugin you need to install the Figma [desktop app](https://www.figma.com/downloads/). Learn more in the [Figma Plugin docs](https://www.figma.com/plugin-docs/setup/).

### Available commands:

- `npm run dev`: starts the watcher for changes. Modify the files under the `src` folder and the code will be compiled automatically. Then, go to the Figma app and run your development plugin.
- `npm run build`: generates the production build in the `dist` folder. Before generating the build, it checks the TypeScript, JavaScript and CSS files for linting errors.
- `npm run test`: simple test that ensures that the `ui.html` and `plugin.js` files have been generated in the `dist` folder.
- `npm run lint`: lint TypeScript and JavaScript files with ESLint and CSS with Stylelint.
- `npm run lint:fix`: lint and apply automatic fixes to TypeScript, JavaScript and CSS files. This script runs before `build`.

---

## Having problems?

Take a look if someone already opened [a similar issue](https://github.com/aarongarciah/figma-plugin-boilerplate/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+) or open a [new one](https://github.com/aarongarciah/figma-plugin-boilerplate/issues/new).

---

## Roadmap

- [ ] Improve README and detail boilerplate goodies.
- [ ] Create a new package based on this one with an interactive CLI to create templates with different options: UI/No UI, TS/JS, etc.
- [ ] Find proper ways of testing plugins outside Figma and add testing setup.

---

Made with ♥️ by [Aarón García Hervás](https://twitter.com/aarongarciah)
