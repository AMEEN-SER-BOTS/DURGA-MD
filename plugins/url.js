import axios from 'axios';

let handler = async (m, { conn }) => {
  // Assuming m.file is the file you want to upload (replace it with your file)
  let file = m.file;

  
  let imgurResponse = await uploadToImgur(file);

  
  let imgurLink = imgurResponse.data.data.link;

  
  await conn.sendMessage(m.chat, { text: `Imgur Link: ${imgurLink}` });
}


async function uploadToImgur(file) {
  const imgurClientId = 'f8796c29426ed82'; // Replace with your Imgur client ID

  
  const formData = new FormData();
  formData.append('image', file);

  
  return axios.post('https://api.imgur.com/3/image', formData, {
    headers: {
      'Authorization': `Client-ID ${imgurClientId}`,
      ...formData.getHeaders(),
    },
  });
}

handler.help = ['imgur'];
handler.tags = ['main'];
handler.command = ['imgur'];

export default handler;
