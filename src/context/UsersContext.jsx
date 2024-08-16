import { createContext, useState, useContext } from 'react';
import { getUser } from '../utilities/users-service';

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [user, setUser] = useState(getUser());

  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export default function useUsers() {
  return useContext(UsersContext);
}