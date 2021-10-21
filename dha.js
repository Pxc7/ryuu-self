const
{
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const googleImage = require('g-i-s')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const crypto = require('crypto')  
const toMs = require('ms')
const mathjs = require('mathjs')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const nhentai = require('nhentai-js')
const imageToBase64 = require('image-to-base64');
const qrcodes = require('qrcode');
const os = require('os');
const { validmove, setGame } = require("./lib/tictactoe");
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const hx = require('hxz-api')

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const game = require("./lib/game");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { mess } = require('./message/mess')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { smsg } = require('./lib/simple')
const { msgFilter } = require('./lib/antispam')
const _prem = require("./lib/premium");
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')

hit_today = []
banChats = true
antitrol = true 
bugc = true

//***********»GAME«************\\
let buriq = []
let kuis = []
let mtk = []
let nime = []
let ckl = []
let tebakbendera = []
//**********•LETNYA•*************\\
let {    
    gamewaktu,
    limitCount
} = require('./database/settings')

fake = 'RIU OWNER'
cr = '@Riu'
textnye = '☭UNI SOVIET☭\n'

let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antiyoutube = JSON.parse(fs.readFileSync('./database/antiyoutube.json'));
let fakeimage = fs.readFileSync("./media/wpmobile.png")
let love = JSON.parse(fs.readFileSync('./src/love.json'))
let afk = JSON.parse(fs.readFileSync('./database/afk.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let SJ1 = JSON.parse(fs.readFileSync('./database/Star1.json'))
let sosmed = JSON.parse(fs.readFileSync('./lib/sosmed.js'))
let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
let regisbintang = JSON.parse(fs.readFileSync('./database/user/bintang.json'))
let antivo = JSON.parse(fs.readFileSync("./database/rioantivo.json"))
let LK = JSON.parse(fs.readFileSync("./database/Suka.json"))
let DSLK = JSON.parse(fs.readFileSync("./database/TidakSuka.json"))
let SJ2 = JSON.parse(fs.readFileSync('./database/Star2.json'))
let SJ3 = JSON.parse(fs.readFileSync('./database/Star3.json'))
let SJ4 = JSON.parse(fs.readFileSync('./database/Star4.json'))
let userlike = JSON.parse(fs.readFileSync('./database/user/likenya.json'))
let SJ5 = JSON.parse(fs.readFileSync('./database/Star5.json'))
let antinsfw = JSON.parse(fs.readFileSync('./database/antinsfw.json'))
let nnn = JSON.parse(fs.readFileSync('./database/nilai.json'));
let buru = JSON.parse(fs.readFileSync('./database/buru.json'));
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let sambungkata = JSON.parse(fs.readFileSync('./database/sambungkata.json'))
let registercuy = JSON.parse(fs.readFileSync('./database/user/registercuy.json'))
let antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));
let autotutup = JSON.parse(fs.readFileSync("./database/tutup.json"));
let autobuka = JSON.parse(fs.readFileSync("./database/buka.json"));
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

prefix = setting.prefix
owner = setting.owner

// Database
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))


// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}
const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }            
            const addUserRegister = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        registercuy.push(obj)
          	fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
            }	
            
         const addUserBintang = (userid, sender, time) => {
	        const obj = { id: userid, name: sender, time: time}
	        regisbintang.push(obj)
          	fs.writeFileSync('./database/user/bintang.json', JSON.stringify(regisbintang))
            }	   
            
            const addUserLike = (userid, sender, time) => {
	        const obj = { id: userid, name: sender, time: time}
	        userlike.push(obj)
          	fs.writeFileSync('./database/user/likenya.json', JSON.stringify(userlike))
            }	   


