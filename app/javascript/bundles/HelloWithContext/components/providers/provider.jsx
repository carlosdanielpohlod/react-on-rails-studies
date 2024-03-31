import React, {useState} from 'react';
import Context from './context'; // Certifique-se de que o caminho do import está correto

const Provider = ({children}) => {
  const [message, setMessage] = useState();

  return (
    <Context.Provider value={{message, setMessage}}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
