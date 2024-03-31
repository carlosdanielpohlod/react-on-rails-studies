import useMessage from './hooks/useMessage'
import React from "react";

const HelloLabel = () => {
  const { message } = useMessage();

  return <div>{message}</div>;
}

export default HelloLabel;
