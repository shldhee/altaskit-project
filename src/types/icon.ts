// Enum-like 객체와 타입 정의
const IconTypes = {
  CHECK: "check",
  UNCHECK: "unCheck",
} as const;

type IconType = (typeof IconTypes)[keyof typeof IconTypes];

export { IconTypes };
export type { IconType };
