global.owner = ['628999811229']  
global.mods = ['628999811229'] 
global.prems = ['628999811229']
global.nameowner = 'LynnZxD'
global.numberowner = '628999811229' 
global.mail = '@lynnzxdofc' 
global.gc = 'https://chat.whatsapp.com/B5r22xL4UyX6fnV3msL9LP'
global.instagram = 'https://instagram.com/@lynnzxdd'
global.wm = '© LynnZxD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '3' // Peringatan maksimum
global.antiporn = true // Auto delete pesan porno (bot harus admin)

//INI WAJIB DI ISI!//
global.btc = 'tnUW4mZs' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'apikey'
//Daftar https://api.betabotz.eu.org 

//jangan diganti!
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//ini tidak di isi juga tidak apa-apa
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'tnUW4mZs' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
