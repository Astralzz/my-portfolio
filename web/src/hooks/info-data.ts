import jsonEn from "../data/info-en.json";
import jsonEs from "../data/info-es.json";

// Tipo GraphicSkill
export type GraphicSkillType = {
  title?: string;
  list?: Array<{
    name?: string;
    level?: number;
    color?: string;
  }>;
};

// tipo AchievementCardType
export type AchievementCardType = {
  title?: string;
  subtitle?: string;
  tipo?: "app" | "web" | "server";
  technologies?: Array<string>;
  description?: string;
  links?: Array<{
    text?: string;
    url?: string;
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
    title?: string;
    languages?: GraphicSkillType;
    frameworks?: GraphicSkillType;
    databases?: GraphicSkillType;
    tools?: GraphicSkillType;
    otherSkills?: GraphicSkillType;
  };
  achievements?: {
    title?: string;
    list?: Array<AchievementCardType>;
  };
  experience?: {
    title?: string;
    list?: Array<{
      company?: {
        abbreviations?: string;
        name?: string;
      };
      role?: string;
      duration?: string;
      description?: string;
    }>;
  };
  education?: {
    title?: string;
    list?: Array<{
      institution?: string;
      degree?: string;
      duration?: string;
    }>;
  };
  references?: {
    title?: string;
    list?: Array<{
      name?: string;
      role?: string;
      testimonial?: string;
      links?: {
        tel?: string;
        email?: string;
      };
    }>;
  };
  repositories?: {
    title?: string;
    description?: string;
  };
};

// Detecta el idioma del navegador
const userLanguage = navigator.language;

// Carga el JSON en ingles
let INFO_APP: JsonDataType = jsonEn;

let lenguaje: "es" | "en" = "en";

// ? Es español
if (userLanguage.startsWith("es")) {
  INFO_APP = jsonEs as JsonDataType;
  lenguaje = "es";
}

// Idioma
export const LENGUAJE_BROWSER: "es" | "en" = lenguaje ?? "en";

export default INFO_APP;