const checkRegisteredUser = (sender) => {
	        let status = false
	        Object.keys(registercuy).forEach((i) => {
		    if (registercuy[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            
            const checkBintang = (sender) => {
	        let status = false
	        Object.keys(regisbintang).forEach((i) => {
		    if (regisbintang[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            
            const checkLike = (sender) => {
	        let status = false
	        Object.keys(userlike).forEach((i) => {
		    if (userlike[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            

const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = dha = async (dha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		m = smsg(dha, mek)
		global.blocked
		global.prefix
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { quotedMsg, isQuotedMsg, fromMe, chats, isBaileys } = mek
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment().tz('Asia/Jakarta').format('HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const argss = body.split(/ +/g)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        const botNumber = dha.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		const totalchat = await dha.chats.all()
		const sender = mek.key.fromMe ? dha.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]
		const groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
		const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiWaMe = isGroup ? antiwame.includes(from) : false
        const isRegister = checkRegisteredUser(sender)
        const isLikeNya = checkLike(sender)
        const isPremium = isGroup ? _prem.checkPremiumUser(sender,premium) : false
        const isStarNya = checkBintang(sender)
        const itsMe = mek.key.fromMe ? true : false
        const isBadword = isGroup ? grupbadword.includes(from) : false
        const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isAutoClose = isGroup ? autotutup.includes(from) : false
        const isAutoOpen = isGroup ? autobuka.includes(from) : false
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false
        const isAntiviewonce = isGroup ? antivo.includes(from) : false;
        const isAntiNsfw = isGroup ? antinsfw.includes(from) : false
        const isAntiLinkYoutube = isGroup ? antiyoutube.includes(from) : false
		const isVote = isGroup ? voting.includes(from) : false
        const isOwner = ownerNumber.includes(sender)
        const gcounti = setting.gcount
        const isClaimOn = _claim.includes(sender)
        const gcount = isPremium ? gcounti.prem : gcounti.user
        
               dha.chatRead(from, "read")

        
        // here button function
        buttonsR = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : '' || ''
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
// here fake
miku = fs.readFileSync('miku.jpg')
pertolongan = fs.readFileSync('pertolong.jpg')
maid = fs.readFileSync('Maid.jpg')
mancingJPG = fs.readFileSync('MancingGan.jpg')
quotesanim = fs.readFileSync('QUOTE.jpg')
        
        const nebal = (angka) => {
return Math.floor(angka)
}
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = dha.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return dha.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
				dha.sendMessage(from, teks, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 0,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapnya}`,"body": `Your Name : ${pushname}`,"previewType": "PHOTO","thumbnailUrl": "https://i.ibb.co/LSVSL9T/IMG-20210924-WA0004.jpg","thumbnail": "","sourceUrl": "https://wa.me/62814622392081?text=Save Bang"}},quoted: mek})
			}
        const sendMess = (hehe, teks) => {
           dha.sendMessage(hehe, teks, text)
        }
        const replyFake = (teks) => {
				dha.sendMessage(from, teks, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 0,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapnya}`,"body": `Your Name : ${pushname}`,"previewType": "PHOTO","thumbnailUrl": "https://i.ibb.co/LSVSL9T/IMG-20210924-WA0004.jpg","thumbnail": "","sourceUrl": "https://wa.me/62814622392081?text=Save Bang"}},quoted: mek})
			}
        
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './tmp/stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './tmp/stik' + names + '.png'
                    let asw = './tmp/stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        dha.sendMessage(to, media, MessageType.sticker,{quoted: floc})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await dha.relayWAMessage(
        dha.prepareMessageFromContent(
          target,
          dha.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      dha.sendMessage(target, teks, "conversation");
    };
    //  Ucapan
    

	//=======================Tanggal========================\\
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Minggu'; break;
                case 1: hari = 'Senin'; break;
                case 2: hari = 'Selasa'; break;
                case 3: hari = 'Rabu'; break;
                case 4: hari = 'Kamis'; break;
                case 5: hari = 'Jum`at'; break;
                case 6: hari = 'Sabtu'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Januari'; break;
                case 1: bulan1 = 'Februari'; break;
                case 2: bulan1 = 'Maret'; break;
                case 3: bulan1 = 'April'; break;
                case 4: bulan1 = 'Mei'; break;
                case 5: bulan1 = 'Juni'; break;
                case 6: bulan1 = 'Juli'; break;
                case 7: bulan1 = 'Agustus'; break;
                case 8: bulan1 = 'September'; break;
                case 9: bulan1 = 'Oktober'; break;
                case 10: bulan1 = 'November'; break;
                case 11: bulan1 = 'Desember'; break;
            }
            var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Wib';
	
            var ase = new Date();
                        var waktunyasu = ase.getHours();
                        switch(waktunyasu){
                case 0: waktunyasu = `Malam ${pushname}🌌`; break;
                case 1: waktunyasu = `Malam ${pushname}🌌`; break;
                case 2: waktunyasu = `Malam ${pushname}🌌`; break;
                case 3: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 4: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 5: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 6: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 7: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 8: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 9: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 10: waktunyasu = `Pagi ${pushname}🌄`; break;
                case 11: waktunyasu = `Siang ${pushname}🏞️`; break;
                case 12: waktunyasu = `Siang ${pushname}🏞️`; break;
                case 13: waktunyasu = `Siang ${pushname}🏞️`; break;
                case 14: waktunyasu = `Siang ${pushname}🏞️`; break;
                case 15: waktunyasu = `Sore ${pushname}🌆`; break;
                case 16: waktunyasu = `Sore ${pushname}🌆`; break;
                case 17: waktunyasu = `Sore ${pushname}🌆`; break;
                case 18: waktunyasu = `Malam ${pushname}🌃`; break;
                case 19: waktunyasu = `Malam ${pushname}🌃`; break;
                case 20: waktunyasu = `Malam ${pushname}🌃`; break;
                case 21: waktunyasu = `Malam ${pushname}🌃`; break;
                case 22: waktunyasu = `Malam ${pushname}🌃`; break;
                case 23: waktunyasu = `Malam ${pushname}🌃`; break;
            }
            var ucapan = '' + waktunyasu;
  
  var asu = new Date();
                        var waktunyamek = asu.getHours();
                        switch(waktunyamek){
                case 0: waktunyamek = `Malam🌌`; break;
                case 1: waktunyamek = `Malam🌌`; break;
                case 2: waktunyamek = `Malam??`; break;
                case 3: waktunyamek = `Pagi🌄`; break;
                case 4: waktunyamek = `Pagi🌄`; break;
                case 5: waktunyamek = `Pagi🌄`; break;
                case 6: waktunyamek = `Pagi🌄`; break;
                case 7: waktunyamek = `Pagi🌄`; break;
                case 8: waktunyamek = `Pagi🌄`; break;
                case 9: waktunyamek = `Pagi🌄`; break;
                case 10: waktunyamek= `Pagi🌄`; break;
                case 11: waktunyamek = `Siang🏞️`; break;
                case 12: waktunyamek = `Siang🏞️`; break;
                case 13: waktunyamek= `Siang🏞️`; break;
                case 14: waktunyamek= `Siang🏞️`; break;
                case 15: waktunyamek= `Sore🌆`; break;
                case 16: waktunyamek= `Sore🌆`; break;
                case 17: waktunyamek= `Sore🌆`; break;
                case 18: waktunyamek= `Malam🌃`; break;
                case 19: waktunyamek= `Malam🌃`; break;
                case 20: waktunyamek= `Malam🌃`; break;
                case 21: waktunyamek= `Malam🌃`; break;
                case 22: waktunyamek= `Malam🌃`; break;
                case 23: waktunyamek= `Malam🌃`; break;
            }
  var ucapnya = '' + waktunyamek;
//time
let d = new Date();
          let locale = "id";
          let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime()
          let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
          var ase = new Date();
          
          
    const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${ucapan}`,
                    jpegThumbnail: miku
                          }
                        }
                      }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           dha.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return dha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
        flink = {
"title": `ǀtz.me/Riu`,
"body": `No Hentai No Life`,
"previewType": "PHOTO",
"thumbnailUrl": `https://wa.me/62814622392081`,
"thumbnail": miku,
"sourceUrl": `-`
}
       const kickMember = async(id, target = []) => {
           let group = await dha.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = dha.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await dha.groupRemove(from, [i])
        } else {
           await dha.sendMessage(id, "Not Premited!", "conversation")
        }
    }
}
        const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "0@s.whatsapp.net"  }, "message": {orderMessage: {itemCount: 0,status: 200, thumbnail: fs.readFileSync('image/100.jpg'), surface: 200, message: `Bio : ${ucapnya}\nJam : ${tampilJam}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999",
                 "ptt": "true"
                        }
	                  } 
                     } 
                     const fvideo = {
	 key: { 
	      participant: '62814622392081@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"RIU GANZ",
                 "h": `Hmm`, 
                 'seconds': '2000', 
                 'caption': textnye,
                 'jpegThumbnail': fs.readFileSync('./image/109.jpg')
                        }
                       }
	                  }
const fakegroup = (teks) => {
            dha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        
        const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/106.jpg`), thumbnail: fs.readFileSync(`image/107.jpg`),sendEphemeral: true}}}  
       const add = function(from, orangnya){
	       dha.groupAdd(from, orangnya)
}
const kick = function (from, orangnya) {
      for (let i of orangnya) {
        dha.groupRemove(from, [i]);
      }
    };
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       dha.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await dha.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

      const hideTag = async function(from, text){
	       let anu = await dha.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       dha.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           dha.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
dha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           dha.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: miku, contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
async function sendFileFromUrl(from, url, caption, miku, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return dha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, thumbnail: miku, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
      
          let authorname = dha.contacts[from] != undefined ? dha.contacts[from].vname || dha.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
       
       
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
        const isImage = (type === 'imageMessage')
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
    
for (let xoxo of mentionUser) {
                if (afk.hasOwnProperty(xoxo.split('@')[0])) {
                	const num = `${sender.split("@")[0]}@s.whatsapp.net`
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[xoxo.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[xoxo.split('@')[0]]
                    }
                    reply(ini_txt)
                   dha.sendMessage(`${xoxo.split("@")[0]}@s.whatsapp.net`, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : *@${num.split('@')[0]}*\nIn Group : ${groupName}`, MessageType.text, { quoted : mek, contextInfo : { mentionedJid: [num]}})
                }
            }
            if (isGroup && m.isBaileys) {
if (mentionUser.length >= groupMembers.length){
if (!budy.match(/(@)/gi)) {
mentions(`Terdeteksi @${sender.split('@')[0]} melakukan hidetag`, [sender], false)
}
}
}
//-------- [ GAME ] ---------\\
_prem.expiredCheck(premium)

game.cekWaktuK(dha, kuis)
if (game.isKuis(from, kuis)){
	if (fromMe) return
if (budy.toLowerCase().includes(game.getJawabanKuis(from, kuis))){
var htgm2 = randomNomor(50000)
addBalance(sender, htgm2, balance)
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanKuis(from, kuis)}\n\n*Balance Yang Didapat Adalah*\n*${htgm2}*\nIngin bermain lagi? kirim *${prefix}kuis*`
let ge = await dha.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}kuis`, buttonText: {displayText: '↪️ Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
dha.relayWAMessage(ge)
kuis.splice(game.getKuisPosi(from, kuis), 1)
}
}
game.cekWaktuSA(dha, buriq)
if (game.isSiapaAku(from, buriq)){
	if (fromMe) return
if (budy.toLowerCase().includes(game.getJawabanSA(from, buriq))){
var htgm2 = randomNomor(50000)
addBalance(sender, htgm2, balance)
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, buriq)}\n\n*Balance Yang Didapat Adalah*\n*${htgm2}*\nIngin bermain lagi? kirim *${prefix}siapaaku*`
let ge = await dha.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}siapaaku`, buttonText: {displayText: '↪️ Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
dha.relayWAMessage(ge)
buriq.splice(game.getSAPosi(from, buriq), 1)
}
}

game.cekWaktuTB(dha, tebakbendera)
     if (game.isTebakBendera(from, tebakbendera)){       
   if (fromMe) return  	
if (budy.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var htgm2 = randomNomor(50000)
addBalance(sender, htgm2, balance)
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n\n*Balance Yang Didapat Adalah*\n*${htgm2}*\nIngin bermain lagi? kirim *${prefix}tebakbendera*`
let ge = await dha.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}tebakbendera`, buttonText: {displayText: '↪️ Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
dha.relayWAMessage(ge)
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
}
}

game.cekWaktuCkl(dha, ckl)
if (game.isCkl(from, ckl)){
	if (!mek.key.fromMe) return 
if (budy.toLowerCase().includes(game.getJawabanCkl(from, ckl))){
var htgm2 = randomNomor(50000)
addBalance(sender, htgm2, balance)
jawab = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanCkl(from, ckl)}\n\nIngin bermain lagi? kirim pencet dibawah ini`
let ge = await dha.prepareMessageFromContent(mdata.id, {
"buttonsMessage": {
"contentText": `${jawab}`,
"buttons": [
{buttonId: 'caklontong', buttonText: {displayText: '↪️Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: falfa, contextInfo: {"mentionedJid": [num]}})
dha.relayWAMessage(ge)
ckl.splice(game.getCklPosi(from, ckl), 1)
}
}

game.cekWaktuMtk(dha, mtk)
            if (game.isMtk(from, mtk)){
if (fromMe) return
if (budy.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm2 = randomNomor(50000)
addBalance(sender, htgm2, balance)
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n\n*Balance Yang Didapat Adalah*\n*${htgm2}*\nIngin bermain lagi? kirim *${prefix}mathkuis*`
let ge = await dha.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}mathkuis ${q}`, buttonText: {displayText: '↪️ Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
dha.relayWAMessage(ge)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}

if (isGroup && isAutoClose && isBotGroupAdmins) {
var outiny = new Date();
                        var timerr = outiny.getHours();
                        switch(timerr){
                case 1: dha.groupSettingChange(from, GroupSettingChange.messageSend, true); break;
     }
}


if (isGroup && isAutoOpen && isBotGroupAdmins) {
var outiny = new Date();
                        var timerr = outiny.getHours();
                        switch(timerr){
                case 6: dha.groupSettingChange(from, GroupSettingChange.messageSend, false); break;
     }
}

            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
      
             if (isGroup && m.mtype == 'viewOnceMessage'){
var msg = {...mek}
msg.message = mek.message.viewOnceMessage.message
msg.message[Object.keys(msg.message)[0]].viewOnce = false
reply('ViewOnce detected!')
dha.copyNForward(from, msg)
}

if (isGroup && !isGroupAdmins && isBotGroupAdmins) {
                if (isImage) {
                        var filePath = await dha.downloadAndSaveMediaMessage(msg);
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        var get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`, {...options })
                        fs.unlinkSync(filePath)
                        var get_resulttt = get_result.result
                        var is_nsfw = "No"
                        if (Number(get_resulttt.replace("%", "")) >= 60) var is_nsfw = "Yes"
                        if (is_nsfw === "Yes") {
		        reply(`Gambar NSFW Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
                dha.groupRemove(from, [sender])
              }
                }
          }
         
             // Badword
        if (isGroup && isBadword && !isOwner && !isGroupAdmins && !fromMe){
            for (let kasar of badword){
                if (budy.toLowerCase().includes(kasar)){
                    if (isCountKasar(sender, senbadword)){
                        if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
                        reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
                        dha.groupRemove(from, [sender])
                        delCountKasar(sender, senbadword)
                    } else {
                        addCountKasar(sender, senbadword)
                        reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
                    }
                }
            }
        }
          
if (budy.length > 5500) {
    if (!isGroup) return
    if (!isAntiVirtex) return
    if (isGroupAdmins) return
    reply(`「 *VIRTEX DETEKSI* 」\nKamu mengirimkan virtex, maaf kamu di kick dari grup :(`)
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    dha.groupRemove(from, [sender])
    }

const pw = [
"165310", 
"177978", 
"211759",  
"212643", 
"229540", 
"111074",
"211519", 
"256097", 
"163478", 
"915005", 
"792880", 
"260629", 
"128051", 
"239536",
"121310",
"202019",
"250029"]

/*--------------------[ Tictactoe Game Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "y" ||
budy.toLowerCase() == "yes" ||
budy.toLowerCase() == "ya"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`Game telah dimulai sebelumnya!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2)
);
const chatAccept = `T I C T A C T O E  G A M E

INFO :
  Player ❎ : @${boardnow.X}
  Player ⭕ : @${boardnow.O}
               
     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Giliran @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

Ketik nyerah untuk Menyerah!
Ketik ${prefix}delttc untuk Menghapus sesi game!
`;
dha.sendMessage(from, monospace(chatAccept), MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
} else {
dha.sendMessage(from,`Opsi ini hanya untuk @${boardnow.O} !`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "no" ||
budy.toLowerCase() == "tidak"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`Game telah dimulai sebelumnya!`);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
dha.sendMessage(from,`Sayangnya tantangan @${boardnow.X} ditolak ❎😕`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
} else {
dha.sendMessage(from,`Opsi ini hanya untuk @${boardnow.O} !`,MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮 Tictactoe Game 🎳*
          
Game berakhir seri 😐
`;
reply(chatEqual);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
return;
}
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 20) + 10;
const limLoose = Math.floor(Math.random() * 10) + 5;
const chatWon = `*🎮 Tictactoe Game 🎳*
          
Telah dimenangkan oleh @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
dha.sendMessage(from, chatWon, MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
} else {
const chatMove = `T I C T A C T O E  G A M E

INFO
  Player ❎ : @${moving.X}
  Player ⭕ : @${moving.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Giliran : @${moving.turn == "X" ? moving.X : moving.O}

Ketik nyerah untuk Menyerah!
Ketik ${prefix}delttc untuk Menghapus sesi game!
`;
dha.sendMessage(from, monospace(chatMove), MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
}

if ((senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
      num = `${sender.split("@")[0]}@s.whatsapp.net`
teks = `@${num.split("@")[0]} Ok Pak`
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
mentions(teks,[num],true)
  } else {
reply(`Tidak ada sesi yg berlangsung`);
  }
}
     
     if (isGroup && isBotGroupAdmins && !mek.key.fromMe) {
           if (sender.includes("+62")) {
        reply(`[ *BULE TERDETEKSI* ]\nMaaf Kamu Akan Terkick:/`);
        dha.groupRemove(from, [sender]);
      }
    }
     
     // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    var htgm2 = randomNomor(50000)
                  addBalance(sender, htgm2, balance)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }
            

            if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = sambungkata[sender.split('@')[0]]
                userAnswer = budy.toLowerCase()
                if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&text=${userAnswer}`)
                    wahyu = get_result.result
                    await dha.sendMessage(from, wahyu, MessageType.text, { quoted: mek }).then(() => {
                    	var htgm2 = randomNomor(50000)
                  addBalance(sender, htgm2, balance)
                        sambungkata[sender.split('@')[0]] = get_result.result.toLowerCase()
                        fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    })
                } else {
                    reply("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
                }
            }
            
            // Tebak Anime
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    var htgm2 = randomNomor(50000)
                  addBalance(sender, htgm2, balance)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply(`( Jawaban Anda Salah! )\n\nJika Tidak Mau Jawab Ketik !canceltebaknime`)
                }
            }
      
         // CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
console.log(color('[ SPAM ]','red'), (command), ">", (sender.split('@')[0]))
return reply('No Spam, Minimal 3 Detik Bro')
} 
if (isCmd && msgFilter.isFiltered(from) && isGroup) {
console.log(color('[ SPAM ]','red'), (command), ">", (sender.split('@')[0]), "=>", color(groupName, "yellow"))
return reply('No Spam, Minimal 3 Detik Bro')
}  
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
            if (!mek.key.fromMe && banChats === true) return
            switch(command){
           case 'creator':
           miku = fs.readFileSync('miku.jpg')
              ow = "62814622392081@s.whatsapp.net"
              teksnye = `
@${ow.split('@')[0]}

~RiuNiiSan`
              dha.sendMessage(from, miku, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: teksnye })
              break    
              case 'antibadword':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (!args.length === 1) return reply(`Pilih 1 untuk mengaktifkan atau 0 untuk menonaktifkan`)
                if (Number(args[0]) === 1) {
                    if (isBadword) return reply(`Udah aktif`)
                    grupbadword.push(from)
					fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
					reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else if (Number(args[0]) === 0) {
                    anu = grupbadword.indexOf(from)
                    grupbadword.splice(anu, 1)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
                    reply('antibadword grup nonaktif')
                } else {
                    reply(`Pilih 1 untuk mengaktifkan atau 0 untuk menonaktifkan`)
                }
                break
            case 'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                reply(bi)
                break
            case 'addbadword':
                if (!isGroupAdmins) return reply("khusus admin")
                if (args.length < 1) return reply(`masukkan kata`)
                query = args.join("")
                if (isKasar(query, badword)) return reply(`Udah ada`)
                addBadword(query, badword)
                reply(`Sukses`)
                break
            case 'delbadword':
                if (!isOwner) return reply("khusus owner")
                if (args.length < 1) return reply(`masukkan kata`)
                query = args.join("")
                if (!isKasar(query, badword)) return reply(`Ga ada`)
                delBadword(query, badword)
                reply(`Sukses`)
                break
            case 'clearbadword':
                if (!isOwner) return reply("khusus owner")
                if (args.length < 1) return reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break
                case 'antidelete':
                if (!isOwner && !fromMe && !isGroupAdmins) return reply(mess.GrupAdmin)
				const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				if (args.length === 1) return reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
				if (args[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)
						dataRevoke.push(from)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete diaktifkan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)
					}
				} else if (args[1] == 'ctaktif') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)
						dataCtRevoke.data = true
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete diaktifkan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)
					}
				} else if (args[1] == 'banct') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)
					if (args.length === 2 || args[2].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)
					dataBanCtRevoke.push(args[2] + '@s.whatsapp.net')
					fs.writeFileSync('./database/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					reply(`Kontak ${args[2]} telah dimasukan ke banlist antidelete secara permanen!`)
				} else if (args[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete dimatikan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)
					}
				} else if (args[1] == 'ctmati') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete dimatikan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)
					}
				} else {
                  reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
               }
				break
     case 'waifu18': case 'w18':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup) return
                     fetchJson('https://waifu.pics/api/nsfw/waifu').then((data) => {
                     sendFileFromUrl(from, data.url, 'Ini', mek)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                  break
                  case 'add':
					if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Contoh Penggunaan : ${prefix}add 6281462239208')
					if (args[0].startsWith('08')) return reply(`Contoh Penggunaan : ${prefix}add 6281462239208`)
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dha.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
              case 'music': case 'musik':{
              	if (!isPremium && !isOwner) return reply("Khusus Premium!")
                if (args.length < 2) return reply(`Kirim perintah *${command}* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                        let list = []
                        let startnum = 1
                        for (var x of yt) {
                        let yy = { title: 'Data ke-'+ startnum++,
                        rows: [
                           {
                            title: `${x.title}`,
                            description: `\n\n*Viewers: ${x.views}*\n*Duration: ${x.timestamp}*\n*Upload: ${x.ago}*\n*Url: ${x.url}*`,
                            rowId: `${prefix}buttons1 ${x.url}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    listmsg(from, `Music Search`, `Pilih disini, Hasil Pencarian "${q}", Hanya untuk Premium User`, list)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
     
                
//********************(( PREMI ))******************\\
                case 'addprem':
if (!itsMe && !isOwner)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (!q)return reply(`*Format Error!*\n\n*Example :*\n• *${prefix + command} @tag 10d*\n\n*Note :*\n• s : detik\n• m : menit\n• h : jam\n• d : hari\n\n*Tq To : ${fake}*`)
expired = q.split(" ")[1]
const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(`_Succses_`)
break
case 'delprem':
  if(!itsMe && !isOwner) return reply('Only Owner!')
user = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`Succes delete premium @${user.split("@")[0]}`,[user],true)
}
}
break

case 'listprem':
if(!isGroup)return reply(mess.only.group)
dha.updatePresence(from, Presence.composing)
let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `*ID :* @${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
  }
mentions(txt, men, true)
break

case 'cekprem': case 'cekpremium':
if (!isPremium) return reply(`Kamu bukan user premium`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
try {
ppimg = await dha.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
its = await getBuffer (ppimg)
dha.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]}, caption: teks
})
break
//********************(( END PREMI ))******************\\
 //********************(( LIMIT ))******************\\
                case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
break

case 'buylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(monospace(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
}
break

case 'buyglimit':{
if(!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(monospace(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
  }
break

case 'giftlimit':
if(!itsMe && !isOwner)return
if (!q)return reply(`Example : ${prefix + command} @tag 10`)
lim = q.split(" ")[1]
const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
giveLimit(tag1, lim, limit)
reply('Succes')
break
//********************(( END LIMIT ))******************\\ //JANGAN DIUBAH NANTI EROR
case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`*${mek.quoted.isBaileys}*`)
break
               case 'fetish': case 'fetis': {
                if (!isGroup) return reply("Khusus Grup!")
                if (!q) return reply(`Contoh penggunaan ${command} pussy`)
                owner = "62814622392081@s.whatsapp.net"
                var listfet = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao', 'hentaianal', 'anal', 'pussy', 'animepussy', 'yaoi', 'yuri', 'hentaiblowjob', 'blowjob', 'futanari', 'kitsunehentai', 'midriffhentai', 'erohentai', 'cumhentai', 'paizuri']
                var anu = q.toLowerCase()
                if (!listfet.includes(q)) {
                let teks = `List Fetish :\n\n`
                for (let x of listfet) {
                teks += `${x}\n`
                }
                teks += `\nContoh penggunaan : ${command} pussy`
                reply(teks)
                }
                console.log(`Searching fetish from ${anu} subreddit...`)
                let ress = await fetchJson(`https://meme-api.herokuapp.com/gimme/${anu}/`)
                let damta = await ress.json()
               let { preview, title, author, url } = damta.results[0]
                .then((data) => {
                    sendFileFromUrl(from, preview, 'p.jpg', `*${command} found!*\n\n*Title:* ${title}\n\n*Author:* ${chapters}\n\n*Url:* ${volumes}`, mek)
                    })
                 .catch((err) => {
                            sendMess(`${owner.split("@")[0]}@s.whatsapp.net`, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                    break
                    case 'charasearch':
    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if(!q) return reply(`gambar apa?\nContoh : ${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await dha.sendMessage(from,li,image,{quoted: mek})
            break
                    case 'mangasearch':
                    query = args.join(" ")
                    let ress = await fetch(`https://api.jikan.moe/v3/search/manga?q=${query}`)
			let damta = await ress.json()
			let { title, synopsis, chapters, publishing, start_date, volumes, url, rated, score, image_url } = damta.results[0]
			dha.sendFileFromUrl(from, image_url, 'p.jpg', `*Manga found!*\n\n*Title:* ${title}\n\n*Chapters:* ${chapters}\n\n*Volumes:* ${volumes}\n\n*Public Or Private:* ${publishing}\n\n*Score:* ${score}\n\n*Rilis:* ${start_date}\n\n*Synopsis:* ${synopsis}\n\n*URL*: ${url}`, mek)
			break
              case 'tebakbendera':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/bendera?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
                let anih = anu.result.name.toLowerCase()
                game.addtebakbendera(from, anih, gamewaktu, tebakbendera)
                const petunjuk = anu.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                reply(`Nama Negara Dari Simbol ${anu.result.flag}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`)
            }
                break
              case "ttp":
              if (args.length == 0) return reply(`Example: ${prefix + command} Textnya`)
              query = args.join(" ")
              buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&APIKEY=91e9b333684574e2&text=${query}`)
              dha.sendMessage(from, buffer, sticker, { quoted: mek })
              break
              case 'ppcouple':
              dha.updatePresence(from, Presence.composing) 
				num = `${sender.split("@")[0]}@s.whatsapp.net`
				kont = `Caouple Cowonya\n*@${num.split('@')[0]}*`
				kint = `Couple Cewenya\n*@${num.split('@')[0]}*`
if (!isGroup) return dha.sendMessage(from, `*Hanya Dapat Digunakan DiGrup Kak !*`, text, {quoted: ftroli})
let ppcp = fs.readFileSync('./lib/couple.js');
jsonData = JSON.parse(ppcp);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
Laki = await getBuffer(randKey.male)
dha.sendMessage(from, Laki, image,  { caption: `${kont}`, quoted: floc, thumbnail: miku, contextInfo: { mentionedJid: [num]}})
Cewe = await getBuffer(randKey.female)
dha.sendMessage(from, Cewe, image, { caption: `${kint}`, quoted: floc, thumbnail: miku, contextInfo: { mentionedJid: [num]}})
break
        case 'owner':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}`
               buttons = [{buttonId: `${prefix}creator`,buttonText:{displayText: 'CREATOR'},type:1},{buttonId:`${prefix}infoig`,buttonText:{displayText:'INSTAGRAM'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'Butuh Info Apa Dari Ownerku?', buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: freply })
               dha.relayWAMessage(prep)
               break
               case 'menu':
               case 'help':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
let ppmenucuy = fs.readFileSync('./lib/menu2.js');
jsonData = JSON.parse(ppmenucuy);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
let gambar = await getBuffer(randKey.foto)
     const itu = fs.readFileSync('Maid.jpg')
               num = `${sender.split("@")[0]}@s.whatsapp.net`
               bocil = `NOTE : Klik Button Dibawah Ini, Bagi Yang Tidak Kelihatan Atau WhatsApp Mod Bisa Langsung Ketik !listmenu.`
               hai = `Hai Kak *@${num.split('@')[0]}*\nSaya Ryuu Bot Yang Akan Membantu/Mempermudah Kakak Untuk Membuat Sticker Dan Lain Lain, Mau Cari Tau Tentangku? Chat Owner Yah!`
     sendButLocation(from,`${hai}`,`${bocil}`, {jpegThumbnail: gambar}, [{buttonId:`${prefix}listmenu`,buttonText:{displayText:'📝MENU'},type:1}, {buttonId:`${prefix}owner`,buttonText:{displayText:'👤OWNER'},type:1}, {buttonId: `${prefix}ratting`, buttonText: {displayText: '🌟RATE'}, type: 1}], {contextInfo: { mentionedJid: [num]}})
               break
               case 'daftarnya':
               if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
               num = `${sender.split("@")[0]}@s.whatsapp.net`
              riuecchi = `Hai Kak @${num.split('@')[0]} 
Pilih Menu OTP Dibawah Ini!`
              buttons = [{buttonId:`${prefix}codeotpteks`,buttonText:{displayText:'𝙊𝙏𝙋 𝙏𝙀𝙆𝙎'},type:1},{buttonId:`${prefix}codeotpvn`,buttonText:{displayText:'𝙊𝙏𝙋 𝙑𝙉'},type:1}]
               buttonsMessage = { contentText: `${riuecchi}`, footerText: 'PILIH PENDAFTARAN OTP DIBAWAH INI',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek, contextInfo: { forwardingScore: 1, isForwarded: true,  mentionedJid: [num]}})
               dha.relayWAMessage(prep)
               break
               case 'codeotpteks':
               if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
               pewe = pw[Math.floor(Math.random() * pw.length)];
               const munir = fs.readFileSync('ayanokoji.jpg')
               verif = `Jangan Berikan Kode Ke Siapapun!\nKodenya Adalah : ${pewe}`
               hayuk = `*Send Kode, Dan Reply Pesan Ini!*`
               dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, munir, image, {quoted: floc, caption: verif })
               dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, hayuk, MessageType.text, {quoted: floc})
               break
               case 'emojilist':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if(!isGroup)return reply(mess.only.group)
po1 = dha.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*LIST EMOJI*",
"description": `\nList Emoji Nya Kak!\nKetik !emoji wa 🗿\nSebagai Contoh`,
"buttonText": "Click Here!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "😱 EMOJI LIST 😱",
      "rows" :[
        {
          "title": "APPLE🍎",
          "rowId": ``
        },
        { 
          "title": "WHATSAPP🍏",
          "rowId": ``
        },
{ 
          "title": "FACEBOOK🍇",
          "rowId": ``
        },
{ 
          "title": "GOOGLE🌼",
          "rowId": ``
        },
{ 
          "title": "MOZILA🍈",
          "rowId": ``
        },
{ 
          "title": "TWITER🍆",
          "rowId": ``
        },
{
	
          "title": "SAMSUNG🍑",
          "rowId": ``
        }]
  }
  ]
}}, {quoted : mek}) 
dha.relayWAMessage(po1, {waitForAck: true})
break
               case 'emoji':
			if (args.length == 0) return reply(`MASUKAN KATA KUNCINYA\n*CONTOH* : !emoji wa 😱\nUNTUK MELIHAT LIST EMOJI KETIK !emojilist`)
             emojis = args[0]
            args.shift()
            emoje = args.join(" ")
           replyFake(mess.wait)
           switch (emojis) {
           case 'ap':
           case 'apple':
           if (args.length == 0) return reply(`MASUKAN KATA KUNCINYA\n*CONTOH* : !emoji ap 😱`)
			emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[0].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
                    break
              case 'wa':
              case 'whatsapp':
              if (args.length == 0) return reply(`MASUKAN KATA KUNCINYA\n*CONTOH* : !emoji wa 😱`)
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[4].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
             case 'fb':
              case 'facebook':
              if (args.length == 0) return reply(`MASUKAN KATA KUNCINYA\n*CONTOH* : !emoji fb 😱`)
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[6].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
             case 'go':
              case 'google':
              if (args.length == 0) return reply(`MASUKAN KATA KUNCINYA\n*CONTOH* : !emoji go 😱`)
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[1].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
            case 'mo':
              case 'mozila':
              if (args.length == 0) return reply(`MASUKAN KATA KUNCINYA\n*CONTOH* : !emoji mo 😱`)
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[14].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
              case 'tw':
              case 'twitter':
              if (args.length == 0) return reply(`MASUKAN KATA KUNCINYA\n*CONTOH* : !emoji tw 😱`)
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[5].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
              case 'sa':
              case 'samsung':
              if (args.length == 0) return reply(`MASUKAN KATA KUNCINYA\n*CONTOH* : !emoji sa 😱`)
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[2].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
}
break
      case 'listmenu':
      dha.updatePresence(from, Presence.composing) 
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
      num = `${sender.split("@")[0]}@s.whatsapp.net`
      markzuberg = "0@s.whatsapp.net"
    ow = "62814622392081@s.whatsapp.net"
     let p2 = await dha.getStatus(num)
     let p3 = `${p2? `${p2.status}` : '-'}`
     let ppmenu = fs.readFileSync('./lib/menu.js');
jsonData = JSON.parse(ppmenu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
let gambarnya = await getBuffer(randKey.foto)
      menunya =
`Hallo kak 👋\n*@${num.split('@')[0]}*\n

_*WhatsApp BOT*_

Your Name : *${pushname}*

Your Bio : *${p3}*

Your Api : wa.me/${sender.split("@")[0]}


───────────────
*𝘾𝙈𝘿 𝙎𝙏𝙄𝘾𝙆𝙀𝙍* [ 📰 ]

- Emoji
Penggunaan : Ketik [ !emoji wa 😎] 
Info : Untuk Melakukan Emoji Ke Sticker.

- List Emoji
Penggunaan : Ketik [ !emojilist ] 
Info : Untuk Melihat List Emoji Apa Saja Yang Bisa Ke Ubah.

- Attp
Penggunaan : Ketik [ !attp Halo ] 
Info : Untuk Mengubah Kata Kata Menjadi Sticker Kelap Kelip, Tidak Termasuk Emoji!.

- Sticker
Penggunaan : Ketik [ !sticker ] 
Info : Untuk Mengubah Image Dan Vidio Menjadi Sticker.

- Toimg
Penggunaan : Ketik [ !toimg ] 
Info : Untuk Mengubah Sticker Menjadi Image.

- Tovideo
Penggunaan : Ketik [ !tovideo ] 
Info : Untuk Mengubah Sticker Bergerak Menjadi Vidio.

- Telesticker
Penggunaan : Ketik [ !telesticker link ]
Info : Untuk Mengubah Link Sticker Pack Telegram Menjadi Sticker Whatsapp.

- Sticker Whatsapp Search
Penggunaan : Ketik [ !stickerwa patrick ] 
Info : Untuk Mencari Mencari Sticker Whatsapp.
───────────────

───────────────
*𝘾𝙈𝘿 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿* [ 📩 ]

- Youtube Download
Penggunaan : Ketik [ !youtubedl link ]
Info : Untuk Mengubah Video Dari Youtube Menjadi Vidio Atau Audio Ke Whatsapp.

- Play
Penggunaan : Ketik [ !play ]
Info : Memutar Music Dari Youtube

- Instagram Download
Penggunaan : Ketik [ !igdl ]
Info : Untuk Mengubah Video Dari Instagram Menjadi Vidio Ke Whatsapp.

- Instagram Story
Penggunaan : Ketik [ !igstory username]
Info : Mencari Pengguna Instagram.

- Tiktok Download
Penggunaan : Ketik [ !tiktokdl link ]
Info : Mengubah Vidio Tiktok Menjadi Vidio Atau Audio Ke Whatsapp.

- Mediafire Download
Penggunaan : Ketik [ !mediafire link]
Info : Mengubah Link Mediafire Menjadi File Ke Whatsapp.
Role : VIP Premium

- Facebook Download
Penggunaan : Ketik [ !facebook link ]
Info : Mengubah Link Facebook Menjadi Vidio Ke Whatsapp.

- Nhentai Download
Penggunaan : Ketik [ !nhdl code]
Info : Mengubah Code Nhentai Menjadi Pdf Ke Whatsapp
───────────────

───────────────
*𝘾𝙈𝘿 𝙎𝙀𝘼𝙍𝘾𝙃* [ 🔎 ]

- Playstore Search
Penggunaan : Ketik [ !playstore Nama_Aplikasinya ]
Info : Mencari Aplikasi Di Playstore.

- Music Youtube Search
Penggunaan : Ketik [ !music Nama_Musicnya]
Info : Mencari Music Dan Mengubahnya Menjadi Audio.
Role : VIP Premium

- Vidio Youtube Search
Penggunaan : Ketik [ !video judul ]
Info : Mencari Vidio Dan Mengubahnya Menjadi Vidio Whatsapp.
Role : VIP Premium

- Chara Anime Search
Penggunaan : Ketik [ !charasearch Nama_Waifumu ]
Info : Mencari Image Anime Wallpaper.

- Manga Search
Penggunaan : Ketik [ !mangasearch Judul_Manga ]
Info : Mencari Info Manga/Komik Jepang.

- Hero Mobile Legend Search
Penggunaan : Ketik [ !herodetail Nama_Hero ]
Info : Mencari Data Data Dari Hero Mobile Legends.

- Image Search
Penggunaan : Ketik [ !image judul ]
Info : Mencari Gambar Yang Kamu Cari Di Pixiv Dan Pinterest.

- Google Search
Penggunaan : Ketik [ !google query ]
Info : Mencari Data Data Yang Kamu Cari Di Google.

- Youtube Search
Penggunaan : Ketik [ !ytsearch judul ]
Info : Mencari Vidio Di Youtube.

- Pinterest Search
Penggunaan : Ketik [ !pinterest Judul_Image ]
Info : Mencari Image Di Pinterest.

- Anime Search
Penggunaan : Ketik [ !animesearch judul ]
Info : Mencari Anime Yang Kamu Cari.

- HandPhone Search
Penggunaan : Ketik [ !spekhp judul ]
Info : Mencari Hand Phone Yang Kamu Cari.
───────────────

───────────────
*𝑪𝑴𝑫 𝑺𝑬𝑺𝑺𝑰𝑶𝑵* [ 🏳️ ]

- Jadi Bot
Penggunaan : Ketik [ !jadibot ]
Info : Mengizinkan Kamu Untuk Menjadi Bot.
Role : VIP Premium

-
Penggunaan : Ketik [ !listjadibot ]
Info : List Yang Menjadi Bot.
Role : VIP Premium

- Stop Jadi Bot
Penggunaan : Ketik [ !stopjadibot ]
Info : Menghentikan Kamu Jadi Bot.
Role : VIP Premium
───────────────

───────────────
*𝘾𝙈𝘿 𝙂𝘼𝙈𝙀* [ 🎮 ]

- Tebak Gambar
Penggunaan : Ketik [ !tebakgambar ]
Info : Bermain Tebak Gambar.

- Tebak Character Anime
Penggunaan : Ketik [ !tebakcharanime ]
Info : Tebak Tebakan Character Anime.

- Tictactoe Game
Penggunaan : Ketik [ !tictactoe @tag_member]
Info : Bermain Tictactoe Game Bersama Member Grup.

- Slot Game
Penggunaan : Ketik [ !slot ]
Info : Bermain Keberuntungan.

- TOD Game
Penggunaan : Ketik [ !tod ]
Info : Bermain Truth Or Dare.

- Sambung Kata
Penggunaan : Ketik [ !sambungkata ]
Info : Bermain Sambung Kata Bersama Bot.

- Pertanyaan Game
Penggunaan : Ketik [ !apakah, !kapankah, !bagaimanakah, !rate, !ganteng, !cantik, !jadian, !pacaran]
Info : Memberi Pertanyaan Kepada Bot.

- Dungeon Game
Penggunaan : Ketik [ !dungeon ]
Info : Bermain Dungeon Yang Seru Sekali.

- Tebak Bendera
Penggunaan : Ketik [ !tebakbendera ]
Info : Tebak Tebakan Bendera Negara Asing.

- Siapa Aku
Penggunaan : Ketik [ !siapaaku ]
Info : Tebak Tebakan Benda Dan Makhluk Yang Ada Di Dunia.

- Matematika Kuis
Penggunaan : Ketik [ !mathkuis hard]
Info : Tebak Tebakan Matematika.

- Tebak Jenaka
Penggunaan : Ketik [ !kuis ]
Info : Game Lucu Lucuan.

- Berburu Game
Penggunaan : Ketik [ !berburu ]
Info : Bermain Perburuan Mendapatkan Hewan.

- Bercocok Tanam Game
Penggunaan : Ketik [ !bercocoktanam ]
Info : Bermain Membikin Anak
───────────────

───────────────
*𝘾𝙈𝘿 𝙂𝘼𝘽𝙐𝙏* [ 🏝️ ]

- Profil Couple Anime
Penggunaan : Ketik [ !ppcouple ]
info : Memberi Image Couple Anime

- Asupan
Penggunaan : Ketik [ !asupan ]
Info : Memberi Vidio Cewe Cantik.

- Meme
Penggunaan : Ketik [ !meme ]
Info : Memberi Meme Yang Lucu Dari Facebook.

- Dark Joke
Penggunaan : Ketik [ !darkjoke ]
Info : Gambar Gambar Dark Joke Yang Bisa Membuat Kamu Ketawa.

- Afk
Penggunaan : Ketik [ !afk Alasan_Nya ]
Info : Afk Dengan Memberi Kamu Penjagaan Agar Tidak Keganggu.

- Quotes Anime
Penggunaan : Ketik [ !quotesanime ]
Info : Memberikan Kata Kata Nasehat Dari Kartun Jepang.

- Loli Video
Penggunaan : Ketik [ !lolivid ]
Info : Memberi Video Loli.

- Story Anime
Penggunaan : Ketik [ !storyanime ]
Info : Memberi Vidio Vidio Story Anime Dari Instagram.

- Dadu
Penggunaan : Ketik [ !dadu ]
Info : Mengacak Sticker Dadu.
───────────────

───────────────
*𝘾𝙈𝘿 𝙃𝙀𝙉𝙏𝘼𝙄 𝙄𝙈𝘼𝙂𝙀* [ 💦 ]

- Hentai Image
Penggunaan : Ketik [ !hentai ]
Info : Memberi Image Hentai.

- Cum Image
Penggunaan : Ketik [ !cum ]
Info : Memberi Image Cum.

- Trap Image
Penggunaan : Ketik [ !trap ]
Info : Memberi Image Trap.

- Pussy Image
Penggunaan : Ketik [ !pussy ]
Info : Memberi Image Pussy.

- Wallpaper Hentai Image
Penggunaan : Ketik [ !wallpaperhentai ]
Info : Memberi Image Wallpaper +18.

- Yuri Image
Penggunaan : Ketik [ !yuri ]
Info : Memberi Image Yuri.

- Blowjob Image
Penggunaan : Ketik [ !blowjob ]
Info : Memberi Image Blowjob.

- Ecchi Image
Penggunaan : Ketik [ !ecchi ]
Info : Memberi Image Ecchi.
───────────────

───────────────
*𝘾𝙈𝘿 𝘼𝙐𝘿𝙄𝙊* [ 🎶 ]

- Night Core Music
Penggunaan : Ketik [ !nc ]
Info : Mengubah Music Jadi Night Core.

- Tempo Music
Penggunaan : Ketik [ !tempo angkanya ]
Info : Mengubah Kecepatan Music.

- Loli Music
Penggunaan : Ketik [ !imut ]
Info : Mengubah Music Jadi Suara Loli

- Reverse Music
Penggunaan : Ketik [ !balik ]
Info : Membalik Music.

- To Audio
Penggunaan : Ketik [ !tomp3 ]
Info : Mengubah Vidio Menjadi Audio.
───────────────

───────────────
*𝘾𝙈𝘿 𝙑𝙄𝘿𝙀𝙊* [ 🎥 ]

- Reverse Video
Penggunaan : Ketik [ !reversevideo ]
Info : Membalik Video
───────────────

───────────────
*𝘾𝙈𝘿 𝙄𝙈𝘼𝙂𝙀* [ 🖼️ ]


- Shinobu Image
Penggunaan : Ketik [ !shinobu ]
Info : Memberi Image Shinobu.

- Wallpaper Anime HD
Penggunaan : Ketik [ !wallpapernime ]
Info : Memberi Image Anime Wallpaper HD.

- Sagiri Image
Penggunaan : Ketik [ !sagiri ]
Info : Memberi Image Sagiri.

- Megumin Image
Penggunaan : Ketik [ !megumin ]
Info : Memberi Image Megumin.

- Shouta Image
Penggunaan : Ketik [ !shota ]
Info : Memberi Image Shota.

- Elf Image
Penggunaan : Ketik [ !elf ]
Info : Memberi Image Elf.

- Waifu Image
Penggunaan : Ketik [ !waifu ]
Info : Memberi Image Waifu.

- Loli
Penggunaan : Ketik [ !loli ]
Info : Memberi Image Loli.

- Milf Image
Penggunaan : Ketik [ !milf ]
Info : Memberi Image Milf.

- Husbu Image
Penggunaan : Ketik [ !husbu ]
Info : Memberi Image Husbu.

- Cosplay Image
Penggunaan : Ketik [ !cosplay ]
Info : Memberi Image Cosplayer.

- Harta Tahta Costum 
Penggunaan : Ketik [ !harcos query]
Info : Mengcustom Harta Tahta Menjadi Teks.

- Harta
Penggunaan : Ketik [ !harta query]
Info : Memberi Image Teks Harta Tahta.
───────────────

───────────────
*𝘾𝙈𝘿 𝘼𝙉𝙏𝙄* [ ⚠️ ]

- Antilink Grup Whatsapp
Penggunaan : Ketik [ !antilink 1/0 ]
Info : Mengeluarkan Member Yang Share Link Grup.

- Antilink Youtube 
Penggunaan : Ketik [ !antiyoutube 1/0 ]
Info : Mengeluarkan Member Yang Share Link Youtube.

- Anti Wa.Me
Penggunaan : Ketik [ !antiwa 1/0 ]
Info : Mengeluarkan Member Yang Send wa.me Di Grup.

- Anti Virtex
Penggunaan : Ketik [ !antivirtex 1/0 ]
Info : Mengeluarkan Member Yang Send Virtex Di Grup.
───────────────

───────────────
*𝘾𝙈𝘿 𝙄𝙉𝙁𝙊* [ 👁️‍🗨️ ]

- Speed Bot
Penggunaan : Ketik [ !speed ]
Info : Speed Bot Running.

- Runtime Bot
Penggunaan : Ketik [ !runtime ]
Info : Waktu Berjalannya Bot.

- Owner Bot
Penggunaan : Ketik [ !owner ]
Info : Owner Bot.
───────────────

───────────────
*𝘾𝙈𝘿 𝙂𝙍𝙊𝙐𝙋* [ 📢 ]

- Notif Grup
Penggunaan : Ketik [ !hidetag query ]
Info : Meng tag Semua Member Tanpa Tag Nomer.

- Kick Member
Penggunaan : Ketik [ !hetshot ]
Info : Meng Kick Member Dari Grup.
Role : Khusus Admin

- Promote Member
Penggunaan : Ketik [ !promote ]
Info : Memberi Member Kekuasaan Admin Di Grup.
Role : Khusus Admin

- Demote Admin
Penggunaan : Ketik [ !demote ]
Info : Mendemote Admin Yang Jarang On.
Role : Khusus Admin

- Promote All
Penggunaan : Ketik [ !promoteall ]
Info : Menjadikan Semua Member Menjadi Admin.
Role : Khusus Admin

- Voting
Penggunaan : Ketik [ !votting @tag_member ]
Info : Melakukan Musyawarah.\nKetik [ vote ] Untuk Setuju\n Ketik [ devote ] Untuk Tidak Setuju

- To Tag
Penggunaan : Ketik [ !totag Reply_Image_Audio_Atau_Video ]
Info : Meng Tag Member Melalui Audio, Image Dan Video Di Grup.
───────────────

───────────────
*𝘾𝙈𝘿 𝙎𝙄𝙈𝙋𝙇𝙀* [ 🚩 ]

- !listanime
- !listgame
- !listnsfw
───────────────

*𝗘𝗡𝗗☹︎*

*Note* : Tidak Semua Fitur Bot Work, Sebagian Eror Karna Terbatasan Scraper.

*Info* : Bot Eror? Fiturnya Gk Bisa? Chat Owner.

Sponsor By @${markzuberg.split('@')[0]}

Created By @${ow.split('@')[0]}
`
  mhan1 = await dha.prepareMessage(from, gambarnya, image, { thumbnail: Buffer.alloc(0)})
gbutsan = [
  {buttonId: `${prefix}👍`, buttonText: {displayText: '👍'}, type: 1},
  {buttonId:`${prefix}👎`,buttonText:{displayText:'👎'},type:1}
]
 gbuttonan = {
imageMessage: mhan1.message.imageMessage,
    contentText: `${menunya}`,
    footerText: `0814622392081`,
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        caption: `${menunya}`,
        contextInfo: {
            mentionedJid: [menunya, ow, num, markzuberg]}, })
   break
   case 'sambungkata':
                    if (sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu")
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} tahu`)
                    jawaban = sambungkata[sender.split('@')[0]]
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&text=${ini_txt}`)
                    get_result = get_result.result
                    await dha.sendMessage(from, `•-- *Sambung Kata* --•\n Bot: ${get_result}\n\nSilakan Menjawab Dari Huruf Belakangnya`, MessageType.text, { quoted: mek }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
                        fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    })
                    break
                case 'cancelsambungkata':
                    if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete sambungkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    reply("Success mengcancel sambung kata sebelumnya")
                    break
   case 'totalall':
   garis = `───────────────`
				if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
				teksnya = `${garis}\n*TOTAL REGIST*\n[ 🌹 ]total : ${registercuy.length}\n${garis}\n${garis}\n*TOTAL RATTING*\n[ 🌹 ]total : ${regisbintang.length}\n${garis}\n${garis}\n*TOTAL SUKA*\n[ 🌹 ]total : ${LK.length}\n${garis}\n${garis}\n*TOTAL TIDAK SUKA*\n[ 🌹 ]total : ${DSLK.length}\n${garis}\n${garis}\n*TOTAL NILAI*\n[ 🌹 ]total : ${userlike.length}\n${garis}`
				dha.sendMessage(from, miku, image, {quoted: floc, caption: teksnya})
				break
				case 'quotesanime':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    jawabya = `*QUOTES ANIME*`
                    quotesnya = `${quote}\n~*${char}*\n\nSource : *${anime}*`
buttons = [{buttonId:`${prefix}quotesanime`,buttonText:{displayText:'Try Again'},type:1},{buttonId:`${prefix}menu`,buttonText:{displayText:'HOME'},type:1}]
               buttonsMessage = { contentText: `${jawabya}`, footerText: `${quotesnya}`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: floc})
               dha.relayWAMessage(prep)
                    break
                    case 'bercocoktanam':
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    hj = `*MEMBUAT ANAK*`
                    buttons = [{buttonId:`${prefix}sextime`,buttonText:{displayText:'START'},type:1}]
               buttonsMessage = { contentText: `${hj}`, footerText: `Start To Sex`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
               gameAdd(sender, glimit)
                    break
                    case 'sextime':
                    hj = `*BERCOCOK TANAM*`
                    buttons = [{buttonId:`${prefix}dogystyle`,buttonText:{displayText:'DOGY'},type:1}, {buttonId:`${prefix}69style`,buttonText:{displayText:'69'},type:1}, {buttonId:`${prefix}angsastyle`,buttonText:{displayText:'ANGSA'},type:1}]
               buttonsMessage = { contentText: `${hj}`, footerText: `Saat Ini Kamu Dan Istrimu Sedang Dikasur\nAyo Pilih Mode Sex Nya`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
                    break
                    case 'spotify':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${query}`)
                    await dha.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title} - Riu~.mp3`, quoted: mek })
                    break
                    case 'spotifysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.vhtear.com/spotify?query=${query}&apikey=rmzbotid`)
                    get_result = get_result.result.playlist
                    let list = []
                        let startnum = 1
                    for (var x of get_result) {
                                      let yy = { title: 'Data ke-'+ startnum++,
                        rows: [
                           {
                            title: `${x.title}`,
                            description: `\n\n*Viewers: ${x.popularity}*\n*Duration: ${x.duration}*\n*Url: ${x.url}*\nLink : https://open.spotify.com/track/${x.id}`,
                            rowId: `${prefix}buttons1 ${x.url}`
                          }
                        ]
                        }
                        list.push(yy)
                        }
                    listmsg(from, `Spotify Search`, `Pilih disini, Hasil Pencarian "${q}", Hanya untuk Premium User`, list)
                    break
                    case 'otaku': case 'otakudesu':{
              	if (!isPremium && !isOwner) return reply("Khusus Premium!")
                if (args.length < 2) return reply(`Kirim perintah *${command}* _query_`)
                reply(mess.wait)
                query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=${query}`)
                    get_result = get_result.result   
                        let list = []
                        let startnum = 1
                        for (var x of get_result ) {
                        let yy = { title: 'Anime ke-'+ startnum++,
                        rows: [
                           {
                            title: `${x.title}`,
                            description: `*Genre: ${x.genres}*\n*Studio: ${x.status}*\n*Ratting: ${x.rating}`,
                            rowId: `${prefix}yoaimo ${x.title}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    listmsg(from, `Otakudesu Search`, `Pilih disini, Hasil Pencarian "${q}", Hanya untuk Premium User`, list)
                    }
                break
                case 'yoaimo':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            dha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
                    case 'dogystyle':
                    E1 = ['tidak','iya']
              E2 = E1[Math.floor(Math.random() * E1.length)]
                    hj = `*DOGY*`
                    buttons = [{buttonId:`${prefix}${E2}`,buttonText:{displayText:`${E2}`},type:1}]
               buttonsMessage = { contentText: `${hj}`, footerText: `Hasil Kamu Adalah ( *${E2}* )\nPencet Dibawah Ini`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
                    break
                    case '69style':
                    E1 = ['TIDAK','IYA']
              E2 = E1[Math.floor(Math.random() * E1.length)]
                    hj = `*69*`
                    buttons = [{buttonId:`${prefix}${E2}`,buttonText:{displayText:`${E2}`},type:1}]
               buttonsMessage = { contentText: `${hj}`, footerText: `Hasil Kamu Adalah ( *${E2}* )\nPencet Dibawah Ini`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
                    break
                    case 'angsastyle':
                    E1 = ['TIDAK','IYA']
              E2 = E1[Math.floor(Math.random() * E1.length)]
                    hj = `*ANGSA*`
                    buttons = [{buttonId:`${prefix}${E2}`,buttonText:{displayText:`${E2}`},type:1}]
               buttonsMessage = { contentText: `${hj}`, footerText: `Hasil Kamu Adalah ( *${E2}* )\nPencet Dibawah Ini`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
                    break
                    case 'namaanaknya':
                    E1 = ['AGUS','RISKI','RIO','YUDA','MUHAMMAD','RENDY','OTSUKA','KASURMAN','SHIVA','SHIWA']
              E2 = E1[Math.floor(Math.random() * E1.length)]
                    hj = `*${E2}*`
                    buttons = [{buttonId:`SELAMAT`,buttonText:{displayText:`SELAMAT🌠`},type:1}]
               buttonsMessage = { contentText: `${hj}`, footerText: `Nama Anakmu Adalah ( *${E2}* )\n*Selamat* 👪`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
                    break
                    case 'iya':
                    hj = `*SELAMAT🌠*`
                    var htgm2 = randomNomor(50000)
                   addBalance(sender, htgm2, balance)
                    buttons = [{buttonId:`${prefix}namaanaknya`,buttonText:{displayText:'NAMA'},type:1}]
               buttonsMessage = { contentText: `${hj}`, footerText: `Selamat Kamu Mendapatkan Anak\nPencet Dibawah Ini Untuk Melihat Nama Anak Anda`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
                    break
                    case 'reset':{
                if (!isOwner) return reply(mess.OnlyOwner)
                    var reset = []
                     _claim = reset
                     console.log('Hang tight, it\'s time to reset')
                     fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                     reply(`Sukses Owner`)
             }
                break
                    case 'claim':
                case 'klaim':
                    if (isClaimOn) return reply("Claim Is Alredy\nKembali Besok Untuk Mengklaim")
                    let hadippp = randomNomor(50000)
                    addBalance(sender, hadippp, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    reply(`Sukses Mendapatkan Balance Sebanyak ${hadippp}`)
                    break
                   addBalance(sender, hadippp, balance)
                    case 'tidak':
                    hj = `*KASIAN🗿*`
                    total = (350)
                    kurangBalance(sender, total, balance)
                    buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText:'HOME'},type:1}]
               buttonsMessage = { contentText: `${hj}`, footerText: `*Sayang Sekali Sperma Mu Meleset Dari Pussy Istrimu*`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
                    break
                    E2 = E1[Math.floor(Math.random() * E1.length)]
                    case 'mancing':
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    cing = [`👾`,`🐟`,`🐠`,`🦀`,`🐙`,`🦐`,`🦑`,`🐠`,`🐟`,`🐡`,`🦀`,`🦀`,`🦀`,`🐬`,`🐠`,`🐠`,`🐠`,`🐳`]
				man = cing[Math.floor(Math.random() * cing.length)]
                spasi = `─────────────────`
                yoks = `\n${spasi}\n🎣 : ${man}\nNote : Silakan Jual KePedagang Ikan\n${spasi}`
                buttons = [{buttonId:`${prefix}jualanikannya`,buttonText:{displayText:'JUAL💸'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`MancingGan.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`${yoks}`, imageMessage: imageMsg,
              contentText:`*MANCING*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              gameAdd(sender, glimit)
break
case 'sticker2':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await dha.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebp?apikey=PunyaIkyAds`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            dha.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                break
                case 'jualanikannya':
                    sil = [`50k`,`160k`,`600k`,`10k`,`10k`,`10k`,`30k`,`20k`,`20k`,`40k`,`12k`,`40k`,`15k`,`15k`,`10k`,`40k`,`50k`,`10k`]
				ha = sil[Math.floor(Math.random() * sil.length)]
                spasi = `─────────────────`
                yoks = `\n${spasi}\n💲U A N G : ${ha}\nMantap Pak ${pushname} Terimakasih Atas Ikannya\n${spasi}`
                buttons = [{buttonId:`${prefix}mancing`,buttonText:{displayText:'MANCING🎣'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`MancingGan.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`${yoks}`, imageMessage: imageMsg,
              contentText:`*JUALAN*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
                break
				case 'berburu':
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				buru.push(from)
                fs.writeFileSync('./database/buru.json', JSON.stringify(buru))
				var angka1 = Math.ceil(Math.random() * 5)
                var angka2 = Math.ceil(Math.random() * 5)
                var angka3 = Math.ceil(Math.random() * 5)
                var angka4 = Math.ceil(Math.random() * 5)
                spasi = `─────────────────`
                yoks = `*BERBURU*\n\n${spasi}\n🐄 : ${angka1}\n${spasi}\n🐖 : ${angka2}\n${spasi}\n🐓 : ${angka3}\n${spasi}\n🐑 : ${angka4}\n${spasi}`
                sendButLocation(from, `${yoks}`, `BERBURU`, {jpegThumbnail: maid}, [{buttonId:`${prefix}berburu`,buttonText:{displayText:'⚔️BERBURU⚔️'},type:1}, {buttonId:`${prefix}endburu`,buttonText:{displayText:'ISTIRAHAT☕'},type:1}, {buttonId:`${prefix}nilaiburu`,buttonText:{displayText:'NILAI'},type:1}])
             gameAdd(sender, glimit)
              break
                case 'endburu':
                var ini = buru.indexOf(from)
                buru.splice(from)
                fs.writeFileSync('./database/buru.json', JSON.stringify(buru))
                end = `Permainan Telah Berakhir`
                sendButLocation(from, `${end}`, `END`, {jpegThumbnail: miku}, [{buttonId:`${prefix}berburu`,buttonText:{displayText:'⚔️BERBURU⚔️'},type:1}])
                break
                case 'nilaiburu':
                var nilai = Math.ceil(Math.random() * 10)
                nilainya = `*NILAI KAMU*\n nilai : ${nilai}`
                sendButLocation(from, `${nilainya}`, `END`, {jpegThumbnail: miku}, [{buttonId:`${prefix}help`,buttonText:{displayText:'HOME'},type:1}])
                break
               //------------------< Anti Link Menu >-------------------
               case 'antilink':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mengaktifkan antilink digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mematikan antilink digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'autotutup':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}autotutup 1`)
					if (Number(args[0]) === 1) {
						if (isAutoClose) return reply('Sudah Aktif Kak')
						autotutup.push(from)
						fs.writeFileSync('./database/tutup.json', JSON.stringify(autotutup))
						reply('_Success mengaktifkan auto close digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAutoClose) return reply('Sudah Mati Kak')
						var ini = autotutup.indexOf(from)
						autotutup.splice(ini, 1)
						fs.writeFileSync('./database/tutup.json', JSON.stringify(autoclose))
						reply('_Success mematikan auto close digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'autobuka':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}autobuka 1`)
					if (Number(args[0]) === 1) {
						if (isAutoOpen) return reply('Sudah Aktif Kak')
						autobuka.push(from)
						fs.writeFileSync('./database/buka.json', JSON.stringify(autobuka))
						reply('_Success mengaktifkan auto open digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAutoOpen) return reply('Sudah Mati Kak')
						var ini = autobuka.indexOf(from)
						autobuka.splice(ini, 1)
						fs.writeFileSync('./database/buka.json', JSON.stringify(autobuka))
						reply('_Success mematikan auto open digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'kuis':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (game.isKuis(from, kuis)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/jenaka?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
                let anih = anu.result.answer.toLowerCase()
                game.addkuis(from, anih, gamewaktu, kuis)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                textImg(monospace(`${anu.result.question}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`))
            }
                break
                case 'dungeon':
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
youke = fs.readFileSync('./lib/odc.jpeg')
buttons = [{buttonId:`${prefix}start`,buttonText:{displayText:'START'},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/start.png`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`Menyambungkan Server...`, imageMessage: imageMsg,
contentText:`*DUNGEON ISEKAI*`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
gameAdd(sender, glimit)
break
case 'start':
E1 = ['⭐','⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
				await dha.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: mek })
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}yoeee`,buttonText:{displayText:'SERANG ⚔'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Tentacle.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Monster Tipe Tentacle, Konon Pada Tahun 1567 Di Ibukota Jaya Jaya, Seorang Petualang Bernama ${pushname} Berjuang Melawan Keganasannya Monster Tentacle`, imageMessage: imageMsg,
              contentText:`*RATE* ${E2}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case '2':
              E1 = ['⭐','⭐⭐','⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
				await dha.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: mek })
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}serang`,buttonText:{displayText:'SERANG ⚔'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Sihir.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Monster Bertipe Sihir Sangatlah Merepotkan, Karna Jumlah Sihir Yang Digunakan Mencapai 50000 MP, Apakah Petualang Bernama ${pushname} Bisa Mengalahkannya? `, imageMessage: imageMsg,
              contentText:`*RATE* ${E2}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case '4':
              E1 = ['⭐⭐⭐⭐⭐⭐','⭐⭐⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
				await dha.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: mek })
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}lantai4`,buttonText:{displayText:'SERANG ⚔'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Ruri.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Monster Bernama ( RURI ) Salah Satu Elf Yang Membuat Kota Jaya Jaya Hancur, Kamu Masih Ada Dendam Sama Dia Kan Petualang ${pushname}? CEPAT!! Habisi Dia Bersama Teman Mu!.`, imageMessage: imageMsg,
              contentText:`*RATE* ${E2}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'lantai4':
				await dha.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: mek })
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}5`,buttonText:{displayText:'Lantai 5'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Win.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Dengan Kegigihan Dan Kerjasama Dengan Teman, Kamu Berhasil Mengalahkan Elf Ruri.`, imageMessage: imageMsg,
              contentText:`*MENANG*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case '5':
              E1 = ['⭐⭐⭐⭐⭐⭐⭐','⭐⭐⭐⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
				await dha.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: mek })
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}lantai5kalah`,buttonText:{displayText:'SERANG ⚔'},type:1}, {buttonId:`${prefix}ambilpedang`,buttonText:{displayText:'AMBIL'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Slime.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Slime Yang Bisa Melahap 1 Kota Dan Energi Sihir Yang Mencapai 100000 MP, Hati Hati Kalo Perlu Ambil Pedang Mu Dulu!`, imageMessage: imageMsg,
              contentText:`*RATE* ${E2}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'lantai5kalah':
				await dha.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: mek })
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}lose`,buttonText:{displayText:'LOSE'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Kalah.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Sayangnya Kamu Terlalu Gegabah, Kamu Dan Teman Mu Mati Kena Sihir Yang Bernama Black Magic, Salah Satu Sihir Yang Digunakan Raja Iblis Bernama Diablo.`, imageMessage: imageMsg,
              contentText:`*LOSE*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'attak5':
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}6`,buttonText:{displayText:'LANTAI 6'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Slimekalah.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Kamu Menang Lanjut Ke Lantai 6 Bersama Teman Mu!`, imageMessage: imageMsg,
              contentText:`*WIN*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'ambilpedang':
              buttons = [{buttonId:`${prefix}lantai5penentuan`,buttonText:{displayText:'SERANG'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Excalibur.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Dengan Ajaibnya Kamu Menemukan Pedang Disampingmu Yang Bernama Excalibur!!!, Hati2 Petualang!`, imageMessage: imageMsg,
              contentText:`*EXCALIBUR*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'lantai5penentuan':
              vs = ["attak5","attak5","lose","lose"]
mk = vs[Math.floor(Math.random() * vs.length)]
await reply(`Memulai Pertempuran...`)
setTimeout( () => {
			  creator = "6285731261728@s.whatsapp.net"
teks =`*PERTEMPURAN SELESAI*`
sendButLocation(from, `${teks}`, `Hasil Pertempuran Kamu Adalah ( *${mk}* ), Pencet Button Dibawah Ini`, {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}${mk}`,buttonText:{displayText:`${mk}`},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
			  }, 15000)
break
              case 'serang':
              buttons = [{buttonId:`${prefix}buy`,buttonText:{displayText:'BUY'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`HARGA 1 PERALATAN DI BANDROL DENGAN HARGA 35 Keping Emas`, imageMessage: imageMsg,
              contentText:`*PERALATAN PERANG*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'buy':
              vs = ["win","lose","lose","lose"]
mk = vs[Math.floor(Math.random() * vs.length)]
await reply(`Memulai Pertempuran...`)
setTimeout( () => {
			  creator = "6285731261728@s.whatsapp.net"
teks =`*PERTEMPURAN SELESAI*`
sendButLocation(from, `${teks}`, `Hasil Pertempuran Kamu Adalah ( *${mk}* ) Silahkan Kamu Mengabil Keping Emas  Yang Sudah Di Sediakan\nApakah Petualang ${pushname} Akan Ada Keajaiban?`, {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}${mk}`,buttonText:{displayText:`${mk}`},type:1}, {buttonId:`${prefix}pertolongan`,buttonText:{displayText:`BANTUAN`},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
			  }, 15000)
break
case 'pertolongan':
              vs = ["ada","ada","tidak"]
mk = vs[Math.floor(Math.random() * vs.length)]
await reply(`Memulai Pertolongan...`)
setTimeout( () => {
			  creator = "6285731261728@s.whatsapp.net"
teks =`*PERTOLONGAN SELESAI*`
sendButLocation(from, `${teks}`, `Hasil Pertolongan Kamu Adalah ( *${mk}* ) Silahkan Pencet Button Dibawah Ini`, {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}${mk}`,buttonText:{displayText:`${mk}`},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
			  }, 15000)
break
case 'ada':
E2 = `🌠`
E1 = ['kazuma','astolfo','megumin']
BW = E1[Math.floor(Math.random() * E1.length)]
buttons = [{buttonId:`${prefix}${BW}`,buttonText:{displayText:`${BW}`},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Nakama.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Selamat Kamu Menemukan Petualang Lainnya??\nYang Bernama ${BW}`, imageMessage: imageMsg,
              contentText:`*SELAMAT* ${E2}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'kazuma':
buttons = [{buttonId:`${prefix}3`,buttonText:{displayText:`LANTAI 3`},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Kazuma.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Kazuma : Hai👋\nApakah Kamu Baik Baik Saja?\n${pushname} : Iya Aku Baik2 Saja\nKazuma : Syukurlah, Oh Iya Apakah Kamu Petualang Juga?\n${pushname} : Iya Nih\nKazuma : Skyukurlah, Ayo Kita Menjelajahi Dungeon Ini Bersama!\n${pushname} : O..Okey, Ayo Kita Selesaikan Dungeon Ini Bersama!\nKazuma : IKUZOO!!!!`, imageMessage: imageMsg,
              contentText:`*KAZUMA*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'astolfo':
buttons = [{buttonId:`${prefix}3`,buttonText:{displayText:`LANTAI 3`},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Astolfo.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Astolfo : Hai👋\nApakah Kamu Baik Baik Saja?\n${pushname} : Iya Aku Baik2 Saja\nAstolfo : Syukurlah, Oh Iya Nama Kamu Siapa?\n${pushname} : Na..Nama Aku ${pushname}\nAstolfo : Oalah, Salam Kenal Yah! Aku Astolfo\n${pushname} : O..Okeh, Salam Kenal\nAstolfo : Oh Iya, Apakah Kamu Menjelajahi Dungeon Ini Juga?\n${pushname} : Ah Iya, Kenapa Emangnya?\nAstolfo : Wah Beruntung Sekali, Apakah Kamu Mau Menjelajahi Dungeon Bersamaku?\n${pushname} : A... Baiklah\nAstolfo : YOSHH, AYO KITA SELESAIKAN DUNGEON INI!!\n${pushname} : Haik!!`, imageMessage: imageMsg,
              contentText:`*ASTOLFO*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'megumin':
buttons = [{buttonId:`${prefix}3`,buttonText:{displayText:`LANTAI 3`},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Megumin.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Megumin : Hai👋\nApakah Kamu Baik Baik Saja?\n${pushname} : Iya Aku Baik2 Saja\nMegumin : Syukurlah, Oh Iya Nama Kamu Siapa?\n${pushname} : Na..Nama Aku ${pushname}\nMegumin : Ohh, Salam Kenal Yah! Nama Ku Adalah Megumin Penyihir Iblis Merah Yang Sangat Kuat Bahkan Raja Iblis Pun Tunduk Kepadaku😎\n${pushname} : O..Okeh, Salam Kenal\nMegumin : Oh Iya, Apakah Kamu Mau Mencari Raja Iblis Juga?\n${pushname} : E..Engga, Aku Disini Ingin Menjelajahi Dunge--\nMegumin : Yosh, Ayo Kita Mencari Raja Iblis Bersama!!\n${pushname} : ( Ehhh Perasaan Aku Tidak Mau Mencari Raja Iblis Deh ), Yosh Ayo!\nMegumin : IKUZOO!!!\n${pushname} : Haik!!`, imageMessage: imageMsg,
              contentText:`*MEGUMIN*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'tidak':
              buttons = [{buttonId:`${prefix}lose`,buttonText:{displayText:`LOSE`},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Kalah.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Sayangnya Kamu Tidak Menemukan Petualang Lain🗿\nKAMU MATI!!!`, imageMessage: imageMsg,
              contentText:`*SAYANGNYA*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case '3':
              E1 = ['⭐⭐⭐⭐⭐','⭐⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
				await dha.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: mek })
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}yuaaaaa`,buttonText:{displayText:'SERANG ⚔'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Moona.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Saat Ini Kamu Mendapatkan Teman, Kalah kan Monster Bernama ( Moon )\n Akankah Mereka Menang? `, imageMessage: imageMsg,
              contentText:`*RATE* ${E2}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'yuaaaaa':
              vs = ["attak3","attak3","attak3","lose"]
mk = vs[Math.floor(Math.random() * vs.length)]
await reply(`Memulai Pertempuran...`)
setTimeout( () => {
			  creator = "6285731261728@s.whatsapp.net"
teks =`*PERTEMPURAN SELESAI*`
sendButLocation(from, `${teks}`, `Hasil Pertempuran Kamu Adalah ( *${mk}* ) Silahkan Pencet Button Dibawah Ini`, {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}${mk}`,buttonText:{displayText:`${mk}`},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
			  }, 15000)
break
case 'yoeee':
              vs = ["attak2","attak2","attak2","lose"]
mk = vs[Math.floor(Math.random() * vs.length)]
await reply(`Memulai Pertempuran...`)
setTimeout( () => {
			  creator = "6285731261728@s.whatsapp.net"
teks =`*PERTEMPURAN SELESAI*`
sendButLocation(from, `${teks}`, `Hasil Pertempuran Kamu Adalah ( *${mk}* ) Silahkan Pencet Button Dibawah Ini`, {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}${mk}`,buttonText:{displayText:`${mk}`},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
			  }, 15000)
break
             case 'attak3':
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}4`,buttonText:{displayText:'LANTAI 4'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Win.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Kamu Menang Lanjut Ke Lantai 4 Bersama Teman Mu!`, imageMessage: imageMsg,
              contentText:`*WIN*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
              case 'attak2':
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`${prefix}2`,buttonText:{displayText:'LANTAI 2'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/Win.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Kamu Menang Lanjut Ke Lantai 2`, imageMessage: imageMsg,
              contentText:`*WIN*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break
case 'lose':
vs = ["♌","♋","♊"]
jobs = vs[Math.floor(Math.random() * vs.length)]
var emas = Math.ceil(Math.random() * 100)
reply(`Karna Kamu Kalah Maka Emas Yang Diberikan Hanya  ${emas} Keping Emas, Dan Job Kamu Turun Menjadi ${jobs}`)
reply(`*KETERANGAN*\n\n♌ : Pemula\n♋ : Knight\n♊ : Babu`)
break
case 'win':
vs = ["⚛️","☪️","🔯"]
jobs = vs[Math.floor(Math.random() * vs.length)]
var emas = Math.ceil(Math.random() * 100)
teks = `*WIN*`
sendButLocation(from, `${teks}`, `Hasil Pertempuran Kamu Adalah ( *${mk}* ) Silahkan Kamu Naik Ke Lantai Selanjutnya`, {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}2`,buttonText:{displayText:`LANTAI 2`},type:1}])
break
					case 'mathkuis':{
if (!isGroup) return reply(mess.only.group)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
let buh = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/kuis/math?mode=${q}&apikey=404Api`)
buh_result = buh.result
const petunjuknya = buh_result.jawaban.replace(/[0|1|2|3|4|5|6|7|8|9]/gi, '_')
 dha.sendMessage(from, `*Soal :* ${buh.result.soal} \nWaktu : ${gamewaktu}s\nPetunjuk : ${petunjuknya}`, MessageType.text, { quoted: mek, thumbnail: miku })
let anih = buh.result.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
	}
break

					case 'saus':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					sour = `Nih Scnya\n https://www.mediafire.com/download/eajki98w6tbmep3`
					fakegroup(sour)
					break
                    case 'truth':
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dha.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek, thumbnail: miku })
					break
					case 'bisakah':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (isRegister) return ("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					query = args.join(" ")
                 
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					caption = `pertanyaan: ${query}\njawaban: ${keh}`
					reply(caption)
					break
					case 'listnsfw':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if(!isGroup)return reply(mess.only.group)
po1 = dha.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*LIST MENU NSFW*",
"description": `\nList Menu Nya Kak!`,
"buttonText": "Click Here!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "NSFW LIST",
      "rows" :[
        {
          "title": "ecchi",
          "rowId": `${prefix}ecchi`
        },
        { 
          "title": "hentai",
          "rowId": `${prefix}hentai`
        },
{ 
          "title": "cum",
          "rowId": `${prefix}cum`
        },
{ 
          "title": "yuri",
          "rowId": `${prefix}yuri`
        },
{ 
          "title": "wallpaper",
          "rowId": `${prefix}wallpaper`
        },
{ 
          "title": "blowjob",
          "rowId": `${prefix}blowjob`
        },
{ 
          "title": "pussy",
          "rowId": `${prefix}pussy`
        }]
  }
  ]
}}, {quoted : floc}) 
dha.relayWAMessage(po1, {waitForAck: true})
break
case 'listanime':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if(!isGroup)return reply(mess.only.group)
po1 = dha.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*LIST MENU ANIME*",
"description": `\nList Anime Nya Kak!`,
"buttonText": "Click Here!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "ANIME LIST",
      "rows" :[
        {
          "title": "korea\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan1`
        },
        { 
          "title": "Jepang\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan2`
        },
{ 
          "title": "Kazuma\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan3`
        },
{ 
          "title": "L Lawliet\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan4`
        },
{ 
          "title": "Light Yagami\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan5`
        },
{ 
          "title": "Aqua\n\n~RiuNiiSan",
          "rowId": `${prefix}pilihan6`
        }]
  }
  ]
}}, {quoted : floc}) 
dha.relayWAMessage(po1, {waitForAck: true})
break
case 'listgame':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if(!isGroup)return reply(mess.only.group)
po1 = dha.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*LIST GAME*",
"description": `\nList Game Nya Kak!`,
"buttonText": "Click Here!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "👻GAME LIST👻",
      "rows" :[
        {
          "title": "TICTACTOE",
          "rowId": `${prefix}ttc`
        },
        {
          "title": "TEBAK CHARA ANIME",
          "rowId": `${prefix}tebakcharanime`
        },
        {
          "title": "DUNGEON",
          "rowId": `${prefix}dungeon`
        },
        {
          "title": "MEMBUAT ANAK",
          "rowId": `${prefix}bercocoktanam`
        },
        {
          "title": "BERBURU",
          "rowId": `${prefix}berburu`
        },
        {
          "title": "SLOT",
          "rowId": `${prefix}slot`
        },
        {
          "title": "SAMBUNG KATA",
          "rowId": `${prefix}sambungkata`
        },
        { 
          "title": "SIAPAAKU",
          "rowId": `${prefix}siapaaku`
        },
{ 
          "title": "MATH KUIS",
          "rowId": `${prefix}mathkuis`
        },
{ 
          "title": "TEBAK BENDERA",
          "rowId": `${prefix}tebakbendera`
        },
{ 
          "title": "KUIS JENAKA",
          "rowId": `${prefix}kuis`
        },
{ 
          "title": "TEBAK GAMBAR",
          "rowId": `${prefix}tebakgambar`
        }]
  }
  ]
}}, {quoted : floc}) 
dha.relayWAMessage(po1, {waitForAck: true})
break
case '👎':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isLikeNya) return  reply("Kamu Sudah Memberi Nilai Kak!")
DSLK.push(sender)
fs.writeFileSync('./database/TidakSuka.json', JSON.stringify(DSLK))
addUserLike(sender)
hai = `*DISLIKE*`
bocil = `Mohon Maaf Atas Ketidaknyamannya Kak *@${num.split('@')[0]}*\nKami Akan Memperbaiki Bot Semaksimal Mungkin, Thanks For You!`
sendButLocation(from, `${hai}`, `${bocil}`, {jpegThumbnail: maid}, [{buttonId:`THANKS LIKENYA👋`,buttonText:{displayText:'THANKS LIKENYA👋'},type:1}], {contextInfo: { mentionedJid: [num]}})
break
case '👍':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isLikeNya) return  reply("Kamu Sudah Memberi Nilai Kak!")
LK.push(sender)
fs.writeFileSync('./database/Suka.json', JSON.stringify(LK))
addUserLike(sender)
hai = `*LIKE*`
bocil = `Terima Kasih Likenya Kak *@${num.split('@')[0]}*\nKami Selaku Pembuat Bot Merasa Senang🙏🏻, Thanks For You!`
sendButLocation(from, `${hai}`, `${bocil}`, {jpegThumbnail: maid}, [{buttonId:`THANKS LIKENYA👋`,buttonText:{displayText:'THANKS LIKENYA👋'},type:1}], {contextInfo: { mentionedJid: [num]}})
break
case 'ratting':
if(!isGroup)return reply(mess.only.group)
po1 = dha.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*LIST RATTING BOT*",
"description": `\nYuk Beri Ulasan Ke Pada Bot Agar Developer Dapat Mengembangkan Bot Dengan Lebih Baik Lagi!`,
"buttonText": "Click Here!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "YUK BERI RATE BOT!",
      "rows" :[
        {
          "title": "🌟",
          "rowId": `${prefix}⭐`
        },
        { 
          "title": "🌟🌟",
          "rowId": `${prefix}⭐⭐`
        },
{ 
          "title": "🌟🌟🌟",
          "rowId": `${prefix}⭐⭐⭐`
        },
{ 
          "title": "🌟🌟🌟🌟",
          "rowId": `${prefix}⭐⭐⭐⭐`
        },
{ 
          "title": "🌟🌟🌟🌟🌟",
          "rowId": `${prefix}⭐⭐⭐⭐⭐`
        }]
  }
  ]
}}, {quoted : floc}) 
dha.relayWAMessage(po1, {waitForAck: true})
break
		case 'kapankah':
		if (isRegister) return ("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					query = args.join(" ")
                 
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					caption = `pertanyaan: ${query}\njawaban: ${koh}`
					reply(caption)
					break
					case 'afk':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
		try {
pp_user = await dha.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    dha.sendMessage(from, pp_riu, image, { quoted: floc, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ini_txt })
                    break
		case 'apakah':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					query = args.join(" ")
                 
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					caption = `pertanyaan: ${query}\njawaban: ${kah}`
					reply(caption)
					break
		case 'bagaimanakah':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
		query = args.join(" ")
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					caption = `pertanyaan: ${query}\njawaban: ${mana}`
					reply(caption)
					break
		case 'rate':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
		query = args.join(" ")
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					caption = `pertanyaan: ${query}\njawaban: ${te}`
					reply(caption)
					break
		case 'dare':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dha.sendMessage(from, tod, image, { quoted: mek, thumbnail: miku, caption: '*Dare*\n\n'+ der })
					break
					case 'cantik':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					jds = []
					const jdoo = groupMembers
					const kposs = groupMembers
					const akii = jdoo[Math.floor(Math.random() * jdoo.length)]
					teks = `yang cantik adalah:\n@${akii.jid.split('@')[0]}`
					jds.push(akii.jid)
					mentions(teks, jds, true)
					break
					case 'ganteng':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					jds = []
					const jodoh = groupMembers
					const kpops = groupMembers
					const akiii = jodoh[Math.floor(Math.random() * jodoh.length)]
					teks = `yang ganteng adalah:\n@${akiii.jid.split('@')[0]}`
					jds.push(akiii.jid)
					mentions(teks, jds, true)
					break
              case 'ulasan':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              youke = fs.readFileSync('./image/109.jpg')
		      buttons = [{buttonId: `THANKS RATENYA👋`,buttonText:{displayText: `THANKS RATENYA👋`},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./image/109.jpg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`KRITIK - ULASAN`, imageMessage: imageMsg,
              contentText:`Berikut Adalah Data Yang Sudah Di Simpan Oleh Bot, Silahkan Di Lihat.\n\n⭐ ${SJ1.length}\n⭐⭐ ${SJ2.length}\n⭐⭐⭐ ${SJ3.length}\n⭐⭐⭐⭐ ${SJ4.length}\n⭐⭐⭐⭐⭐ ${SJ5.length}\n\nData Ini Di Peroleh Dari Developer Hingga Pada Tanggal *${tampilHari}*`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc})
              dha.relayWAMessage(prep)
              break
              case '⭐':
        if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ1.push(sender)
fs.writeFileSync('./database/Star1.json', JSON.stringify(SJ1))
addUserBintang(sender)
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case '⭐⭐':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ2.push(sender)
fs.writeFileSync('./database/Star2.json', JSON.stringify(SJ2))
addUserBintang(sender)
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case '⭐⭐⭐':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ3.push(sender)
fs.writeFileSync('./database/Star3.json', JSON.stringify(SJ3))
addUserBintang(sender)
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case '⭐⭐⭐⭐':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ4.push(sender)
fs.writeFileSync('./database/Star4.json', JSON.stringify(SJ4))
addUserBintang(sender)
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case '⭐⭐⭐⭐⭐':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (isStarNya) return  reply("Kamu Sudah Memberi Rate Kak!")
SJ5.push(sender)
fs.writeFileSync('./database/Star5.json', JSON.stringify(SJ5))
addUserBintang(sender)
reply(`Terima kasih Atas Skornya Kak, Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak :)\n\nKetik !ulasan Untuk Melihat Ratting`)
break
case 'partner':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
hard = `Ini Kak Kontak Partner Saya 😇`
             let ini_list = []
   {
  ini_list.push({
            "displayName": 'Rio ( Gay )',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Rio\nitem1.TEL;waid=6285664770042:6285664770042\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          },
{
            "displayName": 'Hafiz ( Temen Gay😍 )',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Hafiz\nitem1.TEL;waid=79659304176:+79659304176\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          },
{
            "displayName": 'Lolhuman ( My Mastah )',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Lolhuman(2nd Number)\nitem1.TEL;waid=62895418200111:62895418200111\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          }
          )
  }
  hehex = await dha.sendMessage(from, {
        "displayName": `100 kontak`,
        "contacts": ini_list
        }, 'contactsArrayMessage', { quoted: floc })
        reply(hard)
        break
					case 'jadian':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					jds = []
					const blok = groupMembers
					const ayos = groupMembers
					const bakiii = blok[Math.floor(Math.random() * blok.length)]
					teks = `cie yang baru jadian\n@${bakiii.jid.split('@')[0]}\nSemoga Langgeng😍`
					jds.push(bakiii.jid)
					mentions(teks, jds, true)
					break
					case 'pacaran':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					jds = []
					const jodohnya = groupMembers
					const pasangannya = groupMembers
					bokiiii = pasangannya[Math.floor(Math.random() * pasangannya.length)]
					const akiiii = jodohnya[Math.floor(Math.random() * jodohnya.length)]
					teks = `Suttt!!, ada yg lagi pacaran!\n@${akiiii.jid.split('@')[0]} 💞  @${bokiiii.jid.split('@')[0]} \nCIE CIE😍`
					jds.push(akiiii.jid, bokiiii.jid)
					mentions(teks, jds, true)
					break
					case 'totag':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await dha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            dha.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await dha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            dha.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await dha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            dha.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await dha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            dha.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
					case 'culik':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply("KHUSUS GRUP!")
					if (!isGroupAdmins) return reply("KHUSUS ADMIN GRUP!")
					if (!isBotGroupAdmins) return reply("JADIIN ADMIN DULU TOMLOL")
					if (args.length < 1) return reply('YG MAU DI ADD SIAPA?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dha.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'antivirtex':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antivirtex 1`)
					if (Number(args[0]) === 1) {
						if (isAntiVirtex) return reply('Sudah Aktif Kak')
						antivirtex.push(from)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('_Success mengaktifkan antivirtex digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiVirtex) return reply('Sudah Mati Kak')
						var ini = antivirtex.indexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('_Success mematikan antivirtex digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'playstore':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
            case 'sider':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await dha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
            case 'loliv':
       case 'lolivid':
       case 'lolivideo':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              replyFake(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
            case 'reversevideo':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if (!isQuotedVideo) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await dha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            dha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = dha.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
            case 'reverseaudio':
            if (!isQuotedAudio) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await dha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            dha.sendMessage(from,  audio, { mimetype: 'audio/mp3', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'pilihan2':
    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            replyFake(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            dha.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
					case 'antiyoutube':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antiyoutube 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLinkYoutube) return reply('Sudah Aktif Kak')
						antiyoutube.push(from)
						fs.writeFileSync('./database/antiyoutube.json', JSON.stringify(antiyoutube))
						reply('_Success mengaktifkan antiyoutube digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkYoutube) return reply('Sudah Mati Kak')
						var ini = antiyoutube.indexOf(from)
						antiyoutube.splice(ini, 1)
						fs.writeFileSync('./database/antiyoutube.json', JSON.stringify(antiyoutube))
						reply('_Success mematikan antiyoutube digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'antiwa':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antiwa 1`)
					if (Number(args[0]) === 1) {
						if (isAntiWaMe) return reply('Sudah Aktif Kak')
						antiwame.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('_Success mengaktifkan antiwa digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiWaMe) return reply('Sudah Mati Kak')
						var ini = antiwame.indexOf(from)
						antiwame.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('_Success mematikan antiwa digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
              case 'py1':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply("eror")
                        }
                   break      
                   case 'dadu':
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (args.length > 1) return reply(`Penggunaan ${command} angka atau ${command} (Jika mendapat angka 6 akan mendapatkan sejumlah balance)`)
                let dadu = ["1", "2", "3", "4", "5", "6"];
                let isDadu = dadu.includes(q)
                let hadiaq = randomNomor(30)
                let rend = randomNomor(6)
                damdu = fs.readFileSync(`./sticker/${rend}.webp`)
                    await dha.sendMessage(from, damdu, sticker, msg )
                    gameAdd(sender, glimit)
                    if (rend === "6"){
                    textImg(`Selamat ${pushname}, mendapatkan angka 6 dan dapat ${hadiaq} balance`)
                    addBalance(sender, hadiaq, balance)
                   }
                break
			case 'codeotpvn':
                   if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
			random = Math.floor(Math.random() * 17) + 1
		yahaha = fs.readFileSync(`./audionya/${random}.mp3`)
		hayuk = `*Send Kode, Dan Reply Pesan Ini!*`
		dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, hayuk, MessageType.text, {quoted: floc})
			dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, yahaha, audio, {quoted: floc, ptt: true})
			break
              case 'imut':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					iniencmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					inimedia = await dha.downloadAndSaveMediaMessage(iniencmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${inimedia} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(inimedia)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true})
						fs.unlinkSync(ran)
					})
				break
       case 'delcmd':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
              case  'tictactoe': case 'ttc':
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `T i c t a c t o e  G a m e..
     
Sedang ada sesi permainan digrup ini!!

Info : 
  Player ❎ : @${boardnow.X}
  Player ⭕ : @${boardnow.O}
     

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Giliran @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
          
Ketik nyerah untuk Menyerah..
Ketik ${prefix}delttc untuk menghapus session Game..`;
dha.sendMessage(from, monospace(chatMove), MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
  boardnow.X + "@s.whatsapp.net",
  boardnow.O + "@s.whatsapp.net",
  ],
  },
 });
return;
  }
if (argss.length === 1)
return reply(`Tag yang ingin jadi lawan anda!\n\nPenggunaan : *${prefix}tictactoe @TagMember*`
                         );
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}\nRemake By Riu`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2));
const strChat = `T i c t a c t o e  G a m e..

@${sender.replace("@s.whatsapp.net","")} menantang ${argss[1]} untuk Menjadi lawan Game!!
     
${argss[1]}  Ketik Y/N 

Note : 
  • N : menolak tantangan..
  • Y : Terima tantangan..`;
dha.sendMessage(from, monospace(strChat), MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
 },
});
gameAdd(sender, glimit)
break
                    
case  'delttc':
if (!isGroup) return reply(mess.only.group)
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`Berhasil menghapus sesi di grup ini!`);
  } else {
reply(`Tidak ada sesi yg berlangsung, mohon ketik ${prefix}tictactoe`);
  }
break
       case 'listcmd':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Public/Self >-------------------
        case 'public':            
          	if (!mek.key.fromMe) return 
          	if (banChats === false) return 
          	banChats = false
             await dha.setStatus(`Bot For WhatsApp | | Status : Online`)
          	fakegroup(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return 
          	if (banChats === true) return
          	uptime = process.uptime()
          	banChats = true
          	fakegroup(`「 *SELF-MODE* 」`)
          	break
//------------------< Downloader/Search/Anime >-------------------
case 'clearall':{
  if (!isOwner && !mek.key.fromMe) return
  let chiit = await dha.chats.all()
  for (let i of chiit){
  dha.modifyChat(i.jid, 'clear', {
  includeStarred: false
  })
  }
  reply(`Succes..`)
  }
  break
  case 'shadow':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pShadow(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'romantic':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pRomantic(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'smoke':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pSmoke(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'burnpaper':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pBurnPapper(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'lovemsg':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pLoveMsg(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'grass':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pMsgGrass(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'doubleheart':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pDoubleHeart(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'coffecup':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pCoffeCup(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'lovetext':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pLoveText(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'butterfly':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!q) return reply('teksnya mana?')
replyFake(mess.wait)
pButterfly(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'styletext': case 'textstyle':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
reply(Object.entries(await styleText(q)).map(([name, value]) => `_${name}_ : ${value}`).join`\n\n`)
break
       case 'igdl':
       case 'instagram':
              try {
              if (!isUrl(q)) return reply('Linknya?')
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${args[0]}`)
              const data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: miku})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
       case 'igstory': 
              if(!q) return reply('Usernamenya?')
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              hx.igstory(q)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              dha.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              dha.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
}
}
});
              break
              case 'caklontong':{
if (!isGroup) return reply(mess.only.group)
if (game.isCkl(from, ckl)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://lindow-api.herokuapp.com/api/kuis/caklontong?apikey=LindowApi`)
const petunjuk = anu.data.result.jawaban.replace(/[a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z]/gi, '_')
reply(`*Soal :*\n_${anu.data.result.soal}_\n*Petunjuk :* ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
let anih = anu.data.result.jawaban.toLowerCase()
game.addckl(from, anih, gamewaktu, ckl)
	}
break
       case 'image':
       case 'googleimage':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: fvn, thumbnail: miku, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
             case 'gimage':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=${query}`)
                    dha.sendMessage(from, ini_buffer, image, { quoted: fvideo })
                    break
             case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
            case 'slot':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : ?? : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n?? : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
case 'tiktokdl':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              query = args.join("")
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${query}`)
              result = `🚹 *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n?? *Komentar*: ${data.result.statistic.commentCount}\n📭 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📝 *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `🎥Mp4`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'🎶Audio'},type:1}, {buttonId:`${prefix}toktoknowm ${q}`,buttonText:{displayText:'NO WM'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText: `Name : ${pushname}\nCommand : tiktokdl`, imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'open':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
dha.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'close':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
dha.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'buttons6':   
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				dha.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: 'Nih Gan'})
					break  
					case 'delchat':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus Admin!")
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                dha.modifyChat(from, ChatModification.delete)
                break
					case 'tospam':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  dha.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  dha.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await dha.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  dha.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await dha.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  dha.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await dha.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  dha.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'sharelock':
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
dha.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: miku}, MessageType.liveLocation, {quoted:floc})
break
					case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await dha.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
					case 'buttonst7':   
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
				reply("wait bro")
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				buffer = await getBuffer(anu.result.thumbnail)
				dha.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				dha.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				break
				
case 'restart':
             if (!isOwner) return 
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             replyFake(mess.wait)
             exec(`node main`)
             fakegroup('_Restarting Bot Success_')
             break
             case 'herolist':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
            case 'group':
case 'grup':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
        
        txtt =`Hai Kak ${pushname}\nPilih Di bawah`

               buttons = [{buttonId: `${prefix}open ${q}`,buttonText:{displayText: 'open'},type:1},{buttonId:`${prefix}close ${q}`,buttonText:{displayText:'close'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Pilih open : Untuk Membuka\nPilih close : Untuk Menutup',
               buttons: buttons,
               headerType: 1
}

          prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               dha.relayWAMessage(prep)
               break
            
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('Error Gagal Dalam Memasuki Web Y2mate_')
})
           case 'youtubedl':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
*Title* : \`\`\`${res[0].judul}\`\`\`
*Type* : \`\`\`mp3/mp4\`\`\`
*Durasi* : \`\`\`\${res[0].size}\`\`\``
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `Videonya\n\n~RiuNiiSan`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'Audionya\n\n~RiuNiiSan'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: miku})).message.imageMessage
              buttonsMessage = {footerText:'Pilih salah satu di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
       case 'nhentaipdf':
       case 'nhdl':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if (!q) return reply('kodenya?')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
             ini_image = await getBuffer(get_result.result.image[0])
             data = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
             pdf = await getBuffer(data.result)
             dha.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.result.title_romaji}.pdf`, thumbnail: ini_image })
             break
             case 'py1':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
                   case 'py2':
                   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
                   case 'buttons1':
                   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${ini_link}`)
                    get_result = get_result.result
                    reply("silakan tunggu.... ")
                    get_audio = await getBuffer(get_result.link)
                    await dha.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
              case 'playdl':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://dha-chan02.github.io`)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}py1 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}py2 ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await dha.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{})

dha.relayWAMessage(prep)
break
     case 'buttons2':
     if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${ini_link}`)
                    reply(`Silakan Tunggu.....`)
                    get_result = get_result.result
                    get_audio = await getBuffer(get_result.link)
                    await dha.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4` })
                    break
              case 'toktoknowm': {
                if (args.length < 1) return reply(`Penggunaan ${command} _link tiktok_`)
                if (!isUrl(args[1]) && !args[1].includes('tiktok.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${args[1]}`)
                .then(({data}) => {
                    let { title, description, duration, link } = data.result
                    let capt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK NOWM DOWNLOADER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Username / Nickname : ${data.result.author.username} / ${data.result.author.nickname}\`\`\`
\`\`\`▢ Duration : ${duration}\`\`\`
\`\`\`▢ LikeCount : ${data.result.statistic.diggCount}\`\`\`
\`\`\`▢ ShareCount : ${data.result.statistic.shareCount}\`\`\`
\`\`\`▢ CommentCount : ${data.result.statistic.commentCount}\`\`\`
\`\`\`▢ PlayCount : ${data.result.statistic.playCount}\`\`\`
\`\`\`▢ Descripttion : ${description}\`\`\`
`
                    getBuffer(link).then((yoi) => {
xinz.sendVideo(from, yoi, capt, msg)
})
                })
                .catch(() => {
                    axios.get(`https://api.lolhuman.xyz/api/tiktok2?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${args[1]}`)
                    .then(({data}) => {
                        sendFileFromUrl(from, data.result, '', msg)
                        limitAdd(sender, limit)
                    })
                    .catch(() => {
                        axios.get(`https://api.lolhuman.xyz/api/tiktok3?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${args[1]}`)
                        .then(({data}) => {
                            sendFileFromUrl(from, data.result, '', msg)
                            limitAdd(sender, limit)
                        })
                        .catch((err) => {
                            sendMess(ownerNumber, 'Tiktok Error : ' + err)
                            console.log(color('[Tiktok]', 'red'), err)
                            reply(mess.error.api)
                        })
                    })
                })
            }
                break
       case 'buttons3':
  if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
  if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply('Link Error')
  replyFake(mess.wait)
  anu = await TiktokDownloader(`${q}`)
  .then((data) => { sendMediaURL(from, data.result.watermark) })
  .catch((err) => { reply(String(err)) })
  break
  case 'buttons4':
  case 'tiktokmusic':
 if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
  if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply('Link Error')
  ini_link = args[0]
  ayo = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${ini_link}`)
  await dha.sendMessage(from, ayo, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
  break
     case 'antibug':
     if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
          if (!mek.key.fromMe && !isOwner && !isCoOwner) return
          if (args[0] === 'on') {
          if (bugc === true) return
          bugc = true
          antitrol = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply('Berhasil mematikan antibug')
          } else {
          reply('Pilih on atau off')
          }
          break
    case 'google':
    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
        case 'mediafire':
        if (!isPremium && !isOwner) return reply("Khusus Premium!")
        if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `*MediaFire Downloader*
               
*Nama* : ${res[0].nama}
*Ukuran* : ${res[0].size}
*Link* : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break
      case 'fb':
      case 'facebook':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if (!q) return
             replyFake(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=a10523bcf6`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
             case 'nuliskiri':
                replyFake(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                    dha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak.`})
                break
      case 'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'ytdesc':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             if (args.length < 1) return reply('Video/Link Yt Nya Mana? ')
             teks = args.join(' ')
             res = await yts(teks)
             reply(res.all[0].description)
             break
            case 'pilihan1':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=Manhua`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail: miku })
                    break
                    case 'pilihan3':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=Kazuma`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail: miku })
                    break
                    case 'pilihan4':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=L Lawliet`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail: miku})
                    break
                    case 'pilihan5':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=Light Yagami`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail: miku })
                    break
                    case 'pilihan6':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=Aqua Konosuba`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail: miku })
                    break
            case 'stickerwa':
            if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Patrick`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&img=${x}`)
                        await dha.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case 'harcos':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Masukan Textnya!`)
					query = args.join(" ")
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartacustom?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&text=${body.slice(7)}`)
					cap = `${query}`
					dha.sendMessage(from, buffer, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap})
					break
					case 'linkwa':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
		case 'harta':
		if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
				query = args.join(" ")
				reply('wait bro...')
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartatahta?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&text=${body.slice(7)}`)
				cap = `Harta Tahta ${query}`
				dha.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap })
				break
       case 'waifu':
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
       case 'shota':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
       num = `${sender.split("@")[0]}@s.whatsapp.net`
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Try Again`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'Home'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: miku})).message.imageMessage
              buttonsMessage = {footerText:`Hai Kak *@${num.split('@')[0]}*\nSaya Ryuu Bot Yang Akan Membantu/Mempermudah Kakak Untuk Membuat Sticker Dan Lain Lain, Mau Cari Tau Tentangku? Chat Owner Yah!`, imageMessage: imageMsg,
              contentText:`klik Try Again untuk ke gambar selanjut nya!`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: { mentionedJid: [num]}})
              dha.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              case 'bug':
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await dha.toggleDisappearingMessages(from, 0)
}
reply('Sukses send bug sebanyak '+args.join(' '))
					break
					case 'detikvn':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await dha.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'buggc':
await dha.toggleDisappearingMessages(from, 0)
reply("yahaha")
break
              case 'nsfw':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              num = `${sender.split("@")[0]}@s.whatsapp.net`
              riuecchi = `Hai Kak @${num.split('@')[0]} 
Pilih Menu Dibawah Ini!`
              buttons = [{buttonId:`${prefix}hentai`,buttonText:{displayText:'Hentai'},type:1},{buttonId:`${prefix}ecchi`,buttonText:{displayText:'Ecchi'},type:1}]
               buttonsMessage = { contentText: `${riuecchi}`, footerText: 'NSFW MENU',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: ftroli , contextInfo: { forwardingScore: 1, isForwarded: true,  mentionedJid: [num]}})
               dha.relayWAMessage(prep)
               break
             case 'detikvn':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await dha.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break  
               case 'jenisanim':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              num = `${sender.split("@")[0]}@s.whatsapp.net`
              riuecchi = `Hai Kak @${num.split('@')[0]} 
Pilih Menu Dibawah Ini!`
              buttons = [{buttonId:`${prefix}pilihan1`,buttonText:{displayText:'China\n\n~RiuNiiSan'},type:1},{buttonId:`${prefix}pilihan2`,buttonText:{displayText:'Jepang\n\n~RiuNiiSan'},type:1}]
               buttonsMessage = { contentText: `${riuecchi}`, footerText: 'DONASI LAH MASA MAKE DOANG KNTL',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek, contextInfo: { forwardingScore: 1, isForwarded: true,  mentionedJid: [num]}})
               dha.relayWAMessage(prep)
               break
               case 'tod':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              num = `${sender.split("@")[0]}@s.whatsapp.net`
              riuecchi = `Hai Kak @${num.split('@')[0]} 
Pilih Menu Dibawah Ini!`
              buttons = [{buttonId:`${prefix}truth`,buttonText:{displayText:'TRUTH\n\n*GK MAO NGIKUTIN PERTANYAAN BALIK AE SONO*'},type:1},{buttonId:`${prefix}dare`,buttonText:{displayText:'DARE\n\n*GK MAO NGIKUTIN PERTANYAAN BALIK AE SONO*'},type:1}]
               buttonsMessage = { contentText: `${riuecchi}`, footerText: 'SUBSCRIBE MY YT CHANNEL',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek, contextInfo: { forwardingScore: 1, isForwarded: true,  mentionedJid: [num]}})
               dha.relayWAMessage(prep)
               break
        case 'play': case 'playmp3':{
                reply(`Mungkin Maksud Kamu *!playdl*`)
 }
               break
               case 'harcos':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Masukan Textnya!`)
					query = args.join(" ")
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartacustom?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&text=${body.slice(7)}`)
					cap = `${query}`
					dha.sendMessage(from, buffer, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap})
					break
					case 'gtts':
		case 'tts':
				if (args.length < 1) return dha.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return dha.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							dha.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					case 'tempo':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   var req = args.join(" ")            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case 'nc':
				if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.0,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:0})
						fs.unlinkSync(ran)
					   })
				       break
		case 'harta':
				if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				query = args.join(" ")
				reply('wait bro...')
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartatahta?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&text=${body.slice(7)}`)
				cap = `Harta Tahta ${query}`
				dha.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap })
				
				break
case 'hetshot':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			dha.groupRemove(from, mentioned)
			reply("SUKSES")
			break
			case 'promote':
			if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			dha.groupMakeAdmin(from, mentioned)
			reply("SUKSES")
			break
			case 'promoteall':
			if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
					members_id = []
					for (let mem of groupMembers) {
						members_id.push(mem.jid)
					}
					dha.groupMakeAdmin(from, members_id)
					reply("sukses")
					break
					case 'demoteall':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
					members_id = []
					for (let mem of groupMembers) {
						members_id.push(mem.jid)
					}
					dha.groupDemoteAdmin(from, members_id)
					reply("sukses")
					break
					case 'demote':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (!isGroup) return reply("Gunakan Di Grup")
			if (!isGroupAdmins) return reply("Khusus Admin")
			if (!isBotGroupAdmins) return reply("Bot Belum Jadi Admin")
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			dha.groupDemoteAdmin(from, mentioned)
			reply("SUKSES")
			break
         case 'pinterest':
         if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await dha.sendMessage(from,di,image,{quoted: mek, thumbnail: maid})
            break
       case 'yts':
       case 'ytsearch':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!q) return reply(mess.wrongFormat)
              replyFake(mess.wait)
              try {
              res = await yts(q)
              a = `*Youtube Search 🔎*\n`
for (let i of res.all) {
a += `
Title : ${i.title}
Views : ${i.views}
Upload : ${i.ago}
Durasi : ${i.timestamp}
Channel : ${i.author.name}
Link : ${i.url}\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, thumbnail: miku, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               replyFake(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await dha.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'telesticker': 
       case 'telestiker':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              replyFake(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              dha.sendMessage(from, ini_buffer, sticker, {})
}
              break
              case 'take':
    case 'colong':
    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await dha.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `X - Dev Team`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, dha, mek, from)
			break
			case 'groupinfo':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await dha.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             dha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
             case 'tebakcharanime': // case by riu
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.name
                    ini_buffer = await getBuffer(ini_image)
                    const petunjuk = get_result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek, caption: `*𝗧𝗘𝗕𝗔𝗞 𝗔𝗡𝗜𝗠𝗘*\n\n*Jawab Gk? Jawab Gk? Jawablah Masa Gitu Doang Gk Bisa Wkwk*\n\n𝙋𝙀𝙏𝙐𝙉𝙅𝙐𝙆 : ${petunjuk}\n𝙉𝙔𝙀𝙍𝘼𝙃 : Ketik !canceltebaknime\n\n_Menang Mendapatkan Balance_`}).then(() => {
                        tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                    })
                    await sleep(30000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    break
             case 'tebakgambar': 
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                const dataa = fs.readFileSync('./lib/tebakgambar.js');
                 jsonData = JSON.parse(dataa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 ini_image = randKey.result.soal
                    jawaban = randKey.result.jawaban
                    ini_buffer = await getBuffer(ini_image)
                    let kisikisi = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    await dha.sendMessage(from, ini_buffer, image, { quoted: fkontak, caption: `*𝗧𝗘𝗕𝗔𝗞 𝗚𝗔𝗠𝗕𝗔𝗥*\n\n*Jawab Gk? Jawab Gk? Jawablah Masa Gitu Doang Gk Bisa Wkwk*\n\n𝙋𝙀𝙏𝙐𝙉𝙅𝙐𝙆 : ${kisikisi}\n𝙉𝙔𝙀𝙍𝘼𝙃 : Ketik !canceltebak\n\n_Menang Mendapatkan Balance_`}).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
              //        sleep(30000)
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                    case 'amv': 
                const _0x5cdb=['https://l.top4top.io/m_1909urww11.mp4','1823170LmBcMk','https://a.top4top.io/m_1909zj9j11.mp4','https://h.top4top.io/m_1909fv0qt1.mp4','https://a.top4top.io/m_19090m1my1.mp4','https://b.top4top.io/m_1909kjx811.mp4','https://k.top4top.io/m_1909v4erv1.mp4','6697YRljSp','1pfmXml','486180RmsBeu','https://i.top4top.io/m_19098bwhz1.mp4','https://j.top4top.io/m_1909c9mrm1.mp4','https://e.top4top.io/m_1909gbmfq1.mp4','https://k.top4top.io/m_1909xkopy1.mp4','11998sSexOM','https://l.top4top.io/m_1909k72ln1.mp4','19447coAwUA','341911RTDYWU','https://b.top4top.io/m_1909iwbtl1.mp4','https://f.top4top.io/m_1909b0e1z1.mp4','https://c.top4top.io/m_1909bo1p11.mp4','263774xtTbtZ','https://f.top4top.io/m_1909c82r91.mp4','22msxwht','83JIRnxC','https://e.top4top.io/m_1909tfm5s1.mp4','https://j.top4top.io/m_1909jy32u1.mp4','https://d.top4top.io/m_19098p1c31.mp4','https://c.top4top.io/m_19093a0du1.mp4','https://j.top4top.io/m_1909y1f061.mp4'];const _0x13ffc4=_0x5e16;(function(_0x5458bd,_0x2d471d){const _0x28d656=_0x5e16;while(!![]){try{const _0x7d1c2d=-parseInt(_0x28d656(0x15e))+-parseInt(_0x28d656(0x15d))*-parseInt(_0x28d656(0x163))+-parseInt(_0x28d656(0x15c))*parseInt(_0x28d656(0x16d))+parseInt(_0x28d656(0x165))*-parseInt(_0x28d656(0x16c))+parseInt(_0x28d656(0x166))+-parseInt(_0x28d656(0x16a))+parseInt(_0x28d656(0x156));if(_0x7d1c2d===_0x2d471d)break;else _0x5458bd['push'](_0x5458bd['shift']());}catch(_0x1f8832){_0x5458bd['push'](_0x5458bd['shift']());}}}(_0x5cdb,0x6c430));function _0x5e16(_0x1ff6e3,_0x3b1233){_0x1ff6e3=_0x1ff6e3-0x152;let _0x5cdbd9=_0x5cdb[_0x1ff6e3];return _0x5cdbd9;}const randoms=['https://l.top4top.io/m_1909llp4m1.mp4',_0x13ffc4(0x16f),_0x13ffc4(0x15a),_0x13ffc4(0x152),_0x13ffc4(0x161),_0x13ffc4(0x16b),_0x13ffc4(0x162),_0x13ffc4(0x15b),_0x13ffc4(0x160),_0x13ffc4(0x154),'https://l.top4top.io/m_1909p9j331.mp4',_0x13ffc4(0x157),_0x13ffc4(0x167),_0x13ffc4(0x169),_0x13ffc4(0x159),_0x13ffc4(0x155),'https://k.top4top.io/m_190995vmz1.mp4',_0x13ffc4(0x164),'https://b.top4top.io/m_1909rvxm21.mp4',_0x13ffc4(0x153),_0x13ffc4(0x16e),_0x13ffc4(0x168),_0x13ffc4(0x158),_0x13ffc4(0x15f),'https://l.top4top.io/m_1909gstbj1.mp4'];
const sibal = randoms[Math.floor(Math.random() * randoms.length)]
                 dha.sendMessage(from, '[WAIT] Proses...❗', MessageType.text)
                buffer = await getBuffer(sibal)
                console.log(`Mengirim..`)
			dha.sendMessage(from, buffer, video, {mimetype:  'video/mp4', caption: 'Nih *AMV* nya.', quoted: mek})    
                console.log(`Berhasil`)
				break
case 'canceltebak':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
                    break
                    case 'canceltebaknime':
                    if (!tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                    reply("Success mengcancel tebak anime sebelumnya")
                    break
             case 'getdeskgc':
				if (!isGroup) return reply("Khusus Grup!")
					anu = from
			   metadete = await dha.groupMetadata(anu.jid)
				reply(metadete)
				  break
					case 'getbio':
					if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await dha.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = dha.contacts[ambl] != undefined ? dha.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : dha.contacts[ambl].notify || dha.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
case 'delete':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
					dha.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'chat':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            dha.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
             case 'suit':
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
       case 'attp':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (args.length == 0) return reply(`Example: ${prefix + command} YUDHA`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              dha.sendMessage(from, buffer, sticker, { quoted: mek })
              break
              case 'tomp3':
            if (!isQuotedVideo) return reply('Reply videonya!')
            replyFake(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await dha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            dha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
       case 'sticker':
       case 'stiker':
       case 's':
       case 'stickergif':
       case 'stikergif':
       case 'sgif':
       if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await dha.downloadAndSaveMediaMessage(encmediat)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              dha.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await dha.downloadAndSaveMediaMessage(encmedia)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              dha.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
              } else {
              reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
              break
      case 'tovideo':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
               case "spekhp":
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (args.length == 0) return reply(`Example: ${prefix + command} Redmi 5A`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsmarena?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=${query}`)
get_result = get_result.result
ini_txt = `❏「 *INFORMATION* 」❏\n\n`
ini_txt += `◪› Title : ${get_result.phone_name}\n`
spek = get_result.specification
ini_txt += `◪› Jaringan :\n`
ini_txt += `3G : ${spek.network.net3g}\n`
ini_txt += `4G : ${spek.network.net4g}\n`
ini_txt += `5G : ${spek.network.net5g}\n`
ini_txt += `Speed : ${spek.network.speed}\n\n`
ini_txt += `◪› Meluncurkan :\n`
ini_txt += `Tahun : ${spek.launch.year}\n`
ini_txt += `Status : ${spek.launch.status}\n\n`
ini_txt += `◪› Tubuh :\n`
ini_txt += `Dimensi : ${spek.body.dimensions}\n`
ini_txt += `Berat : ${spek.body.weight}\n`
ini_txt += `Build : ${spek.body.build}\n`
ini_txt += `Sim : ${spek.body.sim}\n`
ini_txt += `Body other : ${spek.body.bodyother}\n\n`
ini_txt += `◪› Display :\n`
ini_txt += `Tipe : ${spek.display.displaytipe}\n`
ini_txt += `Size : ${spek.display.displaysize}\n`
ini_txt += `Resolution : ${spek.display.displayresolution}\n`
ini_txt += `Protection : ${spek.display.displayprotection}\n\n`
ini_txt += `◪› Platform :\n`
ini_txt += `OS : ${spek.platform.os}\n`
ini_txt += `Chipset : ${spek.platform.chipset}\n`
ini_txt += `Cpu : ${spek.platform.cpu}\n`
ini_txt += `Gpu : ${spek.platform.gpu}\n\n` 
ini_txt += `◪› Memory :\n`
ini_txt += `Slot memori : ${spek.memory.memoryslot}\n`
ini_txt += `Internal : ${spek.platform.internalmemory}\n`
ini_txt += `Memory other : ${spek.platform.memoryother}\n\n`
ini_txt += `◪› Suara :\n`
ini_txt += `Optional : ${spek.sound.optionalother}\n`
ini_txt += `◪› Komunikasi :\n`
ini_txt += `WLAN : ${spek.comms.wlan}\n`
ini_txt += `Bluetooth : ${spek.comms.bluetooth}\n`
ini_txt += `GPS : ${spek.comms.gps}\n`
ini_txt += `Radio : ${spek.comms.radio}\n`
ini_txt += `USB : ${spek.comms.usb}\n\n`
ini_txt += `◪› Fitur :\n`
ini_txt += `Sensor : ${spek.features.sensors}\n\n`
ini_txt += `◪› Baterai :\n`
ini_txt += `Baterai : ${spek.battery.batdescription1}\n\n`
ini_txt += `◪› Lain-lain :\n`
ini_txt += `Warna : ${spek.misc.colours}\n`
ini_txt += `Model : ${spek.misc.models}\n`
ini_txt += `Harga : ${spek.misc.price}\n`
thamnel = await getBuffer(get_result.phone_image)
await dha.sendMessage(from, thamnel, image, { quoted: mek, caption: ini_txt, thumbnail: miku})
break;
               case 'teks1':
              textnya = `
Hai Saya Ryuu👋
Saya Akan Membantu
Anda Jika Kesusahan`
buttons = [{buttonId:`${prefix}prefixnofound`,buttonText:{displayText:'⋮☰ MASALAH PREFIX'},type:1},{buttonId:`${prefix}fiturnofound`,buttonText:{displayText:'⋮☰ FITUR TIDAK ADA'},type:1},{buttonId:`${prefix}sk`,buttonText:{displayText:'S&K'},type:1}]
               buttonsMessage = { contentText: `${textnya}`, footerText: 'PILIH SALAH SATU DIBAWAH INI',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: ftroli, contextInfo: { mentionedJid: [num] }})
               dha.relayWAMessage(prep)
               break
      case 'toimg':
      if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              if (!isQuotedSticker) return reply('reply stickernya')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await dha.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              dha.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
                         
              case 'animesearch':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Judul : ${get_result.title.romaji}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Durasi : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Awal Rilis : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `Akhir Rilis : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nSinopsis : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await dha.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
//------------------< Ingfo Bot >-------------------
      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
              case 'fiturnofound':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              num = `${sender.split("@")[0]}@s.whatsapp.net`
gyoro = `Sepertinya Kak @${num.split('@')[0]} Mengalami Masalah Pada Fitur Perintah Ya?, Sebaiknya Kak @${num.split('@')[0]} Melihat Menu Bot Atau Menanyakan Owner Tentang Fitur2 Dalam Bot.`
buttons = [{buttonId:`${prefix}owner`,buttonText:{displayText:'⋮☰ OWNER'},type:1}]
               buttonsMessage = { contentText: `${gyoro}`, footerText: 'PILIH DIBAWAH UNTUK MENANYAKAN COMMAND/FITUR PADA OWNER',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: ftroli, contextInfo: { mentionedJid: [num] }})
               dha.relayWAMessage(prep)
               break
               case 'prefixnofound':
               if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              num = `${sender.split("@")[0]}@s.whatsapp.net`
gyoro = `Prefix Bot Adalah ${prefix} Kak @${num.split('@')[0]}`
buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}]
               buttonsMessage = { contentText: `${gyoro}`, footerText: 'JIKA SUDAH TAU PREFIX BOT PENCET DIBAWAH INI',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: ftroli, contextInfo: { mentionedJid: [num] }})
               dha.relayWAMessage(prep)
               break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿* 」\nMerespon dalam ${latensie.toFixed(4)} Sec `)
              break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = dha.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
             case "meme":
             if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             num = `${sender.split("@")[0]}@s.whatsapp.net`
             
v2 = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}meme`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Memenya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo,contextInfo: { mentionedJid: [num]}})
   break
                    case "asupan": // xteam
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    get_result = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=91e9b333684574e2`)
                    get_result = get_result.result
                    get_audio = await getBuffer(get_result.link)
                    await dha.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.username}.mp4`, quoted: fvn, caption: "NIH ASUPAN" })
                    break
                    case "storyanime": // xteam
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    get_result = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=91e9b333684574e2`)
                    get_result = get_result.result
                    get_audio = await getBuffer(get_result.link)
                    await dha.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.username}.mp4`, quoted: fvn, caption: "NIH STORY ANIMENYA" })
                    break;
                    case "vtuber": // xteam
                    if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
                    get_result = await fetchJson(`https://api.xteam.xyz/asupan/vtuber?APIKEY=91e9b333684574e2`)
                    get_result = get_result.result
                    get_audio = await getBuffer(get_result.link)
                    await dha.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.username}.mp4`, quoted: fvn, caption: "NIH STORY ANIMENYA" })
                    break;
   case "darkjoke":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
mhan2 = await dha.prepareMessage(from, v2, image)
gbutsan = [
  {buttonId: `${prefix}darkjoke`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Darkjoke\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvn, contextInfo: { mentionedJid: [num]}})
   break
   case "hentai":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   if (isGroup) return reply(`Karna Ini Fitur Hentai, Mohon Maaf Gambarnya Hanya Bisa Lewat Chat Pribadi!`)
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, { thumbnail: miku })
gbutsan = [
  {buttonId: `${prefix}hentai`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Hentainya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
         
         
         case "elf":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=PunyaIkyAds`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, {thumbnail: Buffer.alloc(0)})
gbutsan = [
  {buttonId: `${prefix}${command}`, buttonText: {displayText: 'Try Again'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Next Untuk Melanjutkan\n~*@${num.split('@')[0]}*`,
    footerText: "Sponsor By WhatsApp",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo: { mentionedJid: [num]}})
   break
   case "sagiri":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=PunyaIkyAds`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, {thumbnail: Buffer.alloc(0)})
gbutsan = [
  {buttonId: `${prefix}${command}`, buttonText: {displayText: 'Try Again'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Next Untuk Melanjutkan\n~*@${num.split('@')[0]}*`,
    footerText: "Sponsor By WhatsApp",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo: { mentionedJid: [num]}})
   break
   case "megumin":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=PunyaIkyAds`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, {thumbnail: Buffer.alloc(0)})
gbutsan = [
  {buttonId: `${prefix}${command}`, buttonText: {displayText: 'Try Again'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Next Untuk Melanjutkan\n~*@${num.split('@')[0]}*`,
    footerText: "Sponsor By WhatsApp",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo: { mentionedJid: [num]}})
   break
         case "shinobu":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=PunyaIkyAds`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, {thumbnail: Buffer.alloc(0)})
gbutsan = [
  {buttonId: `${prefix}${command}`, buttonText: {displayText: 'Try Again'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Next Untuk Melanjutkan\n~*@${num.split('@')[0]}*`,
    footerText: "Sponsor By WhatsApp",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo: { mentionedJid: [num]}})
   break
   case "wallpapernime":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`https://api.lolhuman.xyz/api/random/wallnime?apikey=PunyaIkyAds`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, {thumbnail: Buffer.alloc(0)})
gbutsan = [
  {buttonId: `${prefix}${command}`, buttonText: {displayText: 'Try Again'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Next Untuk Melanjutkan\n~*@${num.split('@')[0]}*`,
    footerText: "Sponsor By WhatsApp",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo: { mentionedJid: [num]}})
   break
   case "yuri":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
if (isGroup) return reply(`Karna Ini Fitur Hentai, Mohon Maaf Gambarnya Hanya Bisa Lewat Chat Pribadi!`)
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, { thumbnail: miku })
gbutsan = [
  {buttonId: `${prefix}yuri`, buttonText: {displayText: 'Try Again'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Yurinya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case 'video': case 'videos': case 'vidio': case 'vidios':{
   	if (!isPremium && !isOwner) return reply("Khusus Premium!")
                if (args.length < 2) return reply(`Kirim perintah *${command}* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                        let list = []
                        let startnum = 1
                        for (var x of yt) {
                        let yy = { title: 'Data ke-'+ startnum++,
                        rows: [
                           {
                            title: `${x.title}`,
                            description: `\n\n*Viewers: ${x.views}*\n*Duration: ${x.timestamp}*\n*Upload: ${x.ago}*\n*Url: ${x.url}*`,
                            rowId: `${prefix}buttons2 ${x.url}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    listmsg(from, `Video Search`, `Pilih disini, Hasil Pencarian "${q}", Hanya untuk Premium User`, list)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
   case "pussy":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   if (isGroup) return reply(`Karna Ini Fitur Hentai, Mohon Maaf Gambarnya Hanya Bisa Lewat Chat Pribadi!`)
v2 = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, { thumbnail: miku })
gbutsan = [
  {buttonId: `${prefix}pussy`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Pussynya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case "blowjob":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   if (isGroup) return reply(`Karna Ini Fitur Hentai, Mohon Maaf Gambarnya Hanya Bisa Lewat Chat Pribadi!`)
v2 = await getBuffer(`https://nekos.life/api/v2/img/blowjob`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, { thumbnail: miku })
gbutsan = [
  {buttonId: `${prefix}blowjob`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Blowjobnya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case "cum":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   if (isGroup) return reply(`Karna Ini Fitur Hentai, Mohon Maaf Gambarnya Hanya Bisa Lewat Chat Pribadi!`)
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, { thumbnail: miku })
gbutsan = [
  {buttonId: `${prefix}cum`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Cumnya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case 'siapaaku':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (game.isSiapaAku(from, buriq)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/siapaaku?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
                let anih = anu.result.answer.toLowerCase()
                game.addburiq(from, anih, gamewaktu, buriq)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                reply(`${anu.result.question}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`)
            }
            break
   case "wallpaperhentai":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   if (isGroup) return reply(`Karna Ini Fitur Hentai, Mohon Maaf Gambarnya Hanya Bisa Lewat Chat Pribadi!`)
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random2/wallpaper?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, { thumbnail: miku })
gbutsan = [
  {buttonId: `${prefix}wallpaper`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Wallpapernya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case "trap":
   if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   if (isGroup) return reply(`Karna Ini Fitur Hentai, Mohon Maaf Gambarnya Hanya Bisa Lewat Chat Pribadi!`)
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
mhan2 = await dha.prepareMessage(`${sender.split("@")[0]}@s.whatsapp.net`, v2, image, { thumbnail: miku })
gbutsan = [
  {buttonId: `${prefix}trap`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Trapnya\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
   case 'bc':
if (!isOwner) return reply(`Khusus Owner!`)     
bc = body.slice(3)
if (args.length < 1) return reply('.......')
anu = await dha.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await dha.downloadMediaMessage(encmedia)
for (let _ of anu) {
dha.sendMessage(_.jid, buff, MessageType.image, {caption: `${body.slice(4)}\n\n_*BROADCAST*_`})
}
reply('Suksess broadcast ')
} else {
for (let _ of anu) {
creator = "6285731261728@s.whatsapp.net"
teks =`🎯 *BROADCAST* ??`
spasi = `───────────────`
sendButLocation(_.jid, `${teks}`, `${spasi}\n\n${bc}\n\n${spasi}`, {jpegThumbnail: miku}, [{buttonId:`${prefix}ratting`,buttonText:{displayText:'🌟RATE'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
}
reply('Suksess broadcast ')
}
break
   case 'postingan':
case 'posting':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
data = fs.readFileSync('./lib/sosmed.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`LIKE`,buttonText:{displayText:'LIKE'},type:1},{buttonId:`SCROL`,buttonText:{displayText:'SCROL'},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nama}.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`SOSMED INSTAN`, imageMessage: imageMsg,
contentText:`❤ *${love.length}*\n*${randKey.nama}* ${randKey.cap}`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: falfa})
dha.relayWAMessage(prep)
break
case 'upload':
if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
if (!isOwner) return reply(`\`\`\`▢ FITUR KHUSUS OWNER BOT ▢\`\`\``)
if (!isQuotedImage) return reply(`tag foto kamu lalu ketik\n!upload caption`)
if(!q) return reply(`tag foto kamu lalu ketik\n!upload caption`)
caption = args.join(" ")
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await dha.downloadMediaMessage(boij)
nem = pushname
H1 = {
nama : nem,
cap : caption
}
sosmed.push(H1)
fs.writeFileSync(`./lib/${pushname}.jpeg`, delb)
fs.writeFileSync('./lib/sosmed.js', JSON.stringify(sosmed))
dha.sendMessage(from, `Oke Sudah Tersimpan`, MessageType.text, { quoted: mek})		     	 
break
  case "ecchi":
  if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
   num = `${sender.split("@")[0]}@s.whatsapp.net`
   
v2 = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=http://api.lolhuman.xyz/api/random/quotesnime?apikey=2e7c36390a9ced9e1c664b26`)
mhan2 = await dha.prepareMessage(from, v2, image, { thumbnail: miku })
gbutsan = [
  {buttonId: `${prefix}ecchi`, buttonText: {displayText: '💎NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Ini Kak *@${num.split('@')[0]}* Ecchiny\nNext Untuk Melanjutkan`,
    footerText: "Made With Riu🛐",
    buttons: gbutsan,
    headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: fvideo, contextInfo: { mentionedJid: [num]}})
   break
    case 'shutdown':
             if (!isOwner) return 
             reply(`Sayonara:)`)
             await dha.setStatus(`Status : Offline`)
             await sleep(3000)
             process.exit()
             break
      case 'leaveall':
             if (!isOwner) return  
             let totalgroup = dha.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, '[ LEAVE ALL GROUP ]\n\nBye Bye', null)
             await sleep(3000)
             dha.groupLeave(id)
}
             break
       case 'setprefix':
              if (!isOwner) return
              teks = args.join('') 
              prefix = teks
              reply(`_Change Prefix Success!! Prefix_ : *${prefix}*`)
              break
      case 'hidetag':
             try {
             	if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
//------------------< Lainnya >-------------------
        case 'getpp':
        if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await dha.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               dha.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await dha.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               dha.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await dha.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               dha.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'get':
        case 'fetch': //ambil dari nuru
               if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
               res = await fetch(q)
               if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
               delete res
               throw `Content-Length: ${res.headers.get('content-length')}`
}
               if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
               txtx = await res.buffer()
               try {
               txtx = util.format(JSON.parse(txtx+''))
               } catch (e) {
               txtx = txtx + ''
               } finally {
               reply(txtx.slice(0, 65536) + '')
}
               break
        case 'searchmsg':  //by ANU TEAM
               if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apa?\nContoh : ${prefix + command} halo|10`)
               teks = arg
               if (teks.includes("|")) { 
               try {
               var ve = teks.split("|")[0]
               var za = teks.split("|")[1]
               sampai = `${za}`
               if (isNaN(sampai)) return reply('Harus berupa Angka!')
               batas = parseInt(sampai) + 1
               if (batas > 30) return reply('Maks 30!')
               replyFake(mess.wait)
               cok = await dha.searchMessages(`${ve}`, from, batas,1) 
               if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
               if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
               for (i=1;i < cok.messages.length;i++) {
               if (cok.messages[i].message) {
               dha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
               } catch (e) {
               return reply(String(e))
}
               } else {
               reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
               break
        case 'lolkey':
        case 'cekapikey':
               if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
               anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
               teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
               dha.sendMessage(from, teks, text, {quoted: mek})
               break
              case 'sk':
              if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
              miku = fs.readFileSync('miku.jpg')
              syarat = ` 
              
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *menu* untuk memulai!`
              dha.sendMessage(from, miku, image, {quoted: fkontak, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: syarat })
       case 'infoig':
              reply(`IG: Fanzz_666`)
              break
default:
if (budy.includes("https://youtu.be")) {
				if (!isGroup) return
				if (!isAntiLinkYoutube) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 LINK YT DETECTOR 」*\nKamu mengirimkan link youtube, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				dha.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
        if (body.startsWith(`${prefix}${command}`)) {
		num = `${sender.split("@")[0]}@s.whatsapp.net`
comd = `Halo @${num.split('@')[0]}\nCommand: *${prefix}${command}*\nTidak AdA Di Menu\nJika Bermasalah Pencet Dibawah Ini\n`
buttons = [{buttonId:`${prefix}teks1`,buttonText:{displayText:'⋮☰ PANDUAN'},type:1}]
               buttonsMessage = { contentText: `${comd}`, footerText: 'PILIH DIBAWAH INI',  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, { quoted: ftroli, contextInfo: { mentionedJid: [num] }})
               dha.relayWAMessage(prep)
				  }
        if (budy.includes("wa.me")) {
				if (!isGroup) return
				if (!isAntiWaMe) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 WA.ME DETECTOR 」*\nKamu mengirimkan link wa, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				dha.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }

if (budy.includes("165310")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("177978")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("211759")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
	const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("212643")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}

if (budy.includes("229540")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("111074")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("250029")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("211519")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("256097")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("163478")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("915005")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("792280")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("260629")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("128051")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("239536")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
        if (budy.includes("121310")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("792880")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("202019")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
if (budy.includes("250029")) {
	if (isRegister) return  reply("Kamu Sudah Daftar Kak!")
	if (isGroup) return dha.sendMessage(from, `Memasukan Kode Otp Hanya Bisa Dilakukan Di Chat Pribadi Bot!`, MessageType.text, { quoted: mek })
const noSeriii = createSerial(20)
		    registercuy.push(sender)
		    fs.writeFileSync('./database/user/registercuy.json', JSON.stringify(registercuy))
		addUserRegister(sender, noSeriii)
		   toks = `Verification success\n\nPlease send *!help* to view menu`
		    reply(toks)
}
                    if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				dha.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			
			if (buttonsR === 'SCROL') {
if (!isRegistered) return reply(ind.noregis())   
data = fs.readFileSync('./lib/sosmed.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`LIKE`,buttonText:{displayText:'LIKE'},type:1},{buttonId:`SCROL`,buttonText:{displayText:'SCROL'},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nama}.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`SOSMED INSTAN`, imageMessage: imageMsg,
contentText:`❤ *${love.length}*\n*${randKey.nama}* ${randKey.cap}`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: falfa})
dha.relayWAMessage(prep)
break
}
	
if (buttonsR === 'LIKE') {
love.push(sender)
fs.writeFileSync('./src/love.json', JSON.stringify(love))
reply(`1 FOLOWERS DITAMBAHKAN`)
break
}

if (budy.includes(`SOSMED`)) {
data = fs.readFileSync('./lib/sosmed.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`LIKE`,buttonText:{displayText:'LIKE'},type:1},{buttonId:`SCROL`,buttonText:{displayText:'SCROL'},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nama}.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`SOSMED INSTAN`, imageMessage: imageMsg,
contentText:`❤ *${love.length}*\n*${randKey.nama}* ${randKey.cap}`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: falfa})
dha.relayWAMessage(prep)
break
}
			
if (!isOwner) return
if (budy.startsWith('> ')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



