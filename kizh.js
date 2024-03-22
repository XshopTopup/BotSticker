//SPECIAL
require(`./settings`)

//NODE
const { 
WA_DEFAULT_EPHEMERAL, 
getAggregateVotesInPollMessage, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage, 
areJidsSameUser, 
getContentType 
} = require("@whiskeysockets/baileys")
const { 
exec, 
spawn, 
execSync 
} = require("child_process")
const cheerio = require("cheerio")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const chalk = require("chalk")
const crypto = require("crypto")
const util = require("util")
const got = require("got")
const axios = require("axios")
const fs = require("fs")
const Jimp = require("jimp")
const path = require("path")
const fsx = require('fs-extra')
const PhoneNumber = require("awesome-phonenumber")
const speed = require("performance-now")
const moment = require("moment-timezone")
const https = require('https') //baru
const { TelegraPh } = require('./lib/uploader')
const os = require('os')
const ytdl = require("ytdl-core")
const yts = require("yt-search")
const { remini } = require('./lib/remini')
const { goLens } = require("./lib/googlens");


//lib
const { 
getBuffer,
getRandom,
tanggal
} = require('./lib/myfunc')
const { 
getGroupAdmins, 
fetchJson, 
reSize, 
generateProfilePicture, 
sleep, 
clockString,
runtime,
jsonformat
} = require("./lib/functions.js")
// Time
///scrape
const scp1 = require('./lib/ssweb') 
//////Lib2
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')
///

//DATABASE
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))//baru
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
//BATAS

