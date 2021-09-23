import { config } from "dotenv";
config();
import Discord from "discord.js";

const client: Discord.Client = new Discord.Client();

client.on("ready", () => {
  console.log("Logged in");
});

client.login(process.env.TOKEN);
