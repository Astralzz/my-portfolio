import jsonEn from "../data/info-en.json";

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
