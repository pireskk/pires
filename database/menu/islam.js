const islam = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${PIRES} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${PIRES}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos os usuários de bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 ISLAM 〉*
   ╽
   ┠≽ *${prefix}quran*
   ┃ *Desc* : Envio de versos do Alcorão ao acaso
   ┠──────────────╼
   ┠≽ *${prefix}jsholat* <area>
   ┃ *Desc* : Envio de informações do cronograma de oração
   ╿ *${Pires}*,
   ╰╼≽ *Developer © ${bot-pires}`
}
exports.islam = islam
