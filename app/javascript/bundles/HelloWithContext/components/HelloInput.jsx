import useMessage from './hooks/useMessage'
import React from "react";
const HelloInput = () => {
  const { message, setMessage } = useMessage()

  return (
    <input onChange={(e) => setMessage(e.target.value)} value={message} />
  );
}

export default HelloInput;
