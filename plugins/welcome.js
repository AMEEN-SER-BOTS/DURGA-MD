//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (!global.db.data.chats) global.db.data.chats = {}; // Ensure chats object is initialized

  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('✅ The welcome message is configured');
  } else {
    throw `✳️ Enter the Welcome message\n\n@user (mention)\n@group (Group name)\n@desc (description of group)`;
  }
};

handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
handler.owner = false;

export default handler;