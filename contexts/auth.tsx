import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { User } from '../types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = null | {
  data: AuthData;
  dispatch: React.Dispatch<AuthReducerAction>;
  //   setData: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType>(null);

const initialState: AuthData = {
  user: null,
};

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  //   const [data, setData] = useState('Ciclano');
  const [data, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(() => {
    AsyncStorage.getItem('authuser').then(value => {
      if (value !== null) {
        dispatch({
          type: 'SET_USER',
          payload: JSON.parse(value),
        });
      }
    });
  }, []);

  // useEffect(() => {
  //   const loadUser = async () => {
  //     const value = await AsyncStorage.getItem('authuser');
  //     if (value !== null) {
  //       dispatch({
  //         type: 'SET_USER',
  //         payload: JSON.parse(value),
  //       });
  //     }
  //   };

  //   loadUser();
  // }, []);

  return (
    <AuthContext.Provider value={{ data, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

type AuthData = {
  user: User | null;
};

type AuthReducerAction = {
  type: 'SET_USER';
  payload: User;
};

const AuthReducer = (state: AuthData, action: AuthReducerAction) => {
  switch (action.type) {
    case 'SET_USER':
      const valueToStore = JSON.stringify(action.payload);
      AsyncStorage.setItem('authuser', valueToStore);
      return { ...state, user: action.payload };
      break;
  }
};
