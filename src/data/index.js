import * as globalEnGB from "./en_GB/global";
import * as globalItIT from "./it_IT/global";
import * as skillsEnGB from "./en_GB/skills";
import * as skillsItIT from "./it_IT/skills";

export const mappings = {
  en_GB: {
    global: globalEnGB.global,
    skills: {
      workSkills: skillsEnGB.workSkills,
      languageSkills: skillsEnGB.languageSkills,
    },
  },
  it_IT: {
    global: globalItIT.global,
    skills: {
      workSkills: skillsItIT.workSkills,
      languageSkills: skillsItIT.languageSkills,
    },
  },
};
