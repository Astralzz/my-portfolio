import jsonEn from "../data/info-en.json";

// Tipo GraphicSkill

export type GraphicSkillType = {
  title?: string;
  list?: Array<{
    name?: string;
    level?: number;
    color?: string;
  }>;
};

// Tipo del JSON
export type JsonDataType = {
  home?: {
    name?: string;
    description?: string;
    avatar?: {
      src?: string;
      alt?: string;
    };
    enlaces?: {
      github?: string;
      linkedin?: string;
      email?: string;
      facebook?: string;
    };
  };
  introduction?: {
    paragraph?: string;
  };
  skills?: {
    languages?: GraphicSkillType;
    frameworks?: GraphicSkillType;
    databases?: GraphicSkillType;
    tools?: GraphicSkillType;
    otherSkills?: GraphicSkillType;
  };
};

// Detecta el idioma del navegador
const userLanguage = navigator.language;

// Carga el JSON en ingles
let INFO_APP: JsonDataType = jsonEn;

// ? Es español
if (userLanguage.startsWith("es")) {
  const jsonEs = require("../data/info-es.json");
  INFO_APP = jsonEs;
}

export default INFO_APP;
