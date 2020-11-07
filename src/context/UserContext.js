import React, {createContext, useReducer, useEffect} from 'react';
import {UserReducer} from '../reducer/UserReducer';
import axios from '../config/axios';
import {notification} from 'antd';
import {useHistory} from 'react-router-dom';
import LocalStorageService from '../services/LocalStorageServices';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [role, dispatch] = useReducer(UserReducer, 'guest');

  useEffect(() => {
    dispatch({
      type: 'RETRIEVE_USER_STATUS',
      payload: LocalStorageService.getRole(),
    });
  }, []);

  const history = useHistory();

  const onFinish = async values => {
    const {username, password} = values;
    await axios
      .post('/api/users/signin', {username, password})
      .then(res => {
        LocalStorageService.setToken(res.data.token);
        dispatch({type: 'USER_LOGIN_SUCCESS'});
        notification['success']({
          message: 'You are logged in!',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
        history.push('/');
      })
      .catch(err => {
        if (err) {
          notification['error']({
            message: 'Username or Password is wrong!',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
        }
      });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleLogout = () => {
    LocalStorageService.removeToken();
    dispatch({type: 'USER_LOGOUT'});
    notification['success']({
      message: 'You are logged in!',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  return (
    <UserContext.Provider
      value={{role, dispatch, onFinish, onFinishFailed, handleLogout}}
    >
      {children}
    </UserContext.Provider>
  );
};
