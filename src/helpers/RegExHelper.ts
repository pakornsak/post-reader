export const exec = (regex: RegExp, post: string) => {
  const match = regex.exec(post);
  return match || ["", "", "", ""];
};
