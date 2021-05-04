import React, { createContext, useState, useContext } from "react";
import { mappings } from "../data";

const initialState = {
  lang: "en_GB",
};

const GlobalContext = createContext({
  lang: initialState.lang,
});

export const GlobalProvider = ({ children }) => {
  const [lang, setLang] = useState(initialState.lang);

  const getText = (code, module = null) => {
    if (module === null) {
      return mappings[lang].global[code];
    } else {
      return mappings[lang][module][code];
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        lang,
        setLang,
        getText,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default function useGlobalState() {
  return useContext(GlobalContext);
}
