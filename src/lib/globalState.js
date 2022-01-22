import React, { createContext, useState, useContext, useEffect } from "react";
import { mappings } from "../data";

export const langMapping = {
  en_GB: {
    code: "en_GB",
    short: "en",
    name: "English",
  },
  it_IT: {
    code: "it_IT",
    short: "it",
    name: "Italiano",
  },
};

const initialState = {
  lang: langMapping.en_GB.code,
};

const GlobalContext = createContext({
  lang: initialState.lang,
});

export const GlobalProvider = ({ children }) => {
  const [lang, setLang] = useState(initialState.lang);
  const [texts, setTexts] = useState(mappings[lang]);

  useEffect(() => {
    setTexts(mappings[lang]);
  }, [lang]);

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
        texts,
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
