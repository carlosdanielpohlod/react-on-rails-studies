import context from '../providers/context' 
import { useContext } from 'react'

const useMessage = () => {
  const contextValue = useContext(context);

  if(contextValue === undefined) {
    throw new Error('useMessage must be used within a MessageProvider')
  }

  return contextValue;
}

export default useMessage;
