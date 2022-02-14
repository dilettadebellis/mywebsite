const cookies = [
  {
    code: "functional",
  },
  {
    code: "stats",
  },
];

export const getCodes = (onlyCode = false) => {
  const extra = onlyCode ? "" : "-cookie-accepted";
  return cookies.map((cookie) => `${cookie.code}${extra}`);
};
