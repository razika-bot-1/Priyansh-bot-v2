const fs = require("fs");
module.exports.config = {
  name: "/status",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "admin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("ADMIN")==0 || event.body.indexOf("/status")==0 || event.body.indexOf("/status")==0 || event.body.indexOf("/status")==0) {
    var msg = {
        body: "𝐌𝐞𝐫𝐚 𝐍𝐞𝐭 𝐒𝐥𝐨𝐰 𝐇𝐚𝐢 𝐁𝐚𝐛𝐮 𝐓𝐡𝐨𝐝𝐚  𝐰𝐚𝐢𝐭 𝐊𝐚𝐫 𝐋𝐨 𝐧𝐚 ☹️-𝐋𝐨𝐚𝐝𝐢𝐧𝐠........",
        attachment: 
fs.createReadStream(__dirname + `/`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫅", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
