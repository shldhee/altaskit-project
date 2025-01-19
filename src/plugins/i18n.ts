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
      TODOS: "TODOS",
      POSTS: "POSTS",
      name: "Name",
      email: "Email",
      search: "Search",
      Edit: "Edit",
      Delete: "Delete",
      Cancel: "Cancel",
      title: "Title",
      complete: "Complete",
      incomplete: "Incomplete",
      Error: "Error",
      startDate: "Start Date",
      endDate: "End Date",
      user: {
        id: "Id",
        name: "Name",
        email: "Email",
      },
      post: {
        id: "Id",
        userId: "UserId",
        title: "Title",
        createdAt: "CreatedAt",
        content: "Content",
        "edit-post": "Edit Post",
        "delete-post": "Delete Post",
        comments: "Comments",
        "comment-author": "Comment Author",
        "add-comment": "Add Comment",
        "no-comments-yet": "No comments yet",
        "no-comments-yet-placeholder": "Be the first to add a comment!",
        "back-to-list": "Back to List",
        "search-by-title": "Search by title",
      },
      startDateGreaterThanEndDate: "Start date cannot be greater than end date",
      "Failed-to-fetch": "Failed to fetch. Please try again later.",
      "Please-enter-a-search-term": "Please enter a search term",
      "User-List": "User List",
      "User-Detail": "User Detail",
      "User-Edit": "User Edit",
      "Todo-List": "Todo List",
      "Post-List": "Post List",
    },
  },
  ko: {
    translation: {
      EN: "영어",
      KO: "한국어",
      HOME: "홈",
      USERS: "사용자",
      TODOS: "할 일",
      POSTS: "게시물",
      name: "이름",
      email: "이메일",
      search: "검색",
      Edit: "수정",
      Delete: "삭제",
      Cancel: "취소",
      title: "할 일",
      complete: "완료",
      incomplete: "미완료",
      Error: "오류",
      startDate: "시작일",
      endDate: "종료일",
      user: {
        id: "번호",
        name: "이름",
        email: "이메일",
      },
      post: {
        id: "번호",
        userId: "사용자번호",
        title: "제목",
        createdAt: "생성일",
        content: "내용",
        "edit-post": "게시물 수정",
        "delete-post": "게시물 삭제",
        comments: "댓글",
        "comment-author": "댓글 작성자",
        "add-comment": "댓글 추가",
        "no-comments-yet": "댓글이 없습니다",
        "no-comments-yet-placeholder": "첫 번째 댓글을 추가해보세요!",
        "back-to-list": "목록으로 돌아가기",
        "search-by-title": "제목으로 검색",
      },
      startDateGreaterThanEndDate: "시작일은 종료일보다 클 수 없습니다",
      "Failed-to-fetch":
        "데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.",
      "Please-enter-a-search-term": "검색어를 입력해주세요",
      "User-List": "사용자 목록",
      "User-Detail": "사용자 정보",
      "User-Edit": "사용자 정보 수정",
      "Todo-List": "할 일 목록",
      "Post-List": "게시물 목록",
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
