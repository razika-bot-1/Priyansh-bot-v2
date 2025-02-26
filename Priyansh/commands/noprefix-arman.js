const fs = require("fs");
module.exports.config = {
	name: "kunal",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Kunal")==0 || event.body.indexOf("Kunal")==0 || event.body.indexOf("KUNAL")==0 || event.body.indexOf("kunal")==0) {
		var msg = {
				body: "𝐊𝐔𝐍𝐀𝐋 𝐌𝐄𝐑𝐄 𝐁❍𝐒𝐒 𝐕𝐈𝐊𝐀𝐒 𝐊𝐀 𝐁𝐄𝐒𝐓 𝐅𝐑𝐈𝐄𝐍𝐃 𝐇𝐀𝐈😘💙🍁 \n 💞 \n 🌹𝐊𝐔𝐍𝐀𝐋 𝐁❍𝐒𝐒🐧💙🍁",
				attachment: fs.createReadStream(__dirname + `/noprefix/kunal.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }