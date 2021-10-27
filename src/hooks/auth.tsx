import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
  } from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import api from '../services/api';
  
  interface IUser {
    user_name: string;
    email: string;
  }

  interface ISignInCredentials {
    email: string;
    password: string;
  }
  
  interface IAuthContextData {
    user: IUser;
    signIn: (credentials: ISignInCredentials) => Promise<void>;
    signOut: () => Promise<void>;
  }
  
  interface IAuthProviderProps {
    children: ReactNode;
  }
  
  const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);
  
  function AuthProvider({ children }: IAuthProviderProps) {
    const [data, setData] = useState<IUser>({} as IUser);

  
    /* ******************************[SIGNIN]******************************** */
    // Fazendo login na aplicação;
    async function signIn({ email, password }: ISignInCredentials) {
      try {
        const response = await api.post('/sessions', {
          email,
          password,
        });
        const { token, user } = response.data;

        await AsyncStorage.multiSet([
            ['@Agriness:token', token],
            ['@Agriness:user', JSON.stringify(user)],
        ]);

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
        // Salvando dados de login no estado;
        setData({ ...user, token });
      } catch (error) {
        throw new Error('error');
      }
    }
    /* ********************************************************************** */

    /* *****************************[SIGNOUT]******************************** */
    // Fazendo logout na aplicação;
    async function signOut() {
        await AsyncStorage.multiRemove(['@Agriness:token', '@Agriness:user']);
        setData({} as IUser);
    };
    /* ********************************************************************** */
  
    return (
      <AuthContext.Provider value={{ user: data, signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  function useAuth(): IAuthContextData {
    const context = useContext(AuthContext);
  
    return context;
  }
  
  export { AuthProvider, useAuth };