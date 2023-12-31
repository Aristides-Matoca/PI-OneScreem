// Criando o contexto
import React, { createContext, useState } from 'react';

const UsernameContext = createContext({
  username: '',
  setUsername: () => {}
});

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};

export default UsernameContext;
