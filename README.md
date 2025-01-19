# 사용자 관리 애플리케이션

이 프로젝트는 **사용자 관리 애플리케이션**으로, React와 Atlassian Design System을 활용하여 게시물, 사용자 정보, 할일 목록을 관리하는 애플리케이션입니다.

---

## **프로젝트 시작하기**

### **필수 요구사항**

- **Node.js** (v16 이상)
- **npm**, **yarn**, 또는 **pnpm**
- **yarn**을 사용하는 것을 권장합니다.

### **설치 방법**

1. 의존성 설치

```bash
yarn install
```

## **프로젝트 실행**

### 1. 개발 서버 실행

```bash
yarn dev
```

### 2. 브라우저에서 `http://localhost:3000`로 접속하여 확인합니다.

## **폴더 구조**

```bash
src/
├── App.tsx          # 애플리케이션의 루트 컴포넌트.
├── api/             # API 호출 및 요청 로직 관리 (e.g., axios 인스턴스, API 함수).
├── assets/          # 이미지, 폰트, 아이콘 등 정적 자산.
├── components/      # 재사용 가능한 UI 컴포넌트 (e.g., Button, Table, Input 등).
├── constants/       # 글로벌 상수 (e.g., 페이지 크기, API URL).
├── hooks/           # 커스텀 React 훅 (e.g., usePagination, useDebounce).
├── index.css        # 글로벌 CSS 스타일.
├── index.html       # HTML 템플릿 파일.
├── index.tsx        # 애플리케이션 진입점 (ReactDOM 렌더링).
├── pages/           # 각 페이지 컴포넌트 (e.g., UserList, UserDetail).
├── plugins/         # 플러그인 설정 및 초기화 코드 (e.g., i18n, Sentry).
├── routes/          # 라우팅 관련 로직 (e.g., React Router 설정).
├── services/        # 백엔드 서비스와의 상호작용 로직 (e.g., GraphQL, REST API).
├── types/           # TypeScript 타입 정의 (e.g., 인터페이스, 타입).
└── utils/           # 유틸리티 함수 (e.g., 날짜 포맷, 필터링).
```

## **주요 기능**

### 1. 사용자 검색 및 필터

- 이름 또는 이메일로 사용자 검색 가능.
- 실시간 자동완성 기능 제공.
- 키워드 기반 필터링으로 정확한 결과 제공.

### 2. 사용자 상세보기

- 사용자를 클릭하면 해당 사용자의 상세 정보를 표시.
- 사용자 ID, 이름, 이메일 등의 정보 제공.

### 3. 페이지네이션

- Atlassian Design의 Pagination 컴포넌트를 활용하여 사용자 데이터를 페이지별로 표시.
- 페이지 간 이동 버튼 제공.

### 4. 날짜 필터

- 사용자 생성 날짜를 기준으로 필터링 가능.
- 시작일과 종료일을 선택하여 데이터 조회 범위 지정.

## **사용된 Atlassian Design System 주요 컴포넌트**

### 1. TableTree

- 계층형 데이터 렌더링에 사용.
- 행 확장 기능과 유연한 레이아웃 제공.

### 2. Pagination

- 사용자 데이터를 페이지별로 탐색할 수 있도록 구현.

### 3. Select

- 이름/이메일과 같은 검색 필터 옵션을 선택할 수 있는 드롭다운 메뉴.

### 4. Form, TextField

- 정보 수정을 위한 폼 구현.
- 텍스트 입력 필드로 키워드 검색 지원.
- 실시간 검증 및 자동완성 기능 포함.

### 5. DatePicker

- 시작일과 종료일을 선택할 수 있는 컴포넌트.

### 6. Button

- 검색, 이동, 폼 제출 등의 작업 버튼으로 사용.
