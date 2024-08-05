"use client"

// context/MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface MyContextProps {
  value: string;
  setValue: (value: string) => void;
  test: string;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>("default");
  const test = "test";

  return (
    <MyContext.Provider value={{ value, setValue, test }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

// "use client";
// import React, { createContext, useContext, useState, ReactNode } from "react";
// import { account, ID } from "../app/appwrite";
// interface MyContextProps {
//   value: string;
//   setValue: (value: string) => void;
//   loggedInUser: any; // Adjust type as needed
//   email: string;
//   setEmail: (email: string) => void;
//   password: string;
//   setPassword: (password: string) => void;
//   name: string;
//   setName: (name: string) => void;
//   login: (email: string, password: string) => Promise<void>;
//   register: () => Promise<void>;
//   logout: () => Promise<void>;
// }

// const MyContext = createContext<MyContextProps | undefined>(undefined);

// export const AppContext = ({ children }: { children: ReactNode }) => {
//   const [value, setValue] = useState<string>("default");

//   const [loggedInUser, setLoggedInUser] = useState<any>(null); // Adjust type as needed
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [name, setName] = useState<string>("");

//   const login = async (email: string, password: string) => {
//     const session = await account.createEmailPasswordSession(email, password);
//     setLoggedInUser(await account.get());
//   };

//   const register = async () => {
//     await account.create(ID.unique(), email, password, name);
//     await login(email, password);
//   };

//   const logout = async () => {
//     await account.deleteSession("current");
//     setLoggedInUser(null);
//   };

//   return (
//     <MyContext.Provider
//       value={{
//         value,
//         setValue,
//         loggedInUser,
//         email,
//         setEmail,
//         password,
//         setPassword,
//         name,
//         setName,
//         login,
//         register,
//         logout,
//       }}
//     >
//       {children}
//     </MyContext.Provider>
//   );
// };

// export const useMyContext = () => {
//   const context = useContext(MyContext);
//   if (context === undefined) {
//     throw new Error("useMyContext must be used within an AppContext");
//   }
//   return context;
// };
