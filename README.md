# Figma Plugin TypeScript Boilerplate

Figma plugin TypeScript boilerplate to start developing right away.

## Development

To develop a Figma plugin you need to install the Figma [desktop app](https://www.figma.com/downloads/). Learn more in the [Figma Plugin docs](https://www.figma.com/plugin-docs/setup/).

### Available commands:

- `npm run dev`: starts the watcher for changes. Modify the files under the `src` folder and the code will be compiled automatically. Then, go to the Figma app and run your development plugin.
- `npm run build`: generates the production build in the `dist` folder. Before generating the build, it checks the TypeScript code for linting errors.
- `npm run test`: simple test that ensures that the `ui.html` and `plugin.js` files have been generated in the `dist` folder.
- `npm run lint`: lint TypeScript code.
- `npm run lint:fix`: lint and apply automatic fixes to TypeScript code. This script runs before `build`.

---

## Having problems?

Take a look if someone already opened [a similar issue](https://github.com/aarongarciah/figma-plugin-boilerplate/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+) or open a [new one](https://github.com/aarongarciah/figma-plugin-boilerplate/issues/new).

---

## Roadmap

- [ ] Create a new package based on this one with an interactive CLI to create templates with different options: UI/No UI, TS/JS, etc.

---

Made with ♥️ by [Aarón García Hervás](https://twitter.com/aarongarciah)
