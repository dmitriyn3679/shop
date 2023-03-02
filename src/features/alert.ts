import { Alert } from '../types/Alert';

type AddAction = { type: 'alert/ADD', payload: Alert };

type RemoveAction = { type: 'alert/REMOVE' };

const add = (value: Alert): AddAction => (
  { type: 'alert/ADD', payload: value }
);

const remove = (): RemoveAction => (
  { type: 'alert/REMOVE' }
);

type Action = AddAction | RemoveAction;

const initialAlert: Alert = {
  unauthorized: false,
};

const alertReducer = (state = initialAlert, action: Action) => {
  switch (action.type) {
    case 'alert/ADD':
      return { ...state, ...action.payload };

    case 'alert/REMOVE':
      return { ...state, unauthorized: false };

    default:
      return state;
  }
};

export const actions = {
  add, remove,
};
export default alertReducer;
