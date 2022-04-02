import React, { createContext, useState, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { getCodes } from "./data/cookies";

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
  const [cookies, setCookie] = useCookies([getCodes()]);
  const [themeColor, setThemeColor] = useState("light");
  const [screenMode, setScreenMode] = useState("desktop");

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

  const screenTypeFromWidth = () => {
    const width = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (width < 576) {
      setScreenMode("mobile");
    } else {
      if (width < 768) {
        setScreenMode("tablet");
      } else {
        setScreenMode("desktop");
      }
    }
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setThemeColor("dark");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setThemeColor(newColorScheme);
      });
    screenTypeFromWidth();
    window.addEventListener("resize", screenTypeFromWidth);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        lang,
        setLang,
        themeColor,
        setThemeColor,
        screenMode,
        setScreenMode,
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
