const stayonscreen = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${bot-pires} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${Pires}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 STAY ON SCREEN 〉*
   ╽
   ┠≽ *${prefix}afk* <reason>
   ┃ *Desc* : AFK :V
   ╿ *${Pires}*,
   ╰╼≽ *Developer © ${bot-pires}`
}
exports.stayonscreen = stayonscreen
