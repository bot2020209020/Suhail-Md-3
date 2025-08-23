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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_52_08_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICA5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU0LFxuICAgICAgICA2MixcbiAgICAgICAgNTksXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5lZ1daQnVkV2pVcnJEdGlyTTN0V3hUa1FXM3ZIVGVTcWYyM2hucnpCbGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjMzNDU5Mzc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQTVCOTA1RjRFMzg3RDBEMzU2RTI1RTVCMjZDMDUwMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTU5NDI3MzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0RhMGV2aTNRTEN2bVVvTFZORGxwUVwiLFxuICBcInBob25lSWRcIjogXCIxMTBhOWIyOC01MjAyLTRmZTYtOTU1Yy00Yjk3YmU1OTBhNzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMTQsXG4gICAgICAyNTQsXG4gICAgICAxOTksXG4gICAgICAxMTIsXG4gICAgICAxODEsXG4gICAgICAxNTUsXG4gICAgICAyMzcsXG4gICAgICAyMyxcbiAgICAgIDU5LFxuICAgICAgMzEsXG4gICAgICAxMDMsXG4gICAgICAyMDEsXG4gICAgICA2MCxcbiAgICAgIDEzLFxuICAgICAgMTQyLFxuICAgICAgNjAsXG4gICAgICAxMjIsXG4gICAgICAxNzEsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDE4NSxcbiAgICAgIDcwLFxuICAgICAgMTU1LFxuICAgICAgMTI1LFxuICAgICAgODEsXG4gICAgICAyMjYsXG4gICAgICAxNixcbiAgICAgIDE0OCxcbiAgICAgIDYyLFxuICAgICAgNzcsXG4gICAgICAxMzEsXG4gICAgICAyNTEsXG4gICAgICAyMTMsXG4gICAgICAyMzMsXG4gICAgICAxMjEsXG4gICAgICAxNjgsXG4gICAgICAyMixcbiAgICAgIDI1LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3ZRa1o0REVNMmVwc1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTZzVJci9iRDEvRGZJbGhPUHYyU3ZwV29GNE5jVTJEOFpKUGQ5VEVJb1NvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVFV2g4WWdyaEpxZWNwem1WdkxXRHNvMjNlT1FUZ0FDSDFaMHZ5eFg2Y0JqdHZHbENDSUZITUtmNGtyQjdJWnljR1RJVVJhb2JXL3c0RFhCYkRZL0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZBbGY4cGdFVGVpem9Xc0MyVEoya1QrTXI3cXAxTWMzUmR2VzBxYTFVcExLbUNLMUVaUnpZSXVqSjFHY3ZiNjgxOWNtVmVWbHlXejlNdkpERndWUWdRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjMzNDU5Mzc4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUxNDk3MzEyMjAyOTQyOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QhMmi4bSPyapz4bSbyarhtIQg8J2QheG0j+G0ismqyapcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIzMzQ1OTM3ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU1OTQyNzM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHphXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIemEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwMi91ZUk3bWVCVXlFZG80cUlISXpXL1VTMCs5ZVZPY29oK0hNY0RFZ2FBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2ODUwOTgwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU1OTQyNzM4Njc4XCJ9Igp9"  // PUT your SESSION_ID 


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





