import { Client, Message } from "discord.js";

const prefix = "!";

const command = (
  client: Client,
  alias: string,
  callback: (message: Message) => void
) => {
  const command: string = `${prefix}${alias}`;
  client.on("message", (message) => {
    const { content } = message;

    if (content.startsWith(`${command}`) || content === command) {
      console.log(`Executing ${command}`);
      callback(message);
    }
  });
};

export default command;
