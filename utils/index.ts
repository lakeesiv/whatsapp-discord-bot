import { JSONBody } from "../types";
export const textWrappedInBackTick = ({ text, metaData, name }: JSONBody) => {
  return "`" + name + " " + metaData + "`";
};
export const messageText = ({ text, metaData, name }: JSONBody) => {
  if (metaData && name) {
    return `${textWrappedInBackTick({ text, metaData, name })}\n${text}`;
  } else {
    return text;
  }
};
