let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://i.imgur.com/WzBJKcd.mp4'
  let url = 'https://github.com/Guru322/GURU-BOT'
  let murl = 'https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i'
  let img = 'https://cdn.wallpapersafari.com/71/19/7ZfcpT.png'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'Guru',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'Я жив!✨️🙂',
        body: '⚛️',
        thumbnailUrl: img,
        sourceUrl: 'https://wa.me/917002015750?text=HEY.....%F0%9F%8D%B7%E2%9C%A8%EF%B8%8F',
        mediaType: 1,
        renderLargerThumbnail: false,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
