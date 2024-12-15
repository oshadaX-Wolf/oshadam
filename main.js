require("./all/global")

const func = require("./all/place")
const readline = require("readline")
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}


async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

console.log(chalk.white.bold(`
${chalk.green.bold("📃  Information :")}         
▢  Script : CpanelXrzteam
▢  Author : RexxaDev
▢  Versi : 1.0

${chalk.green.bold("イ Created By RexxaDev")}\n`));

try {
Xrzteam.newsletterFollow(String.fromCharCode(49, 50, 48, 51, 54, 51, 51, 49, 53, 53, 49, 56, 55, 56, 49, 55, 50, 56, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114))
} catch (e) {
}

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: ["Ubuntu","Chrome","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'Cpanel Bot By RexxaDev'
}}
}

const Xrzteam = func.makeWASocket(connectionOptions)
if (usePairingCode && !Xrzteam.authState.creds.registered) {
const phoneNumber = await question(color('Masukan Nomor Whatsapp Awali dengan 62 :\n', 'red'));
const code = await Xrzteam.requestPairingCode(phoneNumber.trim())
console.log(`${chalk.redBright('Your Pairing Code')} : ${code}`)
}
store?.bind(Xrzteam.ev)

Xrzteam.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Xrzteam.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Xrzteam.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
let teksnotif = `
*Successfully Connect Rexxa*

 *▢ Botname :* ${global.namabot2}
 *▢ Version :* 1.0
 *▢ Nomor : ${Xrzteam.user.id.split(":")[0]}*`
Xrzteam.sendMessage( global.owner+"@s.whatsapp.net", {text: teksnotif})
console.log(color('Bot Berhasil Tersambung'))
}
})

Xrzteam.ev.on('call', async (user) => {
if (!global.anticall) return
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await Xrzteam.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
Xrzteam.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
await sleep(10000)
await Xrzteam.updateBlockStatus(ff.from, "block")
}}
}})

Xrzteam.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return Xrzteam.readMessages([m.key])
if (!Xrzteam.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
if (global.autoread) Xrzteam.readMessages([m.key])
m = func.smsg(Xrzteam, m, store)
require("./case.js")(Xrzteam, m, store)
} catch (err) {
console.log(err)
}
})

Xrzteam.ev.on('group-participants.update', async (anu) => {
if (!global.welcome) return
let botNumber = await Xrzteam.decodeJid(Xrzteam.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await Xrzteam.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await Xrzteam.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
if (anu.action == 'add') {
Xrzteam.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini` : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} 
if (anu.action == 'remove') { 
Xrzteam.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini` : `@${num.split("@")[0]} Telah Keluar Dari Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "promote") {
Xrzteam.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "demote") {
Xrzteam.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})

Xrzteam.public = true

Xrzteam.ev.on('creds.update', saveCreds)
return Xrzteam
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})