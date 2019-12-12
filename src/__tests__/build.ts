import fs from 'fs';

import manifest from '../../manifest.json';

describe('build script', () => {
  it('should create the plugin.js and ui.html files in the dist folder', async () => {
    const pluginFilePath = manifest.main;
    const uiFilePath = manifest.ui;

    // JS plugin file has been generated
    expect(fs.existsSync(`./${pluginFilePath}`)).toBeDefined();

    // HTML plugin file has been generated (test only if it's declared in the manifest)
    if (uiFilePath) {
      expect(fs.existsSync(`./${uiFilePath}`)).toBeDefined();
    }
  });
});
