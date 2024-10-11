import React, { createContext, useContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the type for your object
interface MyUserType {
  [key: string]: any;
}

interface DataType {
  [key: string]: any;
}

interface MyContextType {
  userData: MyUserType;
  setUserData: Dispatch<SetStateAction<MyUserType>>;
  data: DataType | null;
  setData: Dispatch<SetStateAction<DataType | null>>;
}

interface UserContextProviderProps {
  value?: { userData: MyUserType; };
  children: ReactNode;
}

// Create context with default values
export const MyContext = createContext<MyContextType>({
  userData: {},
  setUserData: () => { },
  data: null,
  setData: () => { },
});

MyContext.displayName = 'Context';

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ value, children }) => {
  const [userData, setUserData] = useState<MyUserType>(value ? value?.userData : {});
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    if (value?.userData) {
      setUserData(value.userData);
    }
  }, [value]);

  return (
    <MyContext.Provider value={{ userData, setUserData, data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useUser = () => useContext(MyContext);
