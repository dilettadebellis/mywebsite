import * as globalEnGB from "./en_GB/global";
import * as globalItIT from "./it_IT/global";
import * as skillsEnGB from "./en_GB/skills";
import * as skillsItIT from "./it_IT/skills";
import * as cookieEnGB from "./en_GB/cookie-policy";
import * as privacyEnGB from "./en_GB/privacy-policy";
import * as cookieItIT from "./it_IT/cookie-policy";
import * as privacyItIT from "./it_IT/privacy-policy";

export const mappings = {
  en_GB: {
    global: globalEnGB.global,
    skills: {
      ...skillsEnGB,
    },
    cookie: {
      ...cookieEnGB,
    },
    privacy: {
      ...privacyEnGB,
    },
  },
  it_IT: {
    global: globalItIT.global,
    skills: {
      ...skillsItIT,
    },
    cookie: {
      ...cookieItIT,
    },
    privacy: {
      ...privacyItIT,
    },
  },
};

/*export const mappings = {
  en_GB: {
    global: globalEnGB.global,
    ...skillsEnGB,
    ...cookieEnGB,
    ...privacyEnGB,
  },
  it_IT: {
    global: globalItIT.global,
    ...skillsItIT,
    ...cookieItIT,
    ...privacyItIT,
  },
};*/