//WAKTU
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
//const tanggal = moment().tz("Asia/Jakarta").format("ll")
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const wa = `0@s.whatsapp.net`
const Owner = global.owner + '@s.whatsapp.net'
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`    
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

// read database
global.db.data = JSON.parse(fs.readFileSync('./database/json/database.json'))
if (global.db.data) global.db.data = {
users: {},
group: {},
chats: {},
database: {},
settings: {},
donate: {},
others: {},
sticker: {},
...(global.db.data || {})
}

//__________________________________//
//_________________________________//
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, /*getLimit*/ } = require('./src/limit.js')
const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay } = require('./src/monay.js')

// read database game
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []

module.exports = kizh = async (kizh, m, chatUpdate, store) => {
try {
const type = getContentType(m.message)
const content = JSON.stringify(m.message)
const from = m.key.remoteJid
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//

const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const groupMetadata = isGroup? await kizh.groupMetadata(m.chat).catch(e => {}) : ""
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupOwner = isGroup? groupMetadata.owner : ""
const participants = isGroup? await groupMetadata.participants : ""
const groupAdmins = isGroup? await participants.filter(v => v.admin !== null).map(v => v.id) : ""
const groupMembers = isGroup? groupMetadata.participants : ""
const isGroupAdmins = isGroup? groupAdmins.includes(m.sender) : false
const botNumber = await kizh.decodeJid(kizh.user.id)
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false
const sender = m.key.fromMe ? (kizh.user.id.split(':')[0]+'@s.whatsapp.net' || kizh.user.id) : (m.key.participant || m.key.remoteJid)
const pushname = m.pushName || "No Name"
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
//___//


/////DOWNLOAD MP3
const ytmp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, {
filter: 'audioonly'
}).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await kizh.sendMessage(m.chat, {
audio: fs.readFileSync(mp3File),
mimetype: 'audio/mp4'
}, {
quoted: m
})
})
} catch (err) {
reply(`${err}`)
}
}
//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await kizh.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}

// Sayying time
const hours = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(hours < "23:59:00"){
var waktuucapan = 'Malam 🌃'
}
if(hours < "19:00:00"){
var waktuucapan = 'Petang 🌆'
}
if(hours < "18:00:00"){
var waktuucapan = 'Sore 🌅'
}
if(hours < "15:00:00"){
var waktuucapan = 'Siang 🏙'
}
if(hours < "10:00:00"){
var waktuucapan = 'Pagi 🌄'
}
if(hours < "05:00:00"){
var waktuucapan = 'Subuh 🌉'
}
if(hours < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
if (!('antilink2' in chats)) chats.antilink2 = false
if (!('promosi' in chats)) chats.promosi = false
if (!('promosi2' in chats)) chats.promosi2 = false
if (!('toxic' in chats)) chats.toxic = false
} else global.db.data.chats[m.chat] = {
antilink: false,
antilink2: false,
promosi: false,
promosi2: false,
toxic: false,
}


const parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }



const reply = (teks) => {
kizh.sendMessage(from, { text : teks }, { quoted : m })
}
// Anti Link 2 HAPUS
if (db.data.chats[m.chat].antilink2) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await kizh.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(``)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
kizh.sendMessage(m.chat, { delete: m.key })
kizh.sendMessage(m.chat, { delete: m.key })
}
}
// Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await kizh.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(``)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
kizh.sendMessage(m.chat, { delete: m.key })
kizh.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Anti promosi HAPUS
if (db.data.chats[m.chat].promosi2) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
kizh.sendMessage(m.chat, { delete: m.key })
kizh.sendMessage(m.chat, { delete: m.key })

}
}
// Anti promosi
if (db.data.chats[m.chat].promosi) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
kizh.sendMessage(m.chat, { delete: m.key })
kizh.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//================================================
try {
ppuser = await kizh.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
}
//=================================================//




// Public & Self
if (!kizh.public) {
if (!m.key.fromMe && !isPremium && !isOwner) return
}
if (m.message) {
kizh.readMessages([m.key])
}

try {
ppuser = await kizh.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
async function Tiktokdl(url) {
//async function tiktokdl(url) {
try {
function API_URL(aweme) {
return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
};
async function getAwemeId(url) {
// any :/
let result;
const Konto1 = /video\/([\d|\+]+)?\/?/;
const valid = url.match(Konto1);
if (valid) {
return valid[1];
}
else {
try {
const data = await got
.get(url, {
headers: {
"Accept-Encoding": "deflate",
},
maxRedirects: 0,
})
.catch((e) => e.response.headers.location);
const _url = data;
const _valid = _url.match(Konto1);
if (_valid) {
result = _valid[1];
}
}
catch (error) {
// console.log(error)
result = false;
}
}
return result;
};
const valid = await getAwemeId(url);
//if (!valid) return false // result = false
const data = await got
.get(API_URL(valid), {
headers: {
"Accept-Encoding": "deflate",
"User-Agent": "okhttp/3.14.9",
},
})
.catch((e) => e.response);
//if (!data) return false // result = false
const body = JSON.parse(data.body);
const obj = body.aweme_list.find((o) => o.aweme_id === valid)
const results = {
aweme_id: obj.aweme_id,
region: obj.region,
desc: obj.desc,
create_time: obj.create_time,
author: {
uid: obj.author.uid,
unique_id: obj.author.unique_id,
nickname: obj.author.nickname,
birthday: obj.author.birthday,
},
duration: obj.music.duration,
download: {
nowm: obj.video.play_addr.url_list[0],
wm: obj.video.download_addr.url_list[0],
music: obj.music.play_url.url_list[0],
music_info: {
id: obj.music.id,
title: obj.music.title,
author: obj.music.author,
is_original: obj.music.is_original,
cover_hd: obj.music.cover_hd.url_list[0],
cover_large: obj.music.cover_large.url_list[0],
cover_medium: obj.music.cover_medium.url_list[0],
},
},
};
return {
status: true,
result: results//data.body //valid
}
} catch (e) {
return { status: false, result: e }
}
}
////

let emot = `${pickRandom(['☍', '々', '〆'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
switch (command) {
case "public": {
if (!isOwner) return reply(mess.owner)
kizh.public = true
reply(`*_Sukses Mode Public ✅_*`)
}
break
case "self": {
if (!isOwner) return reply(mess.owner)
kizh.public = false
reply(`*_Sukses Mode Self ✅_*`)
}
break
case 'owner':
case 'creator': {
await kizh.sendContact(m.chat, global.owner, m)
}
break

case 'addowner':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 62xxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await kizh.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break





case 'antilink2': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink2) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink2 = true
reply(`antilink2 Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink2) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink2 = false
reply(`antilink2 Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break



  
case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await kizh.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await kizh.imgToSticker(m.chat, media, m, { packname: `Created By ${namebot}\n${hariini}` , author: `Owner ${namaowner}\nTime ${time}` })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await kizh.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await kizh.vidToSticker(m.chat, media, m, { packname: `Created By ${namebot}\n${hariini}` , author: `Owner ${namaowner}\nTime ${time}` })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await kizh.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await kizh.sendStickerFromUrl(from, media, m, {packname: `Created By ${namebot}\n${hariini}` , author: `Owner ${namaowner}\nTime ${time}` })
await fs.unlinkSync(media)
} else reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
}
break


  
case 'hidetag': case 'h': {
if (!m.isGroup) return reply(mess.group)
if (!isOwner) return reply(mess.owner)
kizh.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'payment':
if (!isOwner) return reply(mess.owner)
let p = `*P A Y M E N T*\n\n`
p += `*DANA: ${dana}*\n`
p += `*GOPAY: ${gopay}*\n`
p += `*QRIS: ${scan}*\n`
kizh.sendMessage(m.chat, { image: { url: global.Qris }, caption: p }, { quoted: m })
break
case 'tourl': {
const media = await kizh.downloadAndSaveMediaMessage(quoted)
let anuu = await TelegraPh (media)
reply(`📮 *L I N K :*
${anuu}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* No Expiry Date`)
await fs.unlinkSync(media)
}
break
case 'remini': case 'hd': case 'hdr': {
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let proses = await remini(media, "enhance");
kizh.sendMessage(m.chat, { image: proses, caption: 'bilang apa?'}, { quoted: m})
}
break


//=================================================//





case 'tambah':{
if (!text.includes('+')) return reply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one + nilai_two}`)}
break
case 'kurang':{
if (!text.includes('-')) return reply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one - nilai_two}`)}
break
case 'kali':{
if (!text.includes('*')) return reply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one * nilai_two}`)}
break
case 'bagi':{
if (!text.includes('/')) return reply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one / nilai_two}`)}
break

