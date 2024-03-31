import HelloInput from "./HelloInput";
import HelloLabel from "./HelloLabel";
import Provider from "./providers/provider";
import React from "react";

const HelloWithContext = () => {
  return (
    <div>
      <Provider>
        <HelloInput />
        <HelloLabel />
      </Provider> 
    </div>
  );
}

export default HelloWithContext;
