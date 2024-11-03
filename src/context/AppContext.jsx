import React, { createContext, useState } from 'react';

const AppContext = createContext({
  basename: '',
  setBasename: () => {},
});

const AppProvider = ({ children }) => {
  const [basename, setBasename] = useState('');

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
