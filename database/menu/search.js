const search = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botpires} 〉*
╿
┯ *〈 INFO DO BOT 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Criador* : ${Pires}
   ┠≽ *Versão* : 0.0.5
   ╿
┯┷ *〈 INFO 〉*
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
┠≽ *${prefix}bugreport* <texto>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 SEARCH 〉*
   ╽
   ┠≽ *${prefix}wait
   ┃ *Desc* : Enviar Nome Anime e Cena Curta
   ┠──────────────╼
   ┠≽ *${prefix}xvideos
   ┃ *Desc* : Enviar Links De Video Adulto
   ┠──────────────╼
   ┠≽ *${prefix}ytsearch <query>
   ┃ *Desc* : Pesquisar vídeo no YouTube
   ┠──────────────╼
   ┠≽ *${prefix}trendtwit
   ┃ *Desc* : Vídeo de tendências de pesquisa no Twitter
   ╿ *${Pires}*,
   ╰╼≽ *Developer © ${bot-pires}`
}
exports.search = search
