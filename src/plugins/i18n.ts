import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      EN: "EN",
      KO: "KO",
      HOME: "HOME",
      USERS: "USERS",
      name: "Name",
      email: "Email",
      search: "Search",
      Edit: "Edit",
      "Please-enter-a-search-term": "Please enter a search term",
      "User-List": "User List",
      "User-Detail": "User Detail",
    },
  },
  ko: {
    translation: {
      EN: "영어",
      KO: "한국어",
      HOME: "홈",
      USERS: "사용자",
      name: "이름",
      email: "이메일",
      search: "검색",
      Edit: "수정",
      "Please-enter-a-search-term": "검색어를 입력해주세요",
      "User-List": "사용자 목록",
      "User-Detail": "사용자 정보",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // 언어 감지기 사용
  .init({
    resources,
    // lng: "en",
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
