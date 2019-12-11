import { UIActionTypes, UIAction, WorkerActionTypes, WorkerAction } from '../types';

// Sends a message to the plugin UI
function postMessage({ type, payload }: WorkerAction): void {
  figma.ui.postMessage({ type, payload });
}

// Creates a rectangle (demo purposes)
function createRectangle(): void {
  const rect = figma.createRectangle();
  const width = 100;
  const height = 100;

  rect.resize(width, height);
  rect.x = figma.viewport.center.x - Math.round(width / 2);
  rect.y = figma.viewport.center.y - Math.round(height / 2);
  figma.currentPage.appendChild(rect);
  figma.currentPage.selection = [rect];
  figma.viewport.scrollAndZoomIntoView([rect]);

  postMessage({ type: WorkerActionTypes.CREATE_RECTANGLE_NOTIFY, payload: 'Rectangle created 👍' });
}

// Listen to messages received from the plugin UI (src/ui/ui.ts)
figma.ui.onmessage = function({ type, payload }: UIAction): void {
  switch (type) {
    case UIActionTypes.CLOSE:
      figma.closePlugin();
      break;
    case UIActionTypes.NOTIFY:
      payload && figma.notify(payload);
      break;
    case UIActionTypes.CREATE_RECTANGLE:
      createRectangle();
      break;
  }
};

// Show the plugin interface (https://www.figma.com/plugin-docs/creating-ui/)
// Remove this in case your plugin doesn't need a UI, make network requests, use browser APIs, etc.
// If you need to make network requests you need an invisible UI (https://www.figma.com/plugin-docs/making-network-requests/)
figma.showUI(__html__, { width: 350, height: 200 });
