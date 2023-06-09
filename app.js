const ping = require("ping");
const TelegramBot = require("node-telegram-bot-api");

const telegramBotToken = "6081064704:AAGpOoJig4bTO7-TQlfac6WOHpv81TOUXDI";
const bot = new TelegramBot(telegramBotToken, { polling: false });
const chatId = "-845141359";

const vpsIP = "5.161.212.12";

function checkVpsStatus() {
  ping.sys.probe(vpsIP, function (isAlive) {
    if (!isAlive) {
      console.log("VPS IS DOWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN");
      bot.sendMessage(
        chatId,
        "VPS IS DOWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
      );
    } else {
      //hour/minutes/seconds
      const curTime = new Date().toLocaleTimeString();
      console.log("VPS is up", curTime);
      //   bot.sendMessage(chatId, "VPS is up");
    }
  });
}

// Run the checkVpsStatus function initially
checkVpsStatus();

// Schedule the checkVpsStatus function to run every 1 hour
setInterval(checkVpsStatus, 60 * 60 * 1000);