case 'menu': {
const menu = `
  「  *MENU*  」
  
乂 *I N F O  B O T*
┌⁠─────────────────  
 ${emot} *Mode:* ${kizh.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
 ${emot} *Runtime:* ${runtime(process.uptime())}
 ${emot} *Total Premium:* ${premium.length}
└─────────────────
乂 *I N F O  U S E R*
┌⁠─────────────────
 ${emot} *Name:* ${pushname}
 ${emot} *Number:* ${m.sender.split('@')[0]}
 ${emot} *Status:* ${isOwner ? "Owner ❄" : "User ⚔️"}
 ${emot} *User:* ${isPremium ? 'Premium ❄' : 'Gratisan⚔️'}
└─────────────────


     乂───『 *MENU* 』───乂

       ${emot} ${prefix} allmenu
 
     └─────────────────`
kizh.sendMessage(m.chat, {
video: fs.readFileSync('./src/media/menu.mp4'),
caption: menu,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: namebot,
newsletterJid: "120363182916458068@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `${waktuucapan} ${pushname}`,
body: '',
thumbnailUrl: thumbailUrl,
sourceUrl: url,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
kizh.sendMessage(m.chat, {audio: fs.readFileSync('./media/musik.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})     
break
case 'allmenu': {
const key = `「  *ALLMENU*  」
  
乂 *I N F O  B O T*
┌⁠─────────────────  
 ☍ *Mode:* ${kizh.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
 ☍ *Runtime:* ${runtime(process.uptime())}
 ☍ *Total Premium:* ${premium.length}
└─────────────────
乂 *I N F O  U S E R*
┌⁠─────────────────
 ☍ *Name:* ${pushname}
 ☍ *Number:* ${m.sender.split('@')[0]}
 $☍ *Status:* ${isOwner ? "Owner ❄" : "User ⚔️"}
 ☍ *User:* ${isPremium ? 'Premium ❄' : 'Gratisan⚔️'}
└─────────────────


     乂───『 *DOWNLOAD* 』───乂

       ${emot} ${prefix} tiktok
       ${emot} ${prefix} instagram
       ${emot} ${prefix} ytmp3
       ${emot} ${prefix} ytmp4
       ${emot} ${prefix} tiktokaudio
       ${emot} ${prefix} facebook
       
     乂───『 *SEARCH* 』───乂

       ${emot} ${prefix} play
       ${emot} ${prefix} yts
       ${emot} ${prefix} playtiktok
       ${emot} ${prefix} pinterest
       ${emot} ${prefix} wallpaper
       ${emot} ${prefix} ssweb
       ${emot} ${prefix} google
       ${emot} ${prefix} infocuaca
      
     乂───『 *CONVERT* 』───乂

       ${emot} ${prefix} remini

     乂───『 *STORE* 』───乂

       ${emot} ${prefix} payment
       ${emot} ${prefix} addlist
       ${emot} ${prefix} dellist
       ${emot} ${prefix} store
       ${emot} ${prefix} tambah
       ${emot} ${prefix} kurang
       ${emot} ${prefix} bagi
       ${emot} ${prefix} kali

     乂───『 *STORE* 』───乂

       ${emot} ${prefix} antitoxic
       ${emot} ${prefix} antilink2
       ${emot} ${prefix} hidetag

     乂───『 *OWNER* 』───乂

       ${emot} ${prefix} addprem
       ${emot} ${prefix} addowner
       ${emot} ${prefix} dellprem
       ${emot} ${prefix} dellown
       ${emot} ${prefix} listown
       ${emot} ${prefix} listprem

     乂───『 *AIMENU* 』───乂

       ${emot} ${prefix} ai
       ${emot} ${prefix} simi
       ${emot} ${prefix} txt2img
       
     乂───『 *GAMES* 』───乂

       ${emot} ${prefix} tebak kata
       ${emot} ${prefix} tebak gambar
       ${emot} ${prefix} tebak kalimat
       ${emot} ${prefix} tebak lirik
       ${emot} ${prefix} tebak lagu
       ${emot} ${prefix} tebak lontong

     乂───『 *TOLS* 』───乂

       ${emot} ${prefix} sticker
       ${emot} ${prefix} smeme
       ${emot} ${prefix} attp
       ${emot} ${prefix} qc
       ${emot} ${prefix} emojimix   
       
     乂───『 *NWFS* 』───乂

       ${emot} ${prefix} waifu
       ${emot} ${prefix} neko
       
     乂───『 *ANIME* 』───乂

       ${emot} ${prefix} izumi
       ${emot} ${prefix} shinomiya

     乂───『 *PREMIUM* 』───乂
     
       ${emot} ${prefix} tiktokkayes
       ${emot} ${prefix} tiktokgirl
       ${emot} ${prefix} tiktokghea
       ${emot} ${prefix} tiktokbocil
       ${emot} ${prefix} tiktoknukhty
       ${emot} ${prefix} tiktoksantuy
       ${emot} ${prefix} tiktokpanrika
       ${emot} ${prefix} tiktoknotnot
       
     乂───『 *FUNMENU* 』───乂
     
       ${emot} ${prefix} memeindo
       ${emot} ${prefix} apakah
       ${emot} ${prefix} bagaimanakah
       ${emot} ${prefix} bisakah
       ${emot} ${prefix} rate
       ${emot} ${prefix} gantengcek
       ${emot} ${prefix} cantikcek
       ${emot} ${prefix} sangecek
       ${emot} ${prefix} kapankah
       
     乂───『 *STICKER* 』───乂
     
       ${emot} ${prefix} cry
       ${emot} ${prefix} kill
       ${emot} ${prefix} hug
       ${emot} ${prefix} pat
       ${emot} ${prefix} lick
       ${emot} ${prefix} kiss
       ${emot} ${prefix} bite
       ${emot} ${prefix} yeet
       ${emot} ${prefix} bully
       ${emot} ${prefix} bonk
       ${emot} ${prefix} wink
       ${emot} ${prefix} poke
       ${emot} ${prefix} nom
       ${emot} ${prefix} slap
       ${emot} ${prefix} smile
       ${emot} ${prefix} wave
       ${emot} ${prefix} awoo
       ${emot} ${prefix} blush
       ${emot} ${prefix} smug
       ${emot} ${prefix} glomp
       ${emot} ${prefix} happy
       ${emot} ${prefix} dance
       ${emot} ${prefix} cringe
       ${emot} ${prefix} cuddle
       ${emot} ${prefix} highfive
       ${emot} ${prefix} handhold
 
     └─────────────────

        ⌕ XshopTopup ⌕
     
       t.me/xshoptopup
`
kizh.sendMessage(m.chat, {
text: key,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: thumbailUrl,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break

//━━━━━━━━━━━━━━━[ BATAS AKHIR ]━━━━━━━━━━━━━━━━━//
default:
if (budy.startsWith('=>')) {
if (!isOwner) return reply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(err)
if (stdout) return reply(stdout)
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
kizh.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
console.log(util.format(err))
let e = String(err)
kizh.sendMessage(`${global.owner}@s.whatsapp.net`, {text:e})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
