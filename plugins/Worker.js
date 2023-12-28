import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let pingMsg = await conn.sendMessage(m.chat, { text: '*_Loading..._*', filename: 'loading.gif', mimetype: 'image/gif' })

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    const gifBuffer = await getBuffer('https://i.imgur.com/iQJ41a4.mp4') 
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `┌─❖
│「❤️ 𝐃𝐔𝐑𝐆𝐀-𝐌𝐃 ❤️」
│
│     🛠️Made By
│              Ameen-Ser㋡ 
│         
└┬❖ 「 *⚠️ WORKERS* 」
   │
   │☞ *Plugins By:**𝛪𝛭𝛲𝑈       𝑆𝛯𝑅*
   │
   │ wa.me/918848377746
   │
   │☞ *Menu By:* _Karthik-Ser_
   │
   │ wa.me/919562530542
   │
└─────────────┈ ⳹`,
          quotedMessage: { documentMessage: { url: 'URL_TO_YOUR_GIF', mimetype: 'image/gif' } } // Replace 'URL_TO_YOUR_GIF' with the actual URL of the GIF
        }
      }
    }, {})
  })
}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['work', 'worker']

export default handler
