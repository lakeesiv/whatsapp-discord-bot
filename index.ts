import { config } from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
config();
import Discord, { Channel, TextChannel } from "discord.js";
import { JSONBody } from "./types";
import { messageText } from "./utils";

const app = express();
app.use(cors());
app.use(express.json());

const client: Discord.Client = new Discord.Client();
client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Logged in");

  client.user?.setPresence({
    status: "online",
    activity: {
      name: "by Lakee",
      type: "CUSTOM_STATUS",
    },
  });
});

app.post(`/`, async (req: Request, res: Response) => {
  const body = req.body as JSONBody;
  console.log(body);
  const channel: TextChannel | undefined = client.channels.cache.find(
    (channel) => channel.id === (process.env.CHANNEL_ID as string)
  ) as TextChannel | undefined;

  await channel?.send(messageText(body));
  res.status(200);
  res.send("sucess");
});

app.listen(6969, () => console.log(`App listening on port 6969`));
