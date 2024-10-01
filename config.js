//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5CNlV1R3lxQm11SG1EUm5zRi8vVm5HZ2czWUYrNTIrb05VNzZoR25HST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2ptSU8wcXQyZXlBcTBYRk5TcHV2KzRWOXhSVjliSUMwT2ZxbVNpSnVDRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQi9weUJSMUZHTGlRS3NucDZ3VDVlYU9LQlVUanYxd3lSbTV6dGJiODNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpL3JvQmZuMy9NTk9PTUVqMXFxZ0R5RkJPT28rT2hBNmFMZWJRTmtVSEE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBNHBEb2RYUzViUzR4R2RKNEJ1ckhkK09maFY2YzVCNFliZG1mbUYzVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhuZFBTTGtvNXN0eWJnY2J2U0h3Z05XNkdCUkIvbVdYMjdCS1d0ZHp6U2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05LTUgzZnhicFRKakZVdEZIa2s5QnJ6UEs4TVlSa0FSejc3TU00RkUwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VUNThLSG03ZCtMbmx3UngzNHJsaUtkcEsxdWV1eEdrZmpzNFJCSFRSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ4aW5KT0s5bExIdHd6NXQ2ZmdEb21zZ29jdWhyL3lScjFkWit0cEhEOVpqM3Y5aUZNZnZGelNlSTlQQmxPZTdoOWRZSHMwZGZZK2phK3krRWxxM2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJPNzdtTjRob2xJY0YvOStrbzZGWHJIUi96MVIyZEVBYjRzc1YrTHhFbU1NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwMGtiUTdPS1RjS2x5SGpJaWZFZGR3IiwicGhvbmVJZCI6IjIzMjU3ZWUxLTkwZGEtNDk1NC05MzIzLTZkZGU1ZTA1MTI2OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCSUxZM0w4ay90RnlYSjRpWStFYjJlb1hCUzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFAxTXBWR3JnMUpyenhZalJCYjltS1FlcGRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZSSEtBUlhKIiwibWUiOnsiaWQiOiI5NDc1MjkwMjE2MzoyOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTXG5cblxuXG5UXG5cblxuXG5BXG5cblxuXG5UXG5cblxuXG5VXG5cblxuXG5TXG5cblxuXG4gS1xuXG5cblxuSVxuXG5cblxuTlxuXG5cblxuR1xuXG5cblxuV1xuXG5cblxuSFxuXG5cblxuSVxuXG5cblxuVFxuXG5cblxuRSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTZVNjVFREVNVEY3N2NHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMTlncVlDZy9jQlcyaWRCVFhOMGVSMEUvY05BWUMxVnYydzlqTUhnc3Yybz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSXFpdnVHb0RDWmlwWTNwNzlDYTgyelNMeVVIeDI4WE5LMmdhQ3JqUm1BOC9CS0h1UXZrR0gxTGdyMXl1Z3JOWkUyTFhsNkJKRnNCYnF1K1VTeHpKQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjdVbXprdnVQdUJqM3NUUkltbUV5aHRZc0JYQXVoRkliUk44WnM5UkZhbjJEUERLN1hUK3l5ejFrZmpuLzJnOUNsRUpuZFc4M1JjTkV2UVpKTU5FTmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTI5MDIxNjM6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGZZS21Bb1AzQVZ0b25RVTF6ZEhrZEJQM0RRR0F0VmI5c1BZekI0TEw5cSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzc4MzYzMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBRmgifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94789958225";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "RCD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
