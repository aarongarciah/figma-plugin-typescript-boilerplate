import { UIActionTypes, UIAction, WorkerActionTypes, WorkerAction } from '../types';

import './ui.css';

// Sends a message to the plugin worker
function postMessage({ type, payload }: UIAction): void {
  parent.postMessage({ pluginMessage: { type, payload } }, '*');
}

// Listen to messages received from the plugin worker (src/plugin/plugin.ts)
function listenToPluginMessages(): void {
  window.onmessage = function(event: MessageEvent): void {
    const pluginMessage = event.data.pluginMessage as WorkerAction;
    const { type, payload } = pluginMessage;

    switch (type) {
      case WorkerActionTypes.CREATE_RECTANGLE_NOTIFY:
        payload && alert(payload);
        break;
    }
  };
}

// Close the plugin if pressing Esc key when the input is not focused
function closeWithEscapeKey(): void {
  const tagExceptions = ['input', 'textarea'];

  document.addEventListener('keydown', function(event: KeyboardEvent) {
    try {
      const target = event.target as HTMLElement;

      if (
        event.code.toString().toLowerCase() === 'escape' &&
        !tagExceptions.includes(target.tagName.toLowerCase())
      ) {
        postMessage({ type: UIActionTypes.CLOSE });
      }
    } catch (error) {
      console.error(error);
    }
  });
}

// Attach event listeners (for this specific demo)
function buttonListeners(): void {
  document.addEventListener('click', function(event: MouseEvent) {
    const target = event.target as HTMLElement;

    switch (target.id) {
      case 'rectangleBtn':
        postMessage({ type: UIActionTypes.CREATE_RECTANGLE });
        break;
      case 'notificationBtn':
        postMessage({ type: UIActionTypes.NOTIFY, payload: 'Hello!' });
        break;
      case 'closeBtn':
        postMessage({ type: UIActionTypes.CLOSE });
        break;
    }
  });
}

// Initialize all the things
listenToPluginMessages();
closeWithEscapeKey();
buttonListeners();
