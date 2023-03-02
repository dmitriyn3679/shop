import { User } from '../types/User';

type SetUser = { type: 'user/SET', payload: User };
type RemoveUser = { type: 'user/REMOVE' };

const setUser = (value: User): SetUser => (
  { type: 'user/SET', payload: value }
);
const removeUser = (): RemoveUser => ({ type: 'user/REMOVE' });

type Action = SetUser | RemoveUser;

const initialValue: User = {
  id: null,
  email: null,
  name: null,
};

const userReducer = (user = initialValue, action: Action) => {
  switch (action.type) {
    case 'user/SET': {
      return { ...user, ...action.payload };
    }

    case 'user/REMOVE': {
      return {
        ...user, id: null, email: null, name: null,
      };
    }

    default:
      return user;
  }
};

export const actions = { setUser, removeUser };
export default userReducer;
