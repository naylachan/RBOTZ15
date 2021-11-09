// NOTES : JGN DI JUAL + THX DI GANTI
// BY RIMURUBOTZ
// 3% GW ENC BUAT MENGHINDARI JUAL BELI
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./X2/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./X2/functions')
const { fetchJson, fetchText } = require('./X2/fetcher')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg') 
const { recognize } = require('./X2/ocr')
const brainly = require('brainly-scraper')  
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch') 
const setting = JSON.parse(fs.readFileSync('./X1/> settings.json'))
prefix = setting.prefix
OwnerNumber = 62882007289925
nama = KenzGanteng
tz = setting.tz
donasi = Wa Own
dana = Wa Own
gopay = Wa Own
pulsa = Wa Own
namabot = KenzBotz
const _antilink = []
const _antivirtex = []
const blocked = []
// CONST MENU
const { help } = require('./X1/help')
const { textpro } = require('./X1/textpro')
const { audiomenu } = require('./X1/audiomenu')
const { grubmenu } = require('./X1/grubmenu')
const { gamemenu } = require('./X1/gamemenu')
const { imageanime } = require('./X1/imageanime')
const { ownermenu } = require('./X1/ownermenu')
const { randommenu } = require('./X1/randommenu')
const { randomanime } = require('./X1/randomanime')
const { randomtext } = require('./X1/randomtext')
const { raterandom } = require('./X1/raterandom')
const { sticktagrandom } = require('./X1/sticktagrandom')
const { vcardrandom } = require('./X1/vcardrandom')
const { tagrandom } = require('./X1/tagrandom')
const { asupan } = require('./X1/asupan')
const { search } = require('./X1/search')
const { allmenu } = require('./X1/allmenu')
// CONST AUDIO 
undef2 = fs.readFileSync('./X3/tag1.webp')
audio1 = fs.readFileSync('./X4/nyz1.m4a')
audio2 = fs.readFileSync('./X4/nyz2.m4a')
audio3 = fs.readFileSync('./X4/nyz3.m4a')
audio4 = fs.readFileSync('./X4/nyz4.m4a')
audio5 = fs.readFileSync('./X4/nyz5.m4a')
audio6 = fs.readFileSync('./X4/nyz6.m4a')
audio7 = fs.readFileSync('./X4/nyz7.m4a')
audio8 = fs.readFileSync('./X4/nyz8.m4a')
audio9 = fs.readFileSync('./X4/nyz9.m4a')
audio10 = fs.readFileSync('./X4/nyz10.m4a')
audio11 = fs.readFileSync('./X4/nyz11.m4a')
audio12 = fs.readFileSync('./X4/nyz12.m4a')
audio13 = fs.readFileSync('./X4/nyz13.m4a')
audio14 = fs.readFileSync('./X4/nyz14.m4a')
audio15 = fs.readFileSync('./X4/nyz15.m4a')
audio16 = fs.readFileSync('./X4/nyz16.m4a')
audio17 = fs.readFileSync('./X4/nyz17.m4a')
audio18 = fs.readFileSync('./X4/nyz18.m4a')
audio19 = fs.readFileSync('./X4/nyz19.m4a')
audio20 = fs.readFileSync('./X4/nyz20.m4a')
audio22 = fs.readFileSync('./X4/nyz22.m4a')
audio23 = fs.readFileSync('./X4/nyz23.m4a')
audio24 = fs.readFileSync('./X4/nyz24.m4a')
audio25 = fs.readFileSync('./X4/nyz25.m4a')
audio26 = fs.readFileSync('./X4/nyz26.m4a')
audio27 = fs.readFileSync('./X4/nyz27.m4a')
audio28 = fs.readFileSync('./X4/nyz28.m4a')
audio29 = fs.readFileSync('./X4/nyz29.m4a')
audio30 = fs.readFileSync('./X4/nyz30.m4a')
audio31 = fs.readFileSync('./X4/nyz31.m4a')
audio32 = fs.readFileSync('./X4/nyz32.m4a')
audio33 = fs.readFileSync('./X4/nyz33.m4a')
audio34 = fs.readFileSync('./X4/nyz34.m4a')
audio35 = fs.readFileSync('./X4/nyz35.m4a') 
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`
            }
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()			 
            function monospace(string) {
            return '```' + string + '```'
            }
            async function starts() {
         	const _0x46e91c=_0x1af4;(function(_0x1356a3,_0x5b6743){const _0xa0d2f7=_0x1af4,_0x945607=_0x1356a3();while(!![]){try{const _0x435bf8=parseInt(_0xa0d2f7(0xf7))/0x1+parseInt(_0xa0d2f7(0xf6))/0x2*(-parseInt(_0xa0d2f7(0xf8))/0x3)+parseInt(_0xa0d2f7(0xe8))/0x4+-parseInt(_0xa0d2f7(0xf5))/0x5+parseInt(_0xa0d2f7(0xee))/0x6*(parseInt(_0xa0d2f7(0xef))/0x7)+parseInt(_0xa0d2f7(0xf1))/0x8*(-parseInt(_0xa0d2f7(0xf3))/0x9)+parseInt(_0xa0d2f7(0xe7))/0xa;if(_0x435bf8===_0x5b6743)break;else _0x945607['push'](_0x945607['shift']());}catch(_0x266ebf){_0x945607['push'](_0x945607['shift']());}}}(_0x4196,0xb6eb7));const nayla=new WAConnection();function _0x1af4(_0x38f056,_0x62ec61){const _0x4196b9=_0x4196();return _0x1af4=function(_0x1af498,_0x3e3505){_0x1af498=_0x1af498-0xe0;let _0x3dfed4=_0x4196b9[_0x1af498];return _0x3dfed4;},_0x1af4(_0x38f056,_0x62ec61);}function _0x4196(){const _0x2c5655=['232yhvBui','string','363825FtUARP','log','1450780NrXack','1530332ZUvkiC','964122EHvxPq','3huFCzX','level','existsSync','jid','warn','NOMER\x20BOT\x20:\x20','./simi.json','connecting','1450430MHAHpC','1754568xIlnin','open','user','Connected','logger','loadAuthInfo','65454BSzKwP','917xcDSaH','Connecting...'];_0x4196=function(){return _0x2c5655;};return _0x4196();}nayla['version']=[0x2,0x85e,0xc],nayla[_0x46e91c(0xec)][_0x46e91c(0xe0)]=_0x46e91c(0xe3),console[_0x46e91c(0xf4)](banner[_0x46e91c(0xf2)]),nayla['on']('qr',()=>{}),fs[_0x46e91c(0xe1)]('./simi.json')&&nayla[_0x46e91c(0xed)](_0x46e91c(0xe5)),nayla['on'](_0x46e91c(0xe6),()=>{const _0x3cb784=_0x46e91c;start('2',_0x3cb784(0xf0));}),nayla['on'](_0x46e91c(0xe9),()=>{const _0x324a93=_0x46e91c;success('2',_0x324a93(0xeb)),console[_0x324a93(0xf4)](_0x324a93(0xe4)+nayla[_0x324a93(0xea)][_0x324a93(0xe2)]);});
        	await nayla.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./simi.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))	 
        	nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
         	})
            function addMetadata(packname, author) {
			if (!packname) packname = 'termux-bot-wa'; if (!author) author = ' budy';
			author = author.replace(/[^a-zA-Z0-9]/g, '');
			let name = `${author}_${packname}`
			if (fs.existsSync(`./X3/stickers/${name}.exif`)) {
			return `./X3/stickers/${name}.exif`
			}
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
			fs.writeFile(`./X3/stickers/${name}.exif`, buffer, (err) => {
			return `./X3/stickers/${name}.exif`
			}
			)
		    }		    
	        nayla.on('group-participants-update', async (anu) => { 	    
		    function getJeneng (jid)  {
  			let v = jid === nayla.user.jid ? nayla.user : nayla.contacts[jid] || { notify: jid.replace(/@.+/, '') }
  			let PhoneNumber = jid.split('@')[0]
  			return v.notify || '+'+PhoneNumber
 	 		}
		    const memJid = anu.participants[0]
		    const pushnem = getJeneng(memJid)
		    try {
			const mdata = await nayla.groupMetadata(anu.jid)
			const iniGc = anu.jid.endsWith('@g.us')
			const jumlahMem = iniGc ? mdata.participants : ''
			if (anu.action == 'add') {
			try {
			ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
	    	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	    	}
            teks = `[ *SELAMAT DATANG* ]\n${tz} *NAME* : @${memJid.split('@')[0]}\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${jumlahMem.length}`	       
	        let buff = await getBuffer(ppimg) 
		    nayla.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, thumbnail:Buffer.alloc(0), contextInfo: { mentionedJid: [memJid] }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: `${mdata.subject}`, jpegThumbnail: ppimg, remoteJid: "status@broadcast"}}}})
		    } 
            if (anu.action == 'remove') {
           	try {
			ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	     	}
            out = `[ *SELAMAT TINGGAL* ]\n${tz} *NAME* : @${memJid.split('@')[0]}\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${jumlahMem.length}`           
            let buff = await getBuffer(ppimg)
            nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: out, thumbnail:Buffer.alloc(0), contextInfo: { mentionedJid: [memJid] }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: `${mdata.subject}`, jpegThumbnail: ppimg, remoteJid: "status@broadcast"}}}})
            }
		    } catch (e) {
			console.log('Error : %s')
		    }
        	})        	 
         	nayla.on('chat-update', async (nay) => {
	    	try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			global.prefix
			global.blocked
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
			const type = Object.keys(nay.message)[0]			 
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm')
			const wita = moment.tz('Asia/Makassar').format('HH:mm')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()			
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)	
			runtime = process.uptime()
			const isGroup = from.endsWith('@g.us')
			const botNumber = nayla.user.jid
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const senderNumber = sender.split("@")[0] 
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const ownerNumber = [`${setting.OwnerNumber}@s.whatsapp.net`]
			const isOwner = ownerNumber.includes(sender)
			const isGroupAdmins = groupAdmins.includes(sender) || false	
			const isAntiLink = isGroup ? _antilink.includes(from) : false 
			const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false	 
			nay1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`} } }
			buttonsR = (type === 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedDisplayText : '' || ''
			aq = args.join(' ')
			const txt = nay.message.conversation
			mess = {
			wait: '[𝐖𝐀𝐈𝐓] 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈𝐏𝐑𝐎𝐒𝐄𝐒',
			success: '𝐒𝐔𝐊𝐒𝐄𝐒',
			error: {
	        bug: '𝐓𝐄𝐑𝐉𝐀𝐃𝐈 𝐊𝐄𝐒𝐀𝐋𝐀𝐇𝐀𝐍',
			stick: ' *𝐆𝐀𝐆𝐀𝐋, 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐎𝐁𝐀 𝐋𝐀𝐆𝐈 𝐀𝐓𝐀𝐔 𝐆𝐔𝐍𝐀𝐊𝐀𝐍 𝐌𝐄𝐃𝐈𝐀 𝐋𝐀𝐈𝐍*',
			Iv: '*𝐋𝐈𝐍𝐊 𝐓𝐈𝐃𝐀𝐊 𝐕𝐀𝐋𝐈𝐃*'
			},
			only: {
			group: '*𝐎𝐍𝐋𝐘 𝐆𝐑𝐔𝐁*',
			benned: '*𝐀𝐍𝐃𝐀 𝐓𝐄𝐋𝐀𝐇 𝐓𝐄𝐑𝐁𝐀𝐍𝐍𝐄𝐃*',
			ownerG: '*𝐎𝐍𝐋𝐘 𝐎𝐖𝐍𝐄𝐑 𝐀𝐃𝐌𝐈𝐍 𝐆𝐑𝐔𝐁*',
			ownerB: '*𝐎𝐍𝐋𝐘 𝐎𝐖𝐍𝐄𝐑* ',
			premium: '*𝐎𝐍𝐋𝐘 𝐔𝐒𝐄𝐑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌*',			 
			admin: '*𝐎𝐍𝐋𝐘 𝐀𝐃𝐌𝐈𝐍 𝐆𝐑𝐔𝐁*',
			Badmin: '*𝐁𝐎𝐓 𝐁𝐔𝐊𝐀𝐍 𝐀𝐃𝐌𝐈𝐍*',
			}
			}			
			const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nama}\n`
            + 'ORG:Owner;\n'
            + `TEL;type=CELL;type=VOICE;waid=${OwnerNumber}:+${OwnerNumber}\n`
            + 'END:VCARD'
            function _0x2e3e(){const _0xfaec24=['BETA','8jBFvUP','823185xdWdSP','216096TiLjOi','https://x-restapi.herokuapp.com','1867458BPissz','2659448CtcMqX','2380406rFyHRb','Devilbotz','333445qvcTCf','https://hardianto-chan.herokuapp.com','703580zihFzE','https://pencarikode.xyz'];_0x2e3e=function(){return _0xfaec24;};return _0x2e3e();}function _0x136d(_0x44e50d,_0xc5ebd){const _0x2e3e37=_0x2e3e();return _0x136d=function(_0x136db8,_0x45b341){_0x136db8=_0x136db8-0x11a;let _0x2b6777=_0x2e3e37[_0x136db8];return _0x2b6777;},_0x136d(_0x44e50d,_0xc5ebd);}const _0x8912f=_0x136d;(function(_0x2fdee1,_0x500da9){const _0xca4d4e=_0x136d,_0xb52248=_0x2fdee1();while(!![]){try{const _0x56dc34=parseInt(_0xca4d4e(0x125))/0x1+-parseInt(_0xca4d4e(0x120))/0x2+parseInt(_0xca4d4e(0x124))/0x3+parseInt(_0xca4d4e(0x123))/0x4*(-parseInt(_0xca4d4e(0x11e))/0x5)+parseInt(_0xca4d4e(0x11a))/0x6+parseInt(_0xca4d4e(0x11c))/0x7+-parseInt(_0xca4d4e(0x11b))/0x8;if(_0x56dc34===_0x500da9)break;else _0xb52248['push'](_0xb52248['shift']());}catch(_0x2b21c9){_0xb52248['push'](_0xb52248['shift']());}}}(_0x2e3e,0x4f261));const restv1='https://api-devilbot.herokuapp.com',apiv1=_0x8912f(0x11d),restv2=_0x8912f(0x11f),apiv2='hardianto',restv3=_0x8912f(0x121),restv4=_0x8912f(0x126),apiv4=_0x8912f(0x122);
			function _0x4c16(_0xc2e7f8,_0x2e60a9){var _0x3c83d5=_0x3c83();return _0x4c16=function(_0x4c1664,_0x25d241){_0x4c1664=_0x4c1664-0x8f;var _0x353fb2=_0x3c83d5[_0x4c1664];return _0x353fb2;},_0x4c16(_0xc2e7f8,_0x2e60a9);}var _0x1fc6dd=_0x4c16;(function(_0x85b386,_0x26c89d){var _0x334cd7=_0x4c16,_0x5e33f1=_0x85b386();while(!![]){try{var _0x2f1230=-parseInt(_0x334cd7(0x97))/0x1+parseInt(_0x334cd7(0x90))/0x2*(-parseInt(_0x334cd7(0x92))/0x3)+parseInt(_0x334cd7(0x8f))/0x4*(parseInt(_0x334cd7(0x99))/0x5)+parseInt(_0x334cd7(0x95))/0x6*(-parseInt(_0x334cd7(0x9c))/0x7)+-parseInt(_0x334cd7(0x9a))/0x8+parseInt(_0x334cd7(0x96))/0x9+parseInt(_0x334cd7(0x94))/0xa*(parseInt(_0x334cd7(0x98))/0xb);if(_0x2f1230===_0x26c89d)break;else _0x5e33f1['push'](_0x5e33f1['shift']());}catch(_0x1773ee){_0x5e33f1['push'](_0x5e33f1['shift']());}}}(_0x3c83,0x47bde),helppp='\x0a'+tz+_0x1fc6dd(0x93)+tz+_0x1fc6dd(0x91)+tz+'\x20*LORD\x20RYNZ*\x0a'+tz+_0x1fc6dd(0x9b)+tz+'\x20*'+nama+'*',helpp=''+(help(tz,nama,namabot,prefix,day,yy,thisDay,bulan,wib,wita,wit)+helppp));function _0x3c83(){var _0x5374bd=['\x20*NAYLA\x20[\x20OTHER\x20]*\x0a','15mWOngA','\x20*WHATSAPP*\x0a','190OMVsFX','24jcDdmT','1337328ithemy','259033ySKQyI','658185zATkMi','211445maHtih','2978864SJFYhD','\x20*LOLI\x20KILLERS*\x0a','120113qhpMqS','4XTGZtt','133546hNmoyO'];_0x3c83=function(){return _0x5374bd;};return _0x3c83();}
			const reply = (teks) => {
			const B1C = {contentText: teks, footerText: `${tz} *FITUR* : ${command}\n${tz} *NOTES* : Beri jeda untuk penggunaan fitur ini, agar tidak menyebabkan spam, demi kepentingan bersama`, headerType: 1}      
			nayla.sendMessage(from, B1C, MessageType.buttonsMessage, {quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}				
			const query = (teks) => {nayla.sendMessage(from, `${tz} Text nya mana kak?\n${tz} contoh : ${prefix + command} ${teks}`, text, {quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}				
			const sendAudio = (teks) => {nayla.sendMessage(from, teks, audio, {mimetype:"audio/mp4", thumbnail:Buffer.alloc(0), quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}
			const sendVn = (teks) => {nayla.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}
			const sendImage = (teks, teks1) => {nayla.sendMessage(from, teks, image, {caption:teks1, quoted:nay1, thumbnail:Buffer.alloc(0), contextInfo: {forwardingScore: 508, isForwarded: true}})}
			const sendVideo = (teks, teks1) => {nayla.sendMessage(from, teks, video, {caption:teks1, thumbnail:Buffer.alloc(0), quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}
			const sendStick = (teks) => {nayla.sendMessage(from, teks, sticker, {quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}
			const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nayla.sendMessage(from, teks.trim(), extendedText, {quoted: nay1, contextInfo: {"mentionedJid": memberr}})}									
			const sendB1 = (teks, teks1) => {
			const A1 = [
            {buttonId: 'id1', buttonText: {displayText: `${teks}`}, type: 1}]
            const B1 = {contentText: teks1, footerText: `© ${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,buttons: A1,headerType: 1}      
			nayla.sendMessage(from, B1, MessageType.buttonsMessage, {quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}		
			const sendB2 = (teks, teks1, teks2) => {
			const A2 = [
            {buttonId: 'id1', buttonText: {displayText: `${teks1}`}, type: 1},
            {buttonId: 'id2', buttonText: {displayText: `${teks2}`}, type: 1}]
            const B2 = {contentText: teks, footerText: `© ${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,buttons: A2,headerType: 1}      
			nayla.sendMessage(from, B2, MessageType.buttonsMessage, {quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}			
			const sendB3 = (teks, teks1, teks2, teks3) => {
			const A3 = [
            {buttonId: 'id1', buttonText: {displayText: `${teks1}`}, type: 1},
            {buttonId: 'id2', buttonText: {displayText: `${teks2}`}, type: 1},
            {buttonId: 'id3', buttonText: {displayText: `${teks3}`}, type: 1}]
            const B3 = {contentText: teks, footerText: `© ${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,buttons: A3,headerType: 1}      
			nayla.sendMessage(from, B3, MessageType.buttonsMessage, {quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}					
			const sendMess = (hehe, teks) => {
			const A4 = [
            {buttonId: 'id1', buttonText: {displayText: `DONASI`}, type: 1},
            {buttonId: 'id2', buttonText: {displayText: `OWNERBOT`}, type: 1},
            {buttonId: 'id3', buttonText: {displayText: `INFOBOT`}, type: 1}]
            const B4 = {contentText: teks, footerText: `© ${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,buttons: A4,headerType: 1}      
			nayla.sendMessage(hehe, B4, MessageType.buttonsMessage, {quoted:nay1,contextInfo: {forwardingScore: 508, isForwarded: true}})}		 
			const mentionByTag = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ? nay.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ? nay.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []	 	      
			codename = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined
		    if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ ${namabot} ]`, 'yellow'), color('NAMA', 'red'), color(codename, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ ${namabot} ]`, 'yellow'), color('NAMA', 'red'), color(codename, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))	
			angka = ['1','2','3','4','5','6','7','8','9']
			const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]
			const randomnay2 = angka[Math.floor(Math.random() * (angka.length))]
			if (buttonsR === 'ALLMENU') {
			menu2 = fs.readFileSync('./X3/help.jpeg') 
            const menu3 = await nayla.prepareMessage(from, menu2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const menu4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}] 
            const menu5 = {
            contentText: allmenu(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: menu4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: menu3.message.imageMessage
            }
            nayla.sendMessage(from, menu5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})
		    }	     
			if (buttonsR === 'DONASI') {
			swa = `${donasi}\n• *PULSA* : ${pulsa}\n• *GOPAY* : ${gopay}\n• *DANA* : ${dana}`
			sendB1("OWNERBOT", swa)
			}			 
			var _0x1e9719=_0x1f8f;(function(_0x1c1687,_0x47dfbe){var _0x2f536b=_0x1f8f,_0x521f31=_0x1c1687();while(!![]){try{var _0x2a5fe8=-parseInt(_0x2f536b(0x1e2))/0x1+-parseInt(_0x2f536b(0x1fd))/0x2+parseInt(_0x2f536b(0x1ea))/0x3*(parseInt(_0x2f536b(0x1dd))/0x4)+-parseInt(_0x2f536b(0x1f7))/0x5+-parseInt(_0x2f536b(0x1e6))/0x6+parseInt(_0x2f536b(0x1ef))/0x7+-parseInt(_0x2f536b(0x1e3))/0x8*(-parseInt(_0x2f536b(0x1e7))/0x9);if(_0x2a5fe8===_0x47dfbe)break;else _0x521f31['push'](_0x521f31['shift']());}catch(_0x13145d){_0x521f31['push'](_0x521f31['shift']());}}}(_0x2586,0x976fd));buttonsR===_0x1e9719(0x1ec)&&(any=tz+_0x1e9719(0x1e8)+nayla[_0x1e9719(0x1da)][_0x1e9719(0x1e1)]+_0x1e9719(0x1f5)+tz+_0x1e9719(0x1ff)+nayla[_0x1e9719(0x1eb)][_0x1e9719(0x1fc)][_0x1e9719(0x1df)]+'\x0a\x0a'+tz+'\x20*MCC\x20:*\x20'+nayla[_0x1e9719(0x1eb)][_0x1e9719(0x1fc)][_0x1e9719(0x1de)]+'\x0a\x0a'+tz+'\x20*MANUFACTURER\x20:*\x20'+nayla[_0x1e9719(0x1eb)][_0x1e9719(0x1fc)][_0x1e9719(0x1e4)]+'\x0a\x0a'+tz+'\x20*MNC\x20:*\x20'+nayla[_0x1e9719(0x1eb)][_0x1e9719(0x1fc)][_0x1e9719(0x1e9)]+'\x0a\x0a'+tz+_0x1e9719(0x200)+nayla[_0x1e9719(0x1eb)][_0x1e9719(0x1fc)][_0x1e9719(0x1fa)]+'\x0a\x0a'+tz+_0x1e9719(0x1ee)+nayla[_0x1e9719(0x1eb)]['phone']['device_model']+'\x0a\x0a'+tz+_0x1e9719(0x1f2)+nayla['version']+'\x0a\x0a'+tz+_0x1e9719(0x1f1)+nayla[_0x1e9719(0x1eb)]['phone'][_0x1e9719(0x1f6)]+'\x0a\x0a'+tz+_0x1e9719(0x1dc)+nayla['browserDescription'][0x1]+'\x0a\x0a'+tz+'\x20*SERVER\x20:*\x20'+nayla['browserDescription'][0x0]+'\x0a\x0a'+tz+_0x1e9719(0x1f2)+nayla[_0x1e9719(0x1ed)][0x2]+'\x0a\x0a'+tz+_0x1e9719(0x1f4)+nayla['pendingRequestTimeoutMs']+'\x0a\x0a'+tz+'\x20*STATE\x20:*\x20'+nayla[_0x1e9719(0x1f8)]+'\x0a\x0a'+tz+_0x1e9719(0x1fb)+nayla[_0x1e9719(0x1f3)]+'\x0a\x0a'+tz+_0x1e9719(0x1f0)+nayla[_0x1e9719(0x1e5)]+'\x0a\x0a'+tz+_0x1e9719(0x1e0)+nayla[_0x1e9719(0x1fe)]+'\x0a\x0a'+tz+_0x1e9719(0x1d9)+nayla[_0x1e9719(0x1db)][_0x1e9719(0x1f9)],reply(any));function _0x1f8f(_0x2515a6,_0x191ef8){var _0x258688=_0x2586();return _0x1f8f=function(_0x1f8fe6,_0x5d7c40){_0x1f8fe6=_0x1f8fe6-0x1d9;var _0x4f5455=_0x258688[_0x1f8fe6];return _0x4f5455;},_0x1f8f(_0x2515a6,_0x191ef8);}function _0x2586(){var _0xe24015=['\x20*BUILD\x20:*\x20','\x20*VERSION\x20:*\x20','autoReconnect','\x20*REQUEST\x20:*\x20','\x20\x0a\x0a','os_build_number','1864560eDRLtV','state','level','os_version','\x20*AUTO\x20RECONNECT\x20:*\x20','phone','1659904MuxHLd','phoneCheckListeners','\x20*WA\x20VERSION*\x20:\x20','\x20*OS\x20VERSION\x20:*\x20','\x20*LOGGER\x20LEVEL\x20:*\x20','blocklist','logger','\x20*BROWSER\x20:*\x20','4219612KyuXSL','mcc','wa_version','\x20*CONTACT\x20CHEKLIST\x20:*\x20','length','252372TAmKtw','5724664FdkKRS','device_manufacturer','msgCount','5538936ZuhsWj','18pRefFJ','\x20*TOTAL\x20BLOCK\x20:*\x20','mnc','3yScvoO','user','INFOBOT','browserDescription','\x20*MODEL\x20:*\x20','3588256bBOTyB','\x20*MESSAGE\x20LOG\x20:*\x20'];_0x2586=function(){return _0xe24015;};return _0x2586();}
            if (buttonsR === 'OWNERBOT') {
            try {				
			ppim = await nayla.getProfilePicture(`${setting.ownerNumber}@c.us`)
			imgwa = await getBuffer(ppim)
			} catch {imgwa = fs.readFileSync('X2/undef1.jpeg')}		
            nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
            reply("𝐓𝐮𝐡 𝐍𝐨𝐦𝐞𝐫 𝐎𝐰𝐧𝐞𝐫𝐤𝐮")
            } 
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')          								 
			colors = ['red','white','black','blue','yellow','green']		     
		    switch(command) {
		    case 'textpro':		    
		    helpz2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpz3 = await nayla.prepareMessage(from, helpz2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpz4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpz5 = {            
            contentText: textpro(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpz4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpz3.message.imageMessage
            }
            nayla.sendMessage(from, helpz5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'audiomenu':		    
		    helpz22 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpz33 = await nayla.prepareMessage(from, helpz22, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpz44 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpz55 = {            
            contentText: audiomenu(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpz44,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpz33.message.imageMessage
            }
            nayla.sendMessage(from, helpz55, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'grubmenu':		    
		    helpzz2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzz3 = await nayla.prepareMessage(from, helpzz2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzz4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzz5 = {            
            contentText: grubmenu(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzz4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzz3.message.imageMessage
            }
            nayla.sendMessage(from, helpzz5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'gamemenu':		    
		    helpzzz2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzzz3 = await nayla.prepareMessage(from, helpzzz2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzzz4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzzz5 = {            
            contentText: gamemenu(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzzz4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzzz3.message.imageMessage
            }
            nayla.sendMessage(from, helpzzz5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'imageanime':		    
		    helpzzzz2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzzzz3 = await nayla.prepareMessage(from, helpzzzz2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzzzz4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzzzz5 = {            
            contentText: imageanime(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzzzz4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzzzz3.message.imageMessage
            }
            nayla.sendMessage(from, helpzzzz5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'ownermenu':		    
		    helpzq2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzq3 = await nayla.prepareMessage(from, helpzq2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzq4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzq5 = {            
            contentText: ownermenu(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzq4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzq3.message.imageMessage
            }
            nayla.sendMessage(from, helpzq5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'randomanime':		    
		    helpzqq2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzqq3 = await nayla.prepareMessage(from, helpzqq2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzqq4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzqq5 = {            
            contentText: randomanime(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzqq4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzqq3.message.imageMessage
            }
            nayla.sendMessage(from, helpzqq5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'randommenu':		    
		    helpzqqq2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzqqq3 = await nayla.prepareMessage(from, helpzqqq2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzqqq4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzqqq5 = {            
            contentText: randommenu(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzqqq4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzqqq3.message.imageMessage
            }
            nayla.sendMessage(from, helpzqqq5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'randomtext':		    
		    helpzv2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzv3 = await nayla.prepareMessage(from, helpzv2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzv4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzv5 = {            
            contentText: randomtext(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzv4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzv3.message.imageMessage
            }
            nayla.sendMessage(from, helpzv5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'raterandom':		    
		    helpzvv2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzvv3 = await nayla.prepareMessage(from, helpzvv2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzvv4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzvv5 = {            
            contentText: raterandom(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzvv4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzvv3.message.imageMessage
            }
            nayla.sendMessage(from, helpzvv5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'sticktagrandom':		    
		    helpzvvv2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzvvv3 = await nayla.prepareMessage(from, helpzvvv2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzvvv4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzvvv5 = {            
            contentText: sticktagrandom(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzvvv4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzvvv3.message.imageMessage
            }
            nayla.sendMessage(from, helpzvvv5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'vcardrandom':		    
		    helpzx2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzx3 = await nayla.prepareMessage(from, helpzx2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzx4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzx5 = {            
            contentText: vcardrandom(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzx4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzx3.message.imageMessage
            }
            nayla.sendMessage(from, helpzx5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'tagrandom':		    
		    helpzxx2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzxx3 = await nayla.prepareMessage(from, helpzxx2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzxx4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzxx5 = {            
            contentText: tagrandom(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzxx4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzxx3.message.imageMessage
            }
            nayla.sendMessage(from, helpzxx5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'asupan':		    
		    helpzxxx2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzxxx3 = await nayla.prepareMessage(from, helpzxxx2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzxxx4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzxxx5 = {            
            contentText: asupan(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzxxx4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzxxx3.message.imageMessage
            }
            nayla.sendMessage(from, helpzxxx5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 
		    case 'search':		    
		    helpzw2 = fs.readFileSync(`./X3/help.jpeg`) 
            const helpzw3 = await nayla.prepareMessage(from, helpzw2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const helpzw4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'OWNERBOT'}, type: 1}]                          
            const helpzw5 = {            
            contentText: search(tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit),
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: helpzw4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: helpzw3.message.imageMessage
            }
            nayla.sendMessage(from, helpzw5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})            
		    break				    		 		     		     
		    case 'menu':
			menu2 = fs.readFileSync(`./X3/help.jpeg`) 
            const menu3 = await nayla.prepareMessage(from, menu2, MessageType.image, {thumbnail:Buffer.alloc(0)}) 
            const menu4 = [{buttonId: 'id1', buttonText: {displayText: 'DONASI'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'INFOBOT'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'ALLMENU'}, type: 1}] 
            const menu5 = {
            contentText: helpp,
            footerText: `${nama}\n ${tz} RUNTIME : ${kyun(runtime)}`,
            buttons: menu4,
            headerType: 4,
            thumbnail:Buffer.alloc(0),
            imageMessage: menu3.message.imageMessage
            }
            nayla.sendMessage(from, menu5, MessageType.buttonsMessage, {quoted: nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})
		    break 				
		    case 'hidetag': 
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)	
			if (!aq) return reply(`TEXT NYA MANA KAK??`)		       
			var value = body.slice(9)
			var group = await nayla.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
    		quoted: nay
			}
			nayla.sendMessage(from, options, text)			 
			break  				 		 
			case 'brainly':
			if (args.length < 1) return reply('𝐓𝐞𝐱𝐭𝐧𝐲𝐚 𝐦𝐚𝐧𝐚?')				
            brien = body.slice(9)
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
			}
			reply(teks)			
			})								
			break 			 
			case 'sticker':  
         	case 'stiker':  
         	case 'stickergif':  
         	case 'stikergif':  
         	case 'sgif':  
         	case 's':	 
         	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
         	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
         	const media = await nayla.downloadAndSaveMediaMessage(encmedia)
         	ran = getRandom('.webp')
         	await ffmpeg(`./${media}`)
         	.input(media)
         	.on('start', function (cmd) {         	 
          	})
         	.on('error', function (err) {
         	console.log(`Error : ${err}`)
         	fs.unlinkSync(media)
         	reply(mess.wait)
         	})
         	.on('end', function () {
         	console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RIMURUBOTZ')
         	nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
		    fs.unlinkSync(media)
         	fs.unlinkSync(ran)
         	})
         	.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
            min'(320,ih)':  
            force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
         	.save(ran)
         	} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
         	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
         	const media = await nayla.downloadAndSaveMediaMessage(encmedia)
         	ran = getRandom('.webp')
         	reply(mess.wait)
         	await ffmpeg(`./${media}`)
         	.inputFormat(media.split('.')[1])
         	.on('start', function (cmd) {         	 
         	})
         	.on('error', function (err) {
         	console.log(`Error : ${err}`)
         	fs.unlinkSync(media)
         	tipe = media.endsWith('.mp4') ? 'video' : 'gif'
         	reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
         	})
         	.on('end', function () {
         	console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RIMURUBOTZ')
         	nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
         	fs.unlinkSync(media)
         	fs.unlinkSync(ran)
         	})
         	.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
          	min'(320,ih)':  
           	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
         	.toFormat('webp')
         	.save(ran)
         	} else {
         	reply(`𝐤𝐢𝐫𝐢𝐦/𝐭𝐚𝐠 𝐟𝐨𝐭𝐨 𝐚𝐭𝐚𝐮 𝐯𝐢𝐝𝐞𝐨 𝐛𝐞𝐫𝐝𝐮𝐫𝐚𝐬𝐢 1-6 𝐝𝐞𝐭𝐢𝐤 𝐝𝐞𝐧𝐠𝐚𝐧 𝐜𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix}sticker`)
         	}
         	break				 
			case 'owner':
			try {				
			ppim = await nayla.getProfilePicture(`${setting.ownerNumber}@c.us`)
			imgwa = await getBuffer(ppim)
			} catch {imgwa = fs.readFileSync('X2/undef1.jpeg')}		
            nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
            reply("𝐓𝐮𝐡 𝐍𝐨𝐦𝐞𝐫 𝐎𝐰𝐧𝐞𝐫𝐤𝐮")
            break		 			 			 			 
			case 'leave': 
			if (!isGroup) return reply(mess.only.group)
			anu = await nayla.groupLeave(from, `𝐒𝐚𝐲𝐨𝐧𝐚𝐫𝐚`, groupId)
			break				 			 
			case 'truth':    				
			anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, {method: 'get'})
			ttrth = `${anu.Dare}`
	    	truteh = await getBuffer(`https://i.ibb.co/tLSj5y3/661198f0710d.jpg`)
			sendImage(truteh, '*𝐓𝐫𝐮𝐭𝐡*\n\n'+ ttrth)			 
			break 
			case 'dare':    				
			anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
			der = `${anu.Dare}`
			tod = await getBuffer(`https://i.ibb.co/tLSj5y3/661198f0710d.jpg`)
	    	nayla.sendMessage(from, tod, image, { quoted: nay, caption: '*𝐃𝐚𝐫𝐞*\n\n'+ der	})			 
		    break 			 		 			 				 			 
			case 'delete':
			case 'd':
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break			 
			case 'toimg':
			if (!isQuotedSticker) return reply('𝐑𝐞𝐩𝐥𝐲 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐍𝐲𝐚 𝐊𝐚𝐤')
			encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await nayla.downloadAndSaveMediaMessage(encmedia)
			ran= getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('𝐄𝐫𝐫𝐨𝐫')
			buffer = fs.readFileSync(ran)
			sendImage(buffer, "NEHH KAK")
			fs.unlinkSync(ran)
			})
			break 
			case 'antivirtext':
			case 'antivirtex':                                                            
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (args.length < 1) return reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntiVirtex) return reply('𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱𝐭 𝐭𝐞𝐥𝐚𝐡 𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚')
			_antivirtex.push(from)
			fs.writeFileSync('./X2/antivirtex.json', JSON.stringify(_antivirtex))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else if ((args[0]) === 'off') {
			if (!isAntiVirtex) return reply('𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱𝐭 𝐭𝐞𝐥𝐚𝐡 𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐡𝐚')
			_antivirtex.splice(from, 1)
			fs.writeFileSync('./X2/antivirtex.json', JSON.stringify(_antivirtex))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else {
			reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			}
			break			 
			case 'antilink':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (args.length < 1) return reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntiLink) return reply(`𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐬𝐮𝐝𝐚𝐡 𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚`)
			_antilink.push(from)
			fs.writeFileSync('./X2/antilink.json', JSON.stringify(_antilink))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else if ((args[0]) === 'off') {
			if (!isAntiLink) return reply(`𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐬𝐮𝐝𝐚𝐡 𝐨𝐟𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚`)
			_antilink.splice(from, 1)
			fs.writeFileSync('./X2/antilink.json', JSON.stringify(_antilink))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else {
			reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}antilink off`)
			}
			break 	
			case 'kick':
            if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)			 
			if (!isGroup) {
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
			mentions(mentioned, true)
			nayla.groupRemove(from, mentioned)
			} else {
			await nayla.groupRemove(from, mentionUser)
			reply(`SUCCESS`)
			}
			break
			case 'add':	
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)				 
			if (args.length < 1) return reply('NOMER NYA MANA')
			if (args[0].startsWith('08')) return reply('GUNAKAN KODE NEGARA!')
			try {
			num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
			nayla.groupAdd(from, [num])
			} catch (e) {
			console.log('Error :', e)
			reply('GAGAL MENAMBAHKAN TARGET, MUNGKIN KARENA DI PRIVATE')
			}
			break			 		 
			case 'listonline': 
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
        	let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
		    let online = [...Object.keys(nayla.chats.get(ido).presences), nayla.user.jid]
		    nayla.sendMessage(from, 'LIST ONLINE:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: nay1,
  		    contextInfo: { mentionedJid: online }
		    })			 
			break
			case 'group':		
			case 'grub':
			case 'grup':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)				 
			if (args[0] === 'buka') {
		    reply(`*BERHASIL MEMBUKA GROUP*`)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
			} else if (args[0] === 'tutup') {
			reply(`*BERHASIL MENUTUP GROUP*`)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
			}			 
			break      
			case 'setname': 
			if (args.length < 1) return reply('𝐓𝐞𝐱𝐭𝐧𝐲𝐚 𝐦𝐚𝐧𝐚?')		   
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)			 
            nayla.groupUpdateSubject(from, `${body.slice(9)}`)
            nayla.sendMessage(from, 'SUCCES, GANTI NAMA GRUP', text, {quoted: nay1 })			
			break
            case 'setdesc': 
            if (args.length < 1) return reply('𝐓𝐞𝐱𝐭𝐧𝐲𝐚 𝐦𝐚𝐧𝐚?')		
            if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)				
            nayla.groupUpdateDescription(from, `${body.slice(9)}`)
            nayla.sendMessage(from, 'SUCCES, GANTI DESKRIPSI GRUP', text, {quoted:nay1 })				
			break	
	    	case 'listadmin':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)				 
			teks = `NAMA *${groupMetadata.subject}*\nTOTAL : ${groupAdmins.length}\n\n`
			no = 0
			for (let admon of groupAdmins) {
			no += 1
			teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
			}
			mentions(teks, groupAdmins, true)			 
			break
			case 'linkgc':	
			case 'linkgrub':
			case 'linkgrup':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)				 
		    linkgc = await nayla.groupInviteCode (from)
		    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
		    reply(yeh)		         
			break	
			case 'tagall':	
		    if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `${tz} @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break			 			 				 
	     	case 'tomp3':                                    				
           	nayla.updatePresence(from, Presence.recording) 
			if (!isQuotedVideo) return reply('𝐑𝐞𝐩𝐥𝐲 𝐯𝐢𝐝𝐞𝐨𝐧𝐲𝐚 𝐤𝐚𝐤')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await nayla.downloadAndSaveMediaMessage(encmedia)
	    	ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('𝐄𝐫𝐫𝐨𝐫')
			bufferlkj = fs.readFileSync(ran)
			nayla.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: nay})
			fs.unlinkSync(ran)
			})
			break 
			case 'bc': 
			if (!isOwner) return reply('ONLY OWNER') 
			if (args.length < 1) return reply('.......')
			anu = await nayla.chats.all()
			if (isMedia && !nay.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
			buff = await nayla.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			nayla.sendMessage(_.jid, buff, image, {caption: `[ *${namabot} BROADCAST* ]\n\n${body.slice(4)}`})
			}
			reply(_.jid)
			reply('*SUCCESS BROADCAST*')
			} else {
			for (let _ of anu) {
	    	sendMess(_.jid, `[ *${namabot} BROADCAST* ]\n\n${tz} *DARI* : ${nama}\n${tz} *TIME* : ${time}\n${tz} *PESAN* : ${body.slice(4)}`)
 			}
			reply('*SUCCESS BROADCAST* ')
			}			
			break		
			case 'bcgc':
			if (!isOwner) return reply('ONLY OWNER') 
			if (args.length < 1) return reply('.......')
			anu = await groupMembers				 
			if (isMedia && !nay.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
			buff = await nayla.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			nayla.sendMessage(_.jid, buff, image, {caption: aq})
			}
			reply('')
			} else {
			for (let _ of anu) {
			sendMess(_.jid, aq)
			}
			reply('SUKSES BROADCAST GROUP')
			}			 
			break 
			case 'setprefix':
	     	if (args.length < 1) return reply('PREFIX NYA APA?')
			if (!isOwner) return reply("ONLY OWNER")
            prefix = args[0] 
            reply(`SUKSES SET PREFIX KE ${prefix}`)
            break   
            case 'settz':
	     	if (args.length < 1) return reply('PREFIX NYA APA?')
			if (!isOwner) return reply("ONLY OWNER")
            tz = args[0] 
            reply(`SUKSES SET TZ KE ${tz}`)
            break   
            case 'join':
			if (!isOwner) return reply("ONLY OWNER") 
			if (isGroup) return reply('GUNAKAN FITUR INI DI PESAN PRIBADI')
			try {
		    ini_url = args[0]
			if (args.length < 1) return reply(`LINK NYA MANA??`)	
			var codeInvite = ini_url.split('https://chat.whatsapp.com/')[1]
			if (!codeInvite) return reply('pastikan link sudah benar!')
			var response = await nayla.acceptInvite(codeInvite)
			reply('SUKSES!!!, JGN LUPA SUBSCRIBE https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw')
			} catch {
			reply('LINK ERROR!')
			}
			break			  	
			case 'setppbot':
		    if (!isOwner) return reply("ONLY OWNER") 
		    nayla.updatePresence(from, Presence.composing) 
			if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
			enmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await nayla.downloadAndSaveMediaMessage(enmedia)
			await nayla.updateProfilePicture(botNumber, media)
			reply('SUKSES!!!')			  
			break			 
			case 'return':
		    if (!isOwner) return reply("ONLY OWNER")
            try {
            return nayla.sendMessage(from, JSON.stringify(eval(budy.slice(8)),null,'\t'),text, {quoted: nay1})
            } catch(err) {
            e = String(err)
            reply(e)
            }
            break
            case 'brainly2': 
		    if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	   	    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
		    const media = await nayla.downloadAndSaveMediaMessage(encmedia)
		    await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
	        .then(teks => {								 
		    fs.unlinkSync(media)							                           
            brainly(`${teks}`).then(res => {
		    teks = '❉───────────────────────❉\n'
		    for (let Y of res.data) {
		    teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
		    }
		  	reply(teks)			
		    })			
            }) 
            } else { reply("Reply foto soal nya kak")}       	
            break  
            case 'growstock':
            if (args.length < 1) return query("rayman")
            nay2 = await fetchJson(`${restv4}/api/growstock-search?q=${aq}&apikey=${apiv4}`)
            nay3 = 'GROWSTOCK\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *TITLE* : ${nyz.title}\n`
            nay3 += `${tz} *PRICE* : ${nyz.price}\n`
            nay3 += `${tz} *EDITEDAT* : ${nyz.editedAt}\n\n`
            }
            reply(nay3)
            break 
            case 'moddroid':
            if (args.length < 1) return query("Instagram")
            nay2 = await fetchJson(`${restv4}/api/moddroid-search?q=${aq}&apikey=${apiv4}`)
            nay3 = 'MODDROID\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *TITLE* : ${nyz.title}\n`
            nay3 += `${tz} *URL* : ${nyz.url}\n`
            nay3 += `${tz} *IMG* : ${nyz.img}\n\n`
            }
            reply(nay3)
            break  
            case 'kodepos':
            if (args.length < 1) return query("makassar")
            nay2 = await fetchJson(`${restv4}/api/codepos-search?q=${aq}&apikey=${apiv4}`)
            nay3 = 'KODE POS\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *PROVINCE* : ${nyz.province}\n`
            nay3 += `${tz} *CITY* : ${nyz.city}\n`
            nay3 += `${tz} *SUBDISTRICT* : ${nyz.subdistrict}\n`
            nay3 += `${tz} *URBAN* : ${nyz.urban}\n`
            nay3 += `${tz} *POSTALCODE* : ${nyz.postalcode}\n\n`            
            }
            reply(nay3)
            break      
            case 'artikata':
            if (args.length < 1) return query("senja")
            nay2 = await fetchJson(`${restv4}/api/arti-kata?q=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *ARTI* : ${nay2.artikata}`            
            reply(nay3)
            break  
            case 'katabijak':
            if (args.length < 1) return query("senja")
            nay2 = await fetchJson(`${restv4}/api/kata-bijak?q=${aq}&apikey=${apiv4}`)
            nay3 = 'KATA BIJAK\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *AUTHOR* : ${nyz.author}\n`
            nay3 += `${tz} *KATABIJAK* : ${nyz.katabijak}\n`
            nay3 += `${tz} *VOTECOUNT* : ${nyz.voteCount}\n\n`
            }
            reply(nay3)
            break   
            case 'grubwa':
            case 'grupwa':
            if (args.length < 1) return query("bts")
            nay2 = await fetchJson(`${restv4}/api/search-grup?q=${aq}&apikey=${apiv4}`)
            nay3 = 'GRUB WA\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *JUDUL* : ${nyz.judul}\n`
            nay3 += `${tz} *LINK* : ${nyz.link}\n\n`
            }
            reply(nay3)
            break  
            case 'stalkyt':
            if (args.length < 1) return query("rimurubotz")
            nay2 = await fetchJson(`${restv4}/api/yt-stalk?username=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *CHANNEL* : ${nay2.channel}\n`
            nay3 += `${tz} *SUBSCRIBERCOUNT* : ${nay2.subscriberCount}\n`
            nay3 += `${tz} *ISVERIFIED* : ${nay2.isVerified}\n`
            nay3 += `${tz} *ISFAMILYFRIENDLY* : ${nay2.isFamilyFriendly}\n`
            nay3 += `${tz} *LINK* : ${nay2.link}\n`
            nay3 += `${tz} *DESCRIPTION* : ${nay2.description}`
            reply(nay3)
            break
            case 'stalktt':
            case 'stalktiktok':
            if (args.length < 1) return query("jokowi")
            nay2 = await fetchJson(`${restv4}/api/tiktok-stalk?username=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *USERNAME* : ${nay2.username}\n`
            nay3 += `${tz} *FOLLOWER* : ${nay2.followerCount}\n`
            nay3 += `${tz} *FOLLOWING* : ${nay2.followingCount}\n`
            nay3 += `${tz} *ISPRIVATE* : ${nay2.isprivate}\n`
            nay3 += `${tz} *CREATETIME* : ${nay2.createtime}\n`
            nay3 += `${tz} *ID* : ${nay2.id}`
            reply(nay3)
            break  
            case 'pinterest':
            if (args.length < 1) return query("kucing")
            nay2 = await fetchJson(`${restv4}/api/pinterest?q=${aq}&apikey=${apiv4}`)
            reply(mess.wait)
            nay3 = await getBuffer(nay2.image) 
            sendImage(nay3, "NIH KAK")
            break       
            case 'shopee':
            if (args.length < 1) return query("boneka")
            nay2 = await fetchJson(`${restv4}/api/shopee-search?q=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *NAME* : ${nay2.name}\n`             
			nay3 += `${tz} *CURRENCY* : ${nay2.currency}\n`             
			nay3 += `${tz} *STOCK* : ${nay2.stock}\n`             
			nay3 += `${tz} *SOLD* : ${nay2.sold}\n`             
			nay3 += `${tz} *HISTORICAL_SOLD* : ${nay2.historical_sold}\n`             
			nay3 += `${tz} *LIKED_COUNT* : ${nay2.liked_count}\n`             
			nay3 += `${tz} *VIEW_COUNT* : ${nay2.view_count}\n`             
			nay3 += `${tz} *CATID* : ${nay2.catid}\n`             
			nay3 += `${tz} *BRAND* : ${nay2.brand}\n`             
			nay3 += `${tz} *BRAND* : ${nay2.brand}\n`             
			nay3 += `${tz} *CMT_COUNT* : ${nay2.cmt_count}\n`             
			nay3 += `${tz} *ITEM_STATUS* : ${nay2.item_status}\n`             
			nay3 += `${tz} *PRICE* : ${nay2.price}\n`             
			nay3 += `${tz} *PRICE_MIN* : ${nay2.price_min}\n`             
			nay3 += `${tz} *PRICE_MAX* : ${nay2.price_max}\n`             
			nay3 += `${tz} *DISCOUNT* : ${nay2.discount}\n`             
			nay3 += `${tz} *ITEM_RATING* : ${nay2.item_rating}\n`             
			nay3 += `${tz} *IS_ADULT* : ${nay2.is_adult}\n`             
			nay3 += `${tz} *SHOPEE_VERIFIED* : ${nay2.shopee_verified}\n`             
			nay3 += `${tz} *SHOP_LOCATION* : ${nay2.shop_location}`             
			reply(nay3)
			break
			case 'youwatch':
            if (args.length < 1) return query("vagabond")
            nay2 = await fetchJson(`${restv4}/api/youwatch-search?q=${aq}&apikey=${apiv4}`)
            nay3 = 'YOUWATCH\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *TITLE* : ${nyz.title}\n`
            nay3 += `${tz} *IMG* : ${nyz.image}\n`
            nay3 += `${tz} *CATEGORY* : ${nyz.category}\n`            
            nay3 += `${tz} *SOURCE* : ${nyz.source}\n\n`
            }
            reply(nay3)
            break  
            case 'doramaindo':
            if (args.length < 1) return query("love")
            nay2 = await fetchJson(`${restv4}/api/doramaindo-search?q=${aq}&apikey=${apiv4}`)
            nay3 = 'DORAMAINDO\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *TITLE* : ${nyz.title}\n`
            nay3 += `${tz} *IMG* : ${nyz.image}\n`
            nay3 += `${tz} *STATUS* : ${nyz.status}\n` 
            nay3 += `${tz} *GENRE* : ${nyz.genre}\n`           
            nay3 += `${tz} *SOURCE* : ${nyz.source}\n\n`
            }
            reply(nay3)
            break  	
            case 'artinama':
            if (args.length < 1) return query("Nayla")
            nay2 = await fetchJson(`${restv4}/api/artinama?q=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *ARTI* : ${nay2.data}`            
            reply(nay3)
            break  	
            case 'artimimpi':
            if (args.length < 1) return query("Ular")
            nay2 = await fetchJson(`${restv4}/api/arti-mimpi?q=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *ARTI* : ${nay2.result}`            
            reply(nay3)
            break  	
            case 'zodiak':
            if (args.length < 1) return query("gemini")
            nay2 = await fetchJson(`${restv4}/api/zodiak?q=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *UMUM* : ${nay2.umum}\n`
            nay3 += `${tz} *LOVE* : ${nay2.love}\n`
            nay3 += `${tz} *KEUANGAN* : ${nay2.keuangan}`
            reply(nay3)
            break 
            case 'topmanga':
            nay2 = await fetchJson(`${restv4}/api/topmanga?apikey=${apiv4}`)
            nay3 = 'TOP MANGA\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *JUDUL* : ${nyz.Judul}\n`
            nay3 += `${tz} *SCORE* : ${nyz.Score}\n`
            nay3 += `${tz} *INFORMASI* : ${nyz.Informasi}\n`            
            nay3 += `${tz} *LINK* : ${nyz.Link}\n\n`
            }
            reply(nay3)
            break 
            case 'topanime':
            nay2 = await fetchJson(`${restv4}/api/topanime?apikey=${apiv4}`)
            nay3 = 'TOP ANIME\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *JUDUL* : ${nyz.Judul}\n`
            nay3 += `${tz} *SCORE* : ${nyz.Score}\n`
            nay3 += `${tz} *INFORMASI* : ${nyz.Informasi}\n`            
            nay3 += `${tz} *LINK* : ${nyz.Link}\n\n`
            }
            reply(nay3)
            break 
            case 'samehadaku':
            if (args.length < 1) return query("naruto")
            nay2 = await fetchJson(`${restv4}/api/samehadaku-search?q=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *TITLE* : ${nay2.title}\n`
            nay3 += `${tz} *URL* : ${nay2.url}\n`
            nay3 += `${tz} *DESK* : ${nay2.desc}`
            reply(nay3)
            break  
            case 'manga':
            if (args.length < 1) return query("daemon")
            nay2 = await fetchJson(`${restv4}/api/mangatoon-search?q=${aq}&apikey=${apiv4}`)
            nay3 = 'MANGA\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *TITLE* : ${nyz.title}\n`
            nay3 += `${tz} *IMG* : ${nyz.image}\n`
            nay3 += `${tz} *TYPE* : ${nyz.type}\n`            
            nay3 += `${tz} *URL* : ${nyz.url}\n\n`
            }
            reply(nay3)
            break 
            case 'smanga':            
            if (args.length < 1) return query("naruto")
            nay2 = await fetchJson(`${restv4}/api/manga-search?q=${aq}&apikey=${apiv4}`)
            nay3 = 'SEARCH MANGA\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *ID* : ${nyz.id}\n`
            nay3 += `${tz} *TYPE* : ${nyz.type}\n`
            nay3 += `${tz} *NAME* : ${nyz.name}\n`            
            nay3 += `${tz} *IMAGE URL* : ${nyz.image_url}\n`            
            nay3 += `${tz} *SCORE* : ${nyz.score}\n`            
            nay3 += `${tz} *STATUS* : ${nyz.status}\n`            
            nay3 += `${tz} *MEDIA TYPE* : ${nyz.media_type}\n`            
            nay3 += `${tz} *START YEAR* : ${nyz.start_year}\n`            
            nay3 += `${tz} *PUBLISHED* : ${nyz.published}\n\n`
            }
            reply(nay3)
            break 
            case 'konachan':
            if (args.length < 1) return query("azur_lane")
            nay2 = await fetchJson(`${restv4}/api/konachan-search?q=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *ID* : ${nay2.id}\n`
            nay3 += `${tz} *POSTAT* : ${nay2.postAt}\n`
            nay3 += `${tz} *SIZE* : ${nay2.size}\n`
            nay3 += `${tz} *RATING* : ${nay2.rating}\n`
            nay3 += `${tz} *SCORE* : ${nay2.score}\n`
            nay3 += `${tz} *SOURCE* : ${nay2.source}\n`
            nay3 += `${tz} *IMAGE* : ${nay2.image}`
            reply(nay3)
            break 
            case 'neonime':
            nay2 = await fetchJson(`${restv4}/api/neonimeongoing?apikey=${apiv4}`)             
            nay3 = 'NEONIME\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *TITLE* : ${nyz.Judul}\n`
            nay3 += `${tz} *URL* : ${nyz.Link}\n\n`
            }
            reply(nay3)
            break
            case 'malanime':
            if (args.length < 1) return query("naruto")
            nay2 = await fetchJson(`${restv4}/api/malanime?q=${aq}&apikey=${apiv4}`)             
            nay3 = `${tz} *TITLE* : ${nay2.title}\n`
            nay3 += `${tz} *SCORE* : ${nay2.score}\n`
            nay3 += `${tz} *MEMBER* : ${nay2.member}\n`
            nay3 += `${tz} *URL* : ${nay2.url}\n`
            nay3 += `${tz} *DESKRIPSI* : ${nay2.deskripsi}`
            reply(nay3)
            break 
            case 'anoboy':
            nay2 = await fetchJson(`${restv4}/api/anoboy-last?apikey=${apiv4}`)             
            nay3 = 'ANOBOY\n'             
            for (let nyz of nay2.data) {
            nay3 += `${tz} *TITLE* : ${nyz.title}\n`
            nay3 += `${tz} *TIME* : ${nyz.time}\n\n`
            }
            reply(nay3)
            break 
            case 'wallanime': case 'kemono': case 'neko': case 'shota': case 'husbu': case 'waifu': case 'loli':        
            reply(mess.wait)
            nay2 = await fetchJson(`${restv4}/api/random-${command}?apikey=${apiv4}`)
            nay3 = await getBuffer(nay2.link)
            sendImage(nay3, "NIHH KAK")
            break
            case 'zoro': case 'luffy': case 'sanji': case 'ussop': case 'nami': case 'copper': case 'naruto': case 'minato': case 'sasuke': case 'sakura': case 'boruto': case 'sarada': case 'mitsuki': case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'saitama': case 'rimuru': case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku':   
            nay2 = await fetchJson(`${restv4}/api/pinterest?q=${command}&apikey=${apiv4}`)
            reply(mess.wait)
            nay3 = await getBuffer(nay2.image) 
            sendImage(nay3, "NIH KAK")
            break  
            case 'dark': case 'darkjoke': case 'darkjokes':
            reply(mess.wait)
            nay2 = await fetchJson(`${restv4}/api/random-darkjoke?apikey=${apiv4}`)
            nay3 = await getBuffer(nay2.urlimage)
            sendImage(nay3, "NIHH KAK")
            break 
            case 'pantun':
            nay2 = await fetchJson(`${restv4}/api/random-pantun?apikey=${apiv4}`)             
            nay3 = `${tz} *PANTUN* : \n${nay2.pantun}`            
            reply(nay3)
            break 
            case 'bucin':
            nay2 = await fetchJson(`${restv4}/api/random-bucin?apikey=${apiv4}`)             
            nay3 = `${tz} *BUCIN* : \n${nay2.bucin}`            
            reply(nay3)
            break 
            case 'fakta':
            nay2 = await fetchJson(`${restv4}/api/random-fakta?apikey=${apiv4}`)             
            nay3 = `${tz} *FAKTA* : \n${nay2.fakta}`            
            reply(nay3)
            break  
            case 'motivasi':
            nay2 = await fetchJson(`${restv4}/api/random-motivasi?apikey=${apiv4}`)             
            nay3 = `${tz} *MOTIVASI* : \n${nay2.motivasi}`            
            reply(nay3)
            break 
            case 'kuni-nsfw':
            case 'boobs-nsfw':
            case 'yuri-nsfw':
            case 'kitsune-nsfw':
            case 'kemonomimi-nsfw':
            case 'blowjob-nsfw':
            case 'neko-nsfw':
            if (isGroup) return reply("SILAHKAN GUNAKAN FITUR INI DI PESAN PRIBADI")
            reply(mess.wait)
            nay2 = await fetchJson(`${restv4}/api/neko-nsfw?apikey=${apiv4}`)
            nay3 = await getBuffer(nay2.url)
            sendImage(nay3, "NIHH KAK")
            break 
            case 'audio1':
            sendVn(audio1)
            break   
            case 'audio2':
            sendVn(audio2)
            break       
            case 'audio3':
            sendVn(audio3)
            break       
            case 'audio4':
            sendVn(audio4)
            break       
            case 'audio5':
            sendVn(audio5)
            break       
            case 'audio6':
            sendVn(audio6)
            break       
            case 'audio7':
            sendVn(audio7)
            break       
            case 'audio8':
            sendVn(audio8)
            break       
            case 'audio9':
            sendVn(audio9)
            break       
            case 'audio10':
            sendVn(audio10)
            break       
            case 'audio11':
            sendVn(audio11)
            break       
            case 'audio12':
            sendVn(audio12)
            break       
            case 'audio13':
            sendVn(audio13)
            break       
            case 'audio14':
            sendVn(audio14)
            break       
            case 'audio15':
            sendVn(audio15)
            break       
            case 'audio16':
            sendVn(audio16)
            break       
            case 'audio17':
            sendVn(audio17)
            break       
            case 'audio18':
            sendVn(audio18)
            break       
            case 'audio19':
            sendVn(audio19)
            break  
            case 'audio20':
            sendAudio(audio20)
            break 
            case 'audio21':
            sendVn(audio21)
            break   
            case 'audio22':
            sendVn(audio22)
            break   
            case 'audio23':
            sendVn(audio23)
            break   
            case 'audio24':
            sendVn(audio24)
            break   
            case 'audio25':
            sendVn(audio25)
            break   
            case 'audio26':
            sendVn(audio26)
            break   
            case 'audio27':
            sendVn(audio27)
            break   
            case 'audio28':
            sendVn(audio28)
            break   
            case 'audio29':
            sendVn(audio29)
            break   
            case 'audio30':
            sendVn(audio30)
            break   
            case 'audio31':
            sendVn(audio31)
            break   
            case 'audio32':
            sendVn(audio32)
            break   
            case 'audio33':
            sendVn(audio33)
            break   
            case 'audio34':
            sendVn(audio34)
            break   
            case 'audio35':
            sendVn(audio35)
            break               	  	
            case 'xkontol':	
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')				 	
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xganteng': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xcantik': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjelek': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xgoblok': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				  
            case 'xbego': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xpintar': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjago': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xnolep': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
		    case 'xmonyet':		     
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				                 	 
            case 'xbabi': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xbeban': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xbaik': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjahat': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xanjing':  
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				
            case 'xharam': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xkontol': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xpakboy': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xpakgirl':  
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				
            case 'xwibu': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xhebat': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xsadboy': 
			if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
		    case 'xsadgirl': 
		    if (!isGroup) return reply("ONLY GRUB")
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break  
			case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
            case 'bego': case 'pintar': case 'jago': case 'nolep': case 'monyet':                 	 
            case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
            case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
            case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':
			if (!isGroup) return reply("ONLY GRUB") 	 
 		    jds = []
		    const A12 = groupMembers
  		    const B12 = groupMembers
 		    const C12 = A12[Math.floor(Math.random() * A12.length)]
	 	    D12 = `Emh.. seperti biasa yang *ter${command}* disini pasti @${C12.jid.split('@')[0]}`                  
		    jds.push(C12.jid)
	  	    mentions(D12, jds, true)
	 	    break   
	 	    case 'vganteng': case 'vcantik': case 'vjelek': case 'vgoblok':  
            case 'vbego': case 'vpintar': case 'vjago': case 'vnolep': case 'vmonyet':                 	 
            case 'vbabi': case 'vbeban': case 'vbaik': case 'vjahat': case 'vanjing': 
            case 'vharam': case 'vkontol': case 'vpakboy': case 'vpakgirl': 
            case 'vwibu': case 'vhebat': case 'vsadboy': case 'vsadgirl':			
			if (!isGroup) return reply("ONLY GRUP")
 		    jds = []
		    const AS1 = groupMembers
 		    const CS1 = AS1[Math.floor(Math.random() * AS1.length)]	 	                      
 		    const vcardd = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${command1}\n` 
            + `ORG: NAK ${command1};\n`
            + `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
            + 'END:VCARD' 
            nayla.sendMessage(from, {displayname: "Jeff", vcard: vcardd}, MessageType.contact, { quoted: nay1})
            reply(`wkwk dia yang *ter${command1}* disini`)			
	 	    break	 	     
            case 'zganteng': case 'zcantik': case 'zjelek': case 'zgoblok':  
            case 'zbego': case 'zpintar': case 'zjago': case 'znolep': case 'zmonyet':                 	 
            case 'zbabi': case 'zbeban': case 'zbaik': case 'zjahat': case 'zanjing': 
            case 'zharam': case 'zkontol': case 'zpakboy': case 'zpakgirl': 
            case 'zwibu': case 'zhebat': case 'zsadboy': case 'zsadgirl':
            nyy = fs.readFileSync('./X3/tag2.webp')
           	if (!isGroup) return reply("ONLY GRUB") 	 
		    const AS11 = groupMembers		     
 		    const CS21 = AS11[Math.floor(Math.random() * AS11.length)]	 	    		     
			nayla.sendMessage(from, nyy, sticker, {quoted: { key: { fromMe: false, participant: `${CS21.jid.split('@')[0]}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `aku adalah yang ter${command1} disini:v` }}})
			break 
            case 'gantengcek':
            N = `KE *GANTENGAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'cantikcek':
            N = `KE *CANTIKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}% :v*`
            reply(N)
            break
            case 'jelekcek':                 	
            N = `KE *J3L3K4N* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'goblokcek':
            N = `KE *GOBLOKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'begocek':
            N = `KE *BEGO* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pintercek': 
            case 'pintarcek':
            N = `KE *PINTARAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jagocek': 
            N = `KE *JAGOAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'nolepcek': 
            N = `KE *NOLEPAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'babicek': 
            N = `KE *BABIAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'bebancek':
            N = `KE *BEBANAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'baikcek':
            N = `KE *BAIKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jahatcek': 
            N = `KE *JAHATAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'anjingcek': 
            N = `KE *ANJINGAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break              
            case 'haramcek':
            N = `KE *HARAMAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break  
            case 'kontolcek': 
            N = `KE *KOMTOLAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakboycek': 
            N = `KE *PAKBOYZ* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakgirlcek':	
            N = `KE *PAKGILR* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break             
            case 'sangecek':
            N = `JIWA *SANGE* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break
            case 'bapercek':
            N = `JIWA *BEPERAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'merdeka':
            nay2 = await fetchJson(`${restv3}/news/merdeka?apikey=APIKEY`)
            nay3 = 'MERDEKA\n'             
            for (let nyz of nay2.result) {  
            nay3 += `${tz} *JUDUL* : ${nyz.judul}\n`
            nay3 += `${tz} *UPTIME* : ${nyz.uptime}\n`
            nay3 += `${tz} *LINK* : ${nyz.link}\n\n`
            }
            reply(nay3)
            break 
            case 'antaranews':
            nay2 = await fetchJson(`${restv3}/news/antaranews?apikey=APIKEY`)
            nay3 = 'MERDEKA\n'             
            for (let nyz of nay2.result) {  
            nay3 += `${tz} *JUDUL* : ${nyz.title}\n`
            nay3 += `${tz} *INFO* : ${nyz.info}\n`
            nay3 += `${tz} *LINK* : ${nyz.link}\n\n`
            }
            reply(nay3)
            break 
            case 'summery-sand': case 'glue-text': case 'sand-engraved': case 'beach': case 'sand-writing': case 'vintage': case 'gradient': case 'luxury': case 'sky': case 'winter': case 'christmas': case 'matrix': case 'halloween': case 'blood': case 'xmas': case 'glossy-carbon': case 'deluxe-gold': case 'glossy-blue': case 'deluxe-silver': case 'metal-purple': case 'holographic-3d': case '1917-style': case 'minion-text': case 'neon-light': case 'metal-dark':  case 'break-wall': case 'dropwater': case 'horror': case 'thunder': case 'toxic': case 'skeleton': case 'lava': case 'firework': case 'leaves': case 'wicker': case 'joker': case 'blackpink':
            if (args.length < 1) return query("nayla")
            reply(mess.wait)
            try{
            nay2 = await getBuffer(`${restv3}=/api/textpro/${command}?text=${aq}&apikey=APIKEY`)
            sendImage(nay2, "NIH KAK")
            } catch (e) { reply("ERROR")}
            break	
            case 'susunkata':
            nay2 = await fetchJson(`${restv2}/api/susunkata?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *SUSUN KATA* ]\n${tz} *SOAL* : ${nay2.math.soal}\n${tz} *INDEX* : ${nay2.math.index}\n${tz} *TYPE* : ${nay2.math.tipe}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.math.jawaban}`)
            }, 30000)
            break	
            case 'tebakkalimat':
            nay2 = await fetchJson(`${restv2}/api/${command}?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *TEBAK KALIMAT* ]\n${tz} *SOAL* : ${nay2.math.soal}\n${tz} *INDEX* : ${nay2.math.index}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.math.jawaban}`)
            }, 30000)
            break	
            case 'tebakkata':
            nay2 = await fetchJson(`${restv2}/api/${command}?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *TEBAK KATA* ]\n${tz} *SOAL* : ${nay2.math.soal}\n${tz} *INDEX* : ${nay2.math.index}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.math.jawaban}`)
            }, 30000)
            break		    	
            case 'tebakkimia':
            nay2 = await fetchJson(`${restv2}/api/${command}?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *TEBAK KIMIA* ]\n${tz} *SOAL* : ${nay2.math.lambang}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.math.unsur}`)
            }, 30000)
            break	
            case 'tebaklirik':
            nay2 = await fetchJson(`${restv2}/api/${command}?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *TEBAK LIRIK* ]\n${tz} *SOAL* : ${nay2.math.soal}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.math.jawaban}`)
            }, 30000)
            break		    	  	    
            case 'tebaktebakan':
            nay2 = await fetchJson(`${restv2}/api/${command}?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *TEBAK TEBAKAN* ]\n${tz} *SOAL* : ${nay2.math.soal}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.math.jawaban}`)
            }, 30000)
            break	
            case 'tekateki':
            nay2 = await fetchJson(`${restv2}/api/${command}?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *TEKA TEKI* ]\n${tz} *SOAL* : ${nay2.math.soal}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.math.jawaban}`)
            }, 30000)
            break             
            case 'asahotak':
            nay2 = await fetchJson(`${restv2}/api/${command}?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *ASAH OTAK* ]\n${tz} *SOAL* : ${nay2.math.soal}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.math.jawaban}`)
            }, 30000)
            break
            case 'caklontong':
            nay2 = await fetchJson(`${restv2}/api/kuis/${command}?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *CAKLONTONG* ]\n${tz} *SOAL* : ${nay2.result.soal}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.result.jawaban}\n${tz} *DESK* : ${nay2.result.deskripsi}`)
            }, 30000)
            break	
            case 'siapaaku':
            nay2 = await fetchJson(`${restv2}/api/${command}?apikey=${apiv2}`) 
            nayla.sendMessage(from, `[ *SIAPA AKU* ]\n${tz} *SOAL* : ${nay2.math.soal}\n\n[ *WAKTU 30 DETIK* ]`, text,{quoted:nay1}) 
            setTimeout( () => {
            nayla.sendMessage(from, "20 DETIK LAGI", text,{quoted:nay1})
            }, 10000)
            setTimeout( () => {
            nayla.sendMessage(from, "10 DETIK LAGI", text,{quoted:nay1})
            }, 20000)
            setTimeout( () => {
            reply(`[${tz}] WAKTU HABIS\n${tz} *JAWABAN* : ${nay2.math.jawaban}`)
            }, 30000)
            break  
            case 'nuliskiri': case 'nuliskanan': case 'foliokiri': case 'foliokanan':
            if (args.length < 1) return query("nayla")
            reply(mess.wait)
            try{
            nay2 = await getBuffer(`${restv2}/api/${command}?text=${aq}&apikey=${apiv2}`)
            sendImage(nay2, "NIH KAK")
            } catch (e) { reply("ERROR")}
            break	
            case 'attp': 
            if (args.length < 1) return query("nayla")
            reply(mess.wait)
            try{
            nay2 = await getBuffer(`${restv2}/api/maker/${command}?text=${aq}&apikey=${apiv2}`)
            sendStick(nay2)
            } catch (e) { reply("ERROR")}
            break
            case 'asupantiktok':  
            reply(mess.wait)
            try{
            nay2 = await fetchJson(`${restv1}/api/asupan?apikey=${apiv1}`)
            nay3 = await getBuffer(nay2.result.result)
            sendVideo(nay3, "NEH KAK")
            } catch (e) { reply("ERROR")}
            break     
            case 'asupancecan':  
            reply(mess.wait)
            try{
            nay2 = await fetchJson(`${restv1}/api/asupan/cecan?apikey=${apiv1}`)
            nay3 = await getBuffer(nay2.result.url)
            sendImage(nay3, "NEH KAK")
            } catch (e) { reply("ERROR")}
            break
            case 'asupanhijab':  
            reply(mess.wait)
            try{
            nay2 = await fetchJson(`${restv1}/api/asupan/hijaber?apikey=${apiv1}`)
            nay3 = await getBuffer(nay2.result.url)
            sendImage(nay3, "NEH KAK")
            } catch (e) { reply("ERROR")}
            break  
            case 'asupansantuy': case 'asupansantai':  
            reply(mess.wait)
            try{
            nay2 = await fetchJson(`${restv1}/api/asupan/santuy?apikey=${apiv1}`)
            nay3 = await getBuffer(nay2.result.url)
            sendVideo(nay3, "NEH KAK")
            } catch (e) { reply("ERROR")}
            break
            case 'asupanukty':
            reply(mess.wait)
            try{
            nay2 = await fetchJson(`${restv1}/api/asupan/ukty?apikey=${apiv1}`)
            nay3 = await getBuffer(nay2.result.url)
            sendVideo(nay3, "NEH KAK")
            } catch (e) { reply("ERROR")}
            break
            case 'asupanrika':
            reply(mess.wait)
            try{
            nay2 = await fetchJson(`${restv1}/api/asupan/rikagusriani?apikey=${apiv1}`)
            nay3 = await getBuffer(nay2.result.url)
            sendVideo(nay3, "NEH KAK")
            } catch (e) { reply("ERROR")}
            break                                               
			case 'asupanghea':
            reply(mess.wait)
            try{
            nay2 = await fetchJson(`${restv1}/api/asupan/ghea?apikey=${apiv1}`)
            nay3 = await getBuffer(nay2.result.url)
            sendVideo(nay3, "NEH KAK")
            } catch (e) { reply("ERROR")}
            break        
			case 'asupanbocil':
            reply(mess.wait)
            try{
            nay2 = await fetchJson(`${restv1}/api/asupan/bocil?apikey=${apiv1}`)
            nay3 = await getBuffer(nay2.result.url)
            sendVideo(nay3, "NEH KAK")
            } catch (e) { reply("ERROR")}
            break               
			default:	
			function _0x315a(){const _0x37b4d9=['BEGIN:VCARD\x0a','1754708irYpyf','ORG:Owner;\x0a','TEL;type=CELL;type=VOICE;waid=6282347260729:+6282347260729\x0a','includes','ownerNumber','4614048NhUAmo','5jGipSd','3659803okUXBB','3555531JqxvEg','2272sinfHA','10166123jEgOpo','VERSION:3.0\x0a','8dqXBOk','278JDASLY','Jeff','10UbgtfF','END:VCARD','@c.us','readFileSync','1580598hfIEay'];_0x315a=function(){return _0x37b4d9;};return _0x315a();}const _0x2a60ff=_0x555f;(function(_0x636b10,_0x45fca3){const _0x30d1a9=_0x555f,_0x4645c3=_0x636b10();while(!![]){try{const _0x5d90d8=parseInt(_0x30d1a9(0x1f6))/0x1*(-parseInt(_0x30d1a9(0x1fa))/0x2)+-parseInt(_0x30d1a9(0x1eb))/0x3+-parseInt(_0x30d1a9(0x1ed))/0x4+parseInt(_0x30d1a9(0x1f3))/0x5*(parseInt(_0x30d1a9(0x1f2))/0x6)+-parseInt(_0x30d1a9(0x1f4))/0x7*(-parseInt(_0x30d1a9(0x1f9))/0x8)+-parseInt(_0x30d1a9(0x1f5))/0x9*(parseInt(_0x30d1a9(0x1fc))/0xa)+parseInt(_0x30d1a9(0x1f7))/0xb;if(_0x5d90d8===_0x45fca3)break;else _0x4645c3['push'](_0x4645c3['shift']());}catch(_0x3284e3){_0x4645c3['push'](_0x4645c3['shift']());}}}(_0x315a,0x83be4));function _0x555f(_0x394158,_0xf7d3d2){const _0x315acb=_0x315a();return _0x555f=function(_0x555fef,_0x205d9d){_0x555fef=_0x555fef-0x1e9;let _0xf51e5a=_0x315acb[_0x555fef];return _0xf51e5a;},_0x555f(_0x394158,_0xf7d3d2);}if(budy[_0x2a60ff(0x1f0)](prefix+'other')){const vcaard=_0x2a60ff(0x1ec)+_0x2a60ff(0x1f8)+'FN:NAYLA\x0a'+_0x2a60ff(0x1ee)+_0x2a60ff(0x1ef)+_0x2a60ff(0x1fd);try{ppim=await nayla['getProfilePicture'](setting[_0x2a60ff(0x1f1)]+_0x2a60ff(0x1e9)),imgwa=await getBuffer(ppim);}catch{imgwa=fs[_0x2a60ff(0x1ea)]('X2/undef1.jpeg');}nayla['sendMessage'](from,{'displayname':_0x2a60ff(0x1fb),'vcard':vcaard},MessageType['contact'],{'quoted':nay1});}
			if (budy.includes("https://")){
	    	if (!isGroup) return
	     	if (!isAntiLink) return
	    	if (isGroupAdmins) return reply(`${codename} 𝐚𝐝𝐦𝐢𝐧? 𝐛𝐞𝐛𝐚𝐬`)
	    	nayla.updatePresence(from, Presence.composing)
	     	var Kick = `${sender.split("@")[0]}@s.whatsapp.net`	    	 
	    	setTimeout( () => {
	      	nayla.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
			}, 1000)
	    	setTimeout( () => {
	    	reply(`𝐥𝐢𝐧𝐤 𝐝𝐞𝐭𝐞𝐜𝐤 *${codename}*`)
	      	}, 0)
        	}
		    if (txt.length > 1500){
            if (!isGroup) return
	    	if (!isAntiVirtex) return
	    	if (isGroupAdmins) return reply(`${codename} 𝐚𝐝𝐦𝐢𝐧? 𝐛𝐞𝐛𝐚𝐬`)
	    	nayla.updatePresence(from, Presence.composing)
	    	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    	reply(`𝐕𝐢𝐫𝐭𝐞𝐱 𝐝𝐞𝐭𝐞𝐜𝐤 ${sender.split("@")[0]}`)
	     	setTimeout( () => {
			nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			nayla.blockUser(sender, "add")
	    	}, 0)
        	}		 		
			if (body.startsWith(`${prefix}${command}`)) {
			sendB1(`ALLMENU`, `Maaf, fitur ${prefix}${command} tidak terdaftar di dalam menu bot ${namabot}`)
			console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`User ${codename} menggunakan fitur yang tidak terdaftar di dalam menu`, 'purple'))
			} 		 
            }
	      	} catch (e) {
			console.log(`LIMIT TELAH MENCAPAI BATAS PENGGUNAAN HARI INI`)
	        }
	        })
            }
            starts()
