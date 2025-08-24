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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_12_08_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICA3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlc2M3FsQ1dZMHlqaDl5U2tDUFlYUkhqaytoNW1MZFpqSjdZOTVCOExqQ289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjMzNDU5Mzc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNzUyMjI2NzcwNTcwQzhCQThDQTg1ODc0OTc3MURGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTYwNDQ3NTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMzM0NTkzNzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ3MEM5NEE1MzRGNkI1QzU2OTQ3MUZFOEU1MjgxMzQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NjA0NDc1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJONk1xZ01yLVJ4V0VrenhlcjNiRlFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0MzM0ZjVjLWE5MWEtNDc1MC1iNmViLWNhN2I1NWZhOWU4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAxLFxuICAgICAgMTIsXG4gICAgICAxMDgsXG4gICAgICAxNyxcbiAgICAgIDE0OSxcbiAgICAgIDIwNSxcbiAgICAgIDExMCxcbiAgICAgIDkzLFxuICAgICAgMjQ2LFxuICAgICAgMjQ5LFxuICAgICAgMjI1LFxuICAgICAgMjU1LFxuICAgICAgMjQ2LFxuICAgICAgMTY5LFxuICAgICAgMjM3LFxuICAgICAgNjgsXG4gICAgICAzLFxuICAgICAgMjgsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDExOCxcbiAgICAgIDYsXG4gICAgICAxMDAsXG4gICAgICA5NixcbiAgICAgIDE3NixcbiAgICAgIDIwMSxcbiAgICAgIDE3MixcbiAgICAgIDExMyxcbiAgICAgIDE3MyxcbiAgICAgIDgsXG4gICAgICAxNCxcbiAgICAgIDgsXG4gICAgICA3MyxcbiAgICAgIDQsXG4gICAgICAyMDUsXG4gICAgICAyNyxcbiAgICAgIDQyLFxuICAgICAgMzQsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zUWtaNERFTTI3ck1VR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU2c1SXIvYkQxL0RmSWxoT1B2MlN2cFdvRjROY1UyRDhaSlBkOVRFSW9Tbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkS3FRdmY1QXpYSzlQQWt6dmZUeU1KdlcwVkpVVUtWRzhCQ3h6S3hMY2ZqcWtHU2RkZTNwUGJtbllrbzlKMjFJOFI2WW1LM0FCcmVPRWJtWStpcWFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0VkhmZjNLNFU1WW9CYnlVYVRtdVNPeUwyZ2Vtb1VEVE1TSXV3NGJmV1BPcHlHYm9wc0NjTHNiNHZYczNHWkxmN3VxZE1ZM3BPUFZ4OE1zWWt4SkRndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIzMzQ1OTM3ODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MTQ5NzMxMjIwMjk0Mjo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkITJouG0j8mqc+G0m8mq4bSEIPCdkIXhtI/htIrJqsmqXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMzM0NTkzNzg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NjA0NDc1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF4TVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXhNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSDA4RzhVTFNnNUI5NTNHQUVyOWVaZHFMdmRraG8zMnIzdTRzZXFiUTBHMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4Njg1MDk4MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NjA0NDc1MzUxNlwifSIKfQ=="  // PUT your SESSION_ID 


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









