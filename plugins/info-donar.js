/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name}*
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
*┃ 𝙿𝙾𝚁 𝚂𝙸 𝙶𝚄𝚂𝚃𝙰𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 :𝟹*
*┃*
*┃ ➤ 𝚈𝙰𝙿𝙴:988802645* 
*┃ ➤ 𝙱𝙰𝙽𝙲𝙾: Yape* 
*┃ ➤ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝙸𝙾: Geral 
*┃ ➤ 𝙴𝙻 𝚀𝚄𝙴 𝙻𝙴𝙴 𝙴𝚂𝚃𝙾 𝙴𝚂 𝙶𝙰𝚈*
*┃
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝙼𝙴 𝚂𝙸 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂*
*┃ 𝙼𝙰𝚂 𝙳𝙰𝚃𝙾𝚂 𝚈 𝙿𝙰𝚁𝙰 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙴𝚁𝚃𝙴*
*┃ wa.me/5198802645*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim()
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
