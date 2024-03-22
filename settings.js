// S C R I P T  O R I  B Y  KIZH MD 🔭
// Credits, jangan dihapus atau diubah!

// - - THANKS TO ALL

//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")

// GLOBAL OWNER //

global.owner = ['6285380779466'] //GANTI JADI NO MU
global.namaowner = "Andrian" // GANTI JADI NAMA MU
global.namebot = "XshopTopup" // GANT JADI NAMA BOT MU
global.sessionName = 'sessions' // JANGAN DI UBAH
global.prefa = ['','!','.',',','🐤','🗿'] // JANGAN DI UBAH KALAU GAK MAU EROR

// WATERMARK //

global.v = 'XshopTopup' // GANTI AJA
global.wm = 'Tele CH | t.me/xshoptopup' // GANTI AJA
global.packname = ""
global.author = "XshopTopup" // GANTI AJA
global.author2 = "XshopBot" // GANTI SAJA
global.footer = 'XshopTopup' // GANTI AJA

// FOTO MENU //

global.thumbailUrl = "https://e.top4top.io/p_3003aznum0.jpg" // GANTI AJA KALAU MAU GANTI LOGO MENU NYA
global.url = "https://whatsapp.com/channel/0029VaVxgobAu3aI0i6rIy3h" // GANTI SAJA

// PAYMENT //
global.Qris = 'https://t.me/xshoptopup/121' //GANTI JADI QRIS MU
global.dana = '085380779466' // GANTI NO LU AJA
global.gopay = '085380779466'  // GANTI NO LU AJA
global.scan = 'SCAN QRIS ALL PAY DI ATAS'

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'cf080567076fd196d87b5a28'

// GLOBAL MESS //

global.mess = {
    success: 'done boskuu',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadikan admin terlebih dahulu kak',
    owner: 'Hanya Owner kak',
    group: 'harus di dalam grub kak',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus bot',
    wait: 'sabar',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'khusus premium" mau prem? chat owner',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "unlimited",
        premium: "unlimited"
}
//BATAS
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
