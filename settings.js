/*
#RexxaDev
youtube : https://youtube.com/@rexxadev
buy no enc : https://wa.me/6287823358993
*/

require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")
//========== Setting Owner ==========//
global.owner = "6287823358993"
global.owner2 = "6287823358993"
global.namaowner = "Rexxaoffc"
global.botname = "CpanelXczteam"
//======== Setting Bot & Link ========//
global.namabot = "CpanelXczteam" 
global.namabot2 = "CpanelXczteam"
global.foother = "© - Rexxadev"
global.idsaluran = false
global.linkgc = "https://whatsapp.com/channel/0029VajrECv05MUfxQVe2p0D"
global.linkyt = 'https://youtube.com/@RexxaaOFFC'
global.linktele = 'https://t.me/rexxadev'
global.packname = "CpanelXczteam"
global.author = "15 marth✨"
global.qris = "https://img100.pixhost.to/images/842/542224608_rexxaoffc.jpg"
global.produk = "https://img100.pixhost.to/images/841/542218996_rexxaoffc.jpg"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false
global.owneroff = false


//========== Setting Panel Server  1==========//
global.domain = ""
global.apikey = ""
global.capikey = ""

//========== Setting Panel Server  2==========//
global.domain2 = ""
global.apikey2 = ""
global.capikey2 = ""

//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"

//========= Setting Message =========//
global.msg = {
"error": "Maaf terjadi kesalahan..",
"done": "Succesfully ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})