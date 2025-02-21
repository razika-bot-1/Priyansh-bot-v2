module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Vikas rajput", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.postimg.cc/Dzz4XgKD/Picsart-24-06-15-08-41-31-366.jpg", "https://imgur.com/a/OY2mzQJ.jpg", "https://imgur.com/a/hTExq6O.jpg"];
var callback = () => api.sendMessage({body:`🌹𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 🇮🇳 


☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝗢𝗪𝗡𝗘𝗥 🔥☞︎︎︎ 𝐕𝐈𝐊𝐀𝐒 𝐑𝐀𝐉𝐏𝐔𝐓 ☜︎︎︎✰ \n\n
🙈🄾🅆🄽🄴🅁 🄲🄾🄽🅃🄰🄲🅃 🄻🄸🄽🄺🅂🙈➪ \n\n  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨 https://www.facebook.com/profile.php?id=100081181726230 💞🕊️
  \n 
✅𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘👉 𝐍❍𝐓 𝐀𝐋𝐋❍𝐖 𝐓❍ 𝐒𝐄𝐄 \n\n  ====𝗧𝗼 𝗹𝗲𝗮𝗿𝗻 𝗛𝗼𝘄 𝘁𝗼 𝗖𝗿𝗲𝗮𝘁𝗲 𝗔 𝗯𝗼𝘁 === 𝐂𝐍𝐓𝐀𝐂𝐓 𝐌𝐄 ❍𝐍 𝐅𝐀𝐂𝐄𝐁❍❍𝐊✅ 🗡 https://www.facebook.com/profile.php?id=100081181726230
✧══════•❁❀❁•══════✧

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

🥳UPTIME🥳

🌪️𝐓❍𝐃𝐀𝐘 𝐈𝐒🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡𝐁❍𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆⚡ ${hours}:${minutes}:${seconds}.

✅𝐓𝐇𝐀𝐍𝐊𝐒 𝐅❍𝐑 𝐔𝐒𝐈𝐍𝐆 𝐌𝐘 𝐁❍𝐓 💙 ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/vikas.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/vikas.jpg")).on("close",() => callback());
   };
