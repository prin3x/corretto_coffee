import React, {createContext, useReducer, useEffect} from 'react';
import {ReviewReducer} from '../reducer/ReviewReducer';
import axios from '../config/axios';

export const ReviewContext = createContext();

export function ReviewContext({children}) {
  const [reviews, dispatch] = useReducer(ReviewReducer, []);

  return (
    <ReviewContext.Provider value={{reviews, dispatch}}>
      {children}
    </ReviewContext.Provider>
  );
}
