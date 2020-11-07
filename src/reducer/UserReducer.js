export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'RETRIEVE_USER_STATUS':
      return action.payload;

    case 'USER_LOGIN_SUCCESS':
      return 'member';

    case 'USER_LOGOUT':
      return 'guest';

    default:
      return state;
  }
};
