import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `🤍 MAGIC MOA 🤍 printerest\n\n✔ Ex: ${usedPrefix + command} 10th Physics`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*★  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['pinterest'] 

export default handler
