module.exports.config = {
  name: "pink",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR CHAND",
  description: "Random pink - photos",
  commandCategory: "Random-IMG",
  usages: "pink",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/L5BJQ4LD/received-1240164360304084.jpg",
"https://i.postimg.cc/k4LNP5Vd/received-454886840673407.jpg","https://i.postimg.cc/632kpDy0/received-375101241884585.jpg","https://i.postimg.cc/L86M14XS/received-1648240072698100.jpg","https://i.postimg.cc/SQ601YYq/received-1503736513581827.jpg","https://i.postimg.cc/Gp8VF4nW/received-1190727398934348.jpg","https://i.postimg.cc/YqdsT6rc/received-1204753153806441.jpg"
     ];
     var callback = () => api.sendMessage({body:`🩷 𝐁𝐘 𝐕𝐈𝐊𝐀𝐒 𝐑𝐀ᒍ𝐏𝐔𝐓 🩷-.-`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };