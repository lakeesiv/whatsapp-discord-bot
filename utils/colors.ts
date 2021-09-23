const green = (text: string) => {
  return "```diff\n+" + text + "\n```";
};
const red = (text: string) => {
  return "```diff\n-" + text + "\n```";
};
const code = (text: string) => {
  return "```\n" + text + "\n```";
};

export { green, red, code };
