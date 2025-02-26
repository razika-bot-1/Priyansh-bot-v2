const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "/status",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["𝐌𝐞𝐫𝐚 𝐍𝐞𝐭 𝐒𝐥𝐨𝐰 𝐇𝐚𝐢 𝐁𝐚𝐛𝐮 𝐓𝐡𝐨𝐝𝐚 𝐒𝐚 𝐰𝐚𝐢𝐭 𝐊𝐚𝐫 𝐋𝐨 𝐧𝐚 𝐣𝐢 ☹️🥺 𝐋𝐨𝐚𝐝𝐢𝐧𝐠......" , "𝐑𝐚𝐣𝐚 𝐉𝐢 𝐀𝐩𝐧𝐢 𝐒𝐚𝐤𝐭𝐢𝐲𝐨 𝐊𝐚 𝐏𝐮𝐫𝐚 𝐈𝐬𝐭𝐞𝐦𝐚𝐥 𝐤𝐚𝐫 𝐫𝐡𝐞 𝐇𝐨😼-𝐋𝐨𝐚𝐝𝐢𝐧𝐠......" , "𝗞𝘆𝗮 𝐁𝐚𝐚𝐭 𝐡𝐚𝐢 𝐤𝐢𝐬𝐤𝐞 𝐥𝐢𝐲𝐞 𝐬𝐭𝐚𝐭𝐮𝐬 𝐛𝐭𝐚𝐨 𝐛𝐭𝐚𝐨 🤔🤭-𝐋𝐨𝐚𝐝𝐢𝐧𝐠......" , "𝐒𝐚𝐛𝐚𝐫 𝐤𝐚 𝐅𝐚𝐥 𝐒𝐭𝐚𝐭𝐮𝐬 𝐡𝐨𝐭𝐚 𝐇𝐚𝐢 𝐛𝐚𝐛𝐲 😘🙈-𝐋𝐨𝐚𝐝𝐢𝐧𝐠......."];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🦋${name}🦋,  \n\n \n   ${rand} \n\n`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
