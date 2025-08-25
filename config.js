const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923552881214";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923552881214";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_04_08_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM3LFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibHRJVDRLcHVIekdTTG4yZjB0NG5NTEtxVGxESElQbGZ4WmprMDhnZXFHWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMzM0NTkzNzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg3MUJCQ0FGMjM2Rjk1ODhDREY3ODMxODM5MjIyNEU5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NjEwMTg4MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIzMzQ1OTM3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTQ4NEQwMjU2N0E3NkNBRTAxMDc2RjczRTIwOEI4OTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU2MTAxODgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZ5d2t5SW84VHl5MUt2aEtXOGtlQlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWNjODczZTUtNmE4MC00M2IyLWI5MzAtNDUyYmZhMjgyZDZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgOTksXG4gICAgICAxOTYsXG4gICAgICA0MSxcbiAgICAgIDM3LFxuICAgICAgMjYsXG4gICAgICA2MixcbiAgICAgIDIzMCxcbiAgICAgIDE4OCxcbiAgICAgIDEyOSxcbiAgICAgIDI4LFxuICAgICAgNzksXG4gICAgICAxMzcsXG4gICAgICAyMzEsXG4gICAgICA1MixcbiAgICAgIDEzNyxcbiAgICAgIDEzNSxcbiAgICAgIDc3LFxuICAgICAgMjAzLFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDUxLFxuICAgICAgMjA0LFxuICAgICAgMjIzLFxuICAgICAgNzEsXG4gICAgICAxMjUsXG4gICAgICAyMyxcbiAgICAgIDE5MSxcbiAgICAgIDIxMyxcbiAgICAgIDE5NCxcbiAgICAgIDEzNixcbiAgICAgIDIwNyxcbiAgICAgIDEwMCxcbiAgICAgIDE0MyxcbiAgICAgIDcyLFxuICAgICAgMjI4LFxuICAgICAgMTc3LFxuICAgICAgNyxcbiAgICAgIDE3MyxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEUWtaNERFTy81cjhVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU2c1SXIvYkQxL0RmSWxoT1B2MlN2cFdvRjROY1UyRDhaSlBkOVRFSW9Tbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrbzJUK0V0N1FMK01EZzZrbmMwdUg1L3hTRW9hMDF1Zlk5YXFiM0NBMWhhL1ZUaUs2eHZycHdlYnBLaHpnTmRZWHRCU1lYVnAvQUNHSU4vMTdHY3NCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXZyt2UXVINDlQMUt6UFI2V0RoTnZjK1RmSW8rZ0JNTHl6RHJkQk90QzdOckpENGgzT3A2TEF3M3ZvNURiZUpqaThjTHMybHYwbW5pYXBDd29RdFdpdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIzMzQ1OTM3ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MTQ5NzMxMjIwMjk0Mjo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkITJouG0j8mqc+G0m8mq4bSEIPCdkIXhtI/htIrJqsmqXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMzM0NTkzNzg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NjEwMTg3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdhWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2FZLmpzb24iOiAie1wia2V5RGF0YVwiOlwid3ZBMk95VjY5YjVZNnFWazcwYng0ZUw1WGtTZ3JQQy9lWVJGZzBOL21JZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4Njg1MDk4MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NjEwMTg3ODQ2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",










