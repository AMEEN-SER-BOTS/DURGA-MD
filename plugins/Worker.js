import { exec } from 'child_process';

let handler = async (m, { conn }) => {
  await exec('neofetch --stdout', async (error, stdout) => {
    const gifUrl = 'https://i.imgur.com/iQJ41a4.mp4'; // Replace this with the URL of your GIF

    const message = `
┌─❖
│「❤️ 𝐃𝐔𝐑𝐆𝐀-𝐌𝐃 ❤️」
│
│ 🛠️ Made By
│ Ameen-Ser㋡ 
│         
└┬❖ 「 *⚠️ WORKERS* 」
   │
   │ ☞ *Plugins By:* _Adhul-Ser_
   │ wa.me/918848377746
   │
   │ ☞ *Menu By:* _Karthik-Ser_
   │ wa.me/919562530542
   │
└─────────────┈ ⳹`;

    await conn.sendMessage(
      m.chat,
      {
        text: message,
        mimetype: 'image/gif',
        url: gifUrl,
        filename: 'animated.gif',
        caption: '',
      },
      'conversation',
      { sendEphemeral: true }
    );
  });
};

handler.help = ['ping'];
handler.tags = ['main'];
handler.command = ['work', 'worker'];

export default handler;
