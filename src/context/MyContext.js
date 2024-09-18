import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const MyContext = createContext();

// Fournisseur du contexte
export const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello World');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useMyContext = () => useContext(MyContext);
