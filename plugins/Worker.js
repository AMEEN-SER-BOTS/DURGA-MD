import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let pingMsg = await conn.sendMessage(m.chat, {text: '*_Loading..._*'})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

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
   │☞ *Plugins By:* _Adhul-Ser_
   │
   │ wa.me/918848377746
   │
   │☞ *Menu By:* _Karthik-Ser_
   │
   │ wa.me/919562530542
   │
└─────────────┈ ⳹` 
        }
      }
    }, {})

  })

}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['work', 'worker'] 

export default handler
