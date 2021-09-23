import { config } from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
config();
import Discord, { Channel, TextChannel } from "discord.js";

const app = express();
app.use(cors());

const client: Discord.Client = new Discord.Client();
client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Logged in");
});

app.get(
  `/${process.env.SECRET}/:message`,
  async (req: Request, res: Response) => {
    const channel: TextChannel | undefined = client.channels.cache.find(
      (channel) => channel.id === (process.env.CHANNEL_ID as string)
    ) as TextChannel | undefined;

    await channel?.send(req.params.message);
    res.status(200);
    res.send("sucess");
  }
);

app.listen(5000, () => console.log(`App listening on port 5000`));
