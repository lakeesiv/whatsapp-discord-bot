import { JSONBody } from "../types";
export const textWrappedInBackTick = ({ text, metaData, name }: JSONBody) => {
  return "`" + name + " " + metaData + "`";
};
export const messageText = ({ text, metaData, name }: JSONBody) => {
  if (metaData && name) {
    const headingText = textWrappedInBackTick({
      text,
      metaData,
      name,
    });
    const repeatedDash = "-".repeat(headingText.length);
    return `${repeatedDash}\n${headingText}\n\n${text}`;
  } else {
    return text;
  }
};
