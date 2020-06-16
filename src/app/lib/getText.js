import languages from "../data/languages.json";

export default function getText(language, text){
  return languages[language][text];
}