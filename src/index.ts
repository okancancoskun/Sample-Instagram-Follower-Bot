import express from "express";
import BotService from "./BotService/bot.service";

const app = express();
const port = 5000 || process.env.PORT;
const bot = new BotService();
app.listen(port, async() => {
    await bot.login();
    await bot.run();
    await bot.getLatestPostLikers();
  // tslint:disable-next-line: no-console
  console.log("Server Started");
});
