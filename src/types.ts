// UI actions
export enum UIActionTypes {
  CLOSE = 'CLOSE',
  NOTIFY = 'NOTIFY',
  CREATE_RECTANGLE = 'CREATE_RECTANGLE',
}

export interface UIAction {
  type: UIActionTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

// Worker actions
export enum WorkerActionTypes {
  CREATE_RECTANGLE_NOTIFY = 'CREATE_RECTANGLE_NOTIFY',
}

export interface WorkerAction {
  type: WorkerActionTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
