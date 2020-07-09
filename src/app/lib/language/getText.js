import translations from "../../data/languages/translations.json";

export default function getText(language, text){
  if(language === "en"){
    return text;
  }
  return translations[language][text];
}