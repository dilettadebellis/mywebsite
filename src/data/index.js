import * as globalEnGB from "./en_GB/global";
import * as globalItIT from "./it_IT/global";
import * as skillsEnGB from "./en_GB/skills";
import * as skillsItIT from "./it_IT/skills";
import * as cookieEnGB from "./en_GB/cookie-policy";
import * as privacyEnGB from "./en_GB/privacy-policy";
import * as cookieItIT from "./it_IT/cookie-policy";
import * as privacyItIT from "./it_IT/privacy-policy";
import * as eduEnGB from "./en_GB/education";
import * as eduItIT from "./it_IT/education";
import * as expEnGB from "./en_GB/experiences";
import * as expItIT from "./it_IT/experiences";
import * as servicesEnGB from "./en_GB/services";
import * as servicesItIT from "./it_IT/services";
import * as worksEnGB from "./en_GB/works";
import * as worksItIT from "./it_IT/works";

export const mappings = {
  en_GB: {
    global: globalEnGB.global,
    skills: { ...skillsEnGB },
    cookie: { ...cookieEnGB },
    privacy: { ...privacyEnGB },
    education: { ...eduEnGB },
    experiences: { ...expEnGB },
    services: { ...servicesEnGB },
    works: { ...worksEnGB },
  },
  it_IT: {
    global: globalItIT.global,
    skills: { ...skillsItIT },
    cookie: { ...cookieItIT },
    privacy: { ...privacyItIT },
    education: { ...eduItIT },
    experiences: { ...expItIT },
    services: { ...servicesItIT },
    works: { ...worksItIT },
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
