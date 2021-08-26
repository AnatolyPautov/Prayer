import React from 'react';
import Context from './context';
import Router from './src/navigation/Router';

const App = () => {
  const [userName, setUserName] = React.useState<string>('');

  return (
    <Context.Provider value={{userName, setUserName}}>
      <Router />
    </Context.Provider>
  );
};

export default App;
