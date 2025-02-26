const fs = require("fs");
module.exports.config = {
	name: "statuspro",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by Arun", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bot ki id ko mention kro ya uska naam lo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("+status")==0 || event.body.indexOf(`${prefix}status`)==0 || event.body.indexOf("+status")==0 || event.body.indexOf("+Status")==0) {
		var msg = {
				body: "𝐌𝐞𝐫𝐚 𝐍𝐞𝐭 𝐒𝐥𝐨𝐰 𝐇𝐚𝐢 𝐁𝐚𝐛𝐮 𝐓𝐡𝐨𝐝𝐚  𝐰𝐚𝐢𝐭 𝐊𝐚𝐫 𝐋𝐨 𝐧𝐚 ☹️-𝐋𝐨𝐚𝐝𝐢𝐧𝐠........",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🦋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
