'use client';
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

export type User = {
  _id: String,
  crypto: [],
  name: String,
  email: String,
  stock: [],
}

interface UserContextProps {
  user: User,
  setUser: Dispatch<SetStateAction<User>>,
}

const UserContext = createContext<UserContextProps>({
  user: {
    _id: '',
    crypto: [],
    name: '',
    email: '',
    stock: [],
  },
  setUser: (): [] => [],
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    _id: '',
    crypto: [],
    name: '',
    email: '',
    stock: [],
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
/*
'use client';
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

export type User = {
  crypto: 
  [{
    cryptoName: String,
    amount: Number,
    purchasePrice: Number,
  }],
  email: string,
  name: string,
  stock: 
  [{
    stockName: String,
    amount: Number,
    purchasePrice: Number,
  }],
}

interface UserContextProps {
  user: User,
  setUser: Dispatch<SetStateAction<User>>,
}

const UserContext = createContext<UserContextProps>({
  user: {
    crypto: 
    [{
      cryptoName: '',
      amount: 0,
      purchasePrice: 0,
    }],
    email: '', 
    name:'', 
    stock: 
    [{
      stockName: '',
      amount: 0,
      purchasePrice: 0,
    }],
  },
  setUser: (): string => '',
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    crypto: 
    [{
      cryptoName: '',
      amount: 0,
      purchasePrice: 0,
    }],
    email: '', 
    name:'', 
    stock: 
    [{
      stockName: '',
      amount: 0,
      purchasePrice: 0,
    }],
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
*/