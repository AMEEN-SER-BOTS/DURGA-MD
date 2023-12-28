import axios from 'axios';

let handler = async (m, { conn }) => {
  try {
    
    const apiKey = 'YOUR_BING_API_KEY';

    
    const query = 'AI';

    
    const apiUrl = `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${query}&count=1`;

    
    const response = await axios.get(apiUrl, {
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
      },
    });

    
    const imageUrl = response.data.value[0].contentUrl;

    
    await conn.sendFile(m.chat, imageUrl, 'image.jpg', 'AI Image');

  } catch (error) {
    console.error('Error fetching image:', error);
  }
};

handler.help = ['aiimage'];
handler.tags = ['main'];
handler.command = ['aiimage'];

export default handler;
