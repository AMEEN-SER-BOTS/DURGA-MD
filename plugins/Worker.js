import { exec } from 'child_process';
import now from 'performance-now';

let handler = async (m, { conn }) => {
  let pingMsg = await conn.sendMessage(m.chat, { text: '*_Loading..._*' });

  let timestamp = now();

  exec('neofetch --stdout', async (error, stdout) => {
    let latency = (now() - timestamp).toFixed(4);

    await conn.sendMessage(m.chat, { text: '*workers*', media: conn.serializeMMS({ url: 'https://i.imgur.com/iQJ41a4.mp4' }) });

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
   │☞ *Plugins By:* 𝛪𝛭𝛲𝑈                  𝑆𝛯𝑅
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
    }, {});
  });
};

handler.help = ['ping'];
handler.tags = ['main'];
handler.command = ['work', 'worker'];

export default handler;
