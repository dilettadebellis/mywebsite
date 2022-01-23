import React, { createContext, useState, useContext, useEffect } from "react";
import { mappings } from "../data";
import { useCookies } from "react-cookie";
import { getCodes } from "../data/en_GB/cookies";

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

const MAX_AGE = 60 * 60 * 24 * 365;

const initialState = {
  lang: langMapping.en_GB.code,
};

const GlobalContext = createContext({
  lang: initialState.lang,
});

export const GlobalProvider = ({ children }) => {
  const [lang, setLang] = useState(initialState.lang);
  const [texts, setTexts] = useState(mappings[lang]);
  const [cookies, setCookie] = useCookies([getCodes()]);

  const saveCookies = (cookieCodes) => {
    Object.keys(cookieCodes).forEach((code) => {
      setCookie(`${code}-cookie-accepted`, cookieCodes[code], {
        path: "/",
        maxAge: MAX_AGE,
      });
    });
  };

  const enabledCookies = () => {
    return getCodes().map((code) => {
      const onlyCode = code.replace("-cooke-accepted", "");
      if (cookies[code]) {
        return { [onlyCode]: true };
      } else {
        return { [onlyCode]: false };
      }
    });
  };

  const functionalCookieEnabled = () => {
    return cookies["functional-cookie-accepted"];
  };

  const statsCookieEnabled = () => {
    return cookies["stats-cookie-accepted"];
  };

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
        saveCookies,
        enabledCookies,
        functionalCookieEnabled,
        statsCookieEnabled,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default function useGlobalState() {
  return useContext(GlobalContext);
}
