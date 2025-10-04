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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_49_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg3LFxuICAgICAgICA0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMixcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAwLFxuICAgICAgICA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0UnRnMlRkaTNEWW5ZZ3NQMDE4WHJ6WGQ2VEJZRE1JSSt5Z0hPczhvbUhJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MDYxNDE4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTVGMkIwRTI0MEZFNTE4MzZGOTU5NEFFNzE1QTU3RkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU5NTYwNTY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwNjE0MTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNUNCNjI1QTcyRDBFNjZBNTM3OTg2NURBMjE1RjVENFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTk1NjA1NjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY1NkVFNmS1BUbG0ydEU0OHE4RHF6QVwiLFxuICBcInBob25lSWRcIjogXCIxZGNiMjI4Ny00YTU1LTQ3ODgtYmM0Yy03YTJlNTU1ZjVlMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMTM4LFxuICAgICAgMTgzLFxuICAgICAgNDMsXG4gICAgICAyMzQsXG4gICAgICAyMTEsXG4gICAgICA1MixcbiAgICAgIDQ0LFxuICAgICAgNjksXG4gICAgICA1OCxcbiAgICAgIDcxLFxuICAgICAgNTIsXG4gICAgICAxNDMsXG4gICAgICAyMjMsXG4gICAgICAxMCxcbiAgICAgIDE3MyxcbiAgICAgIDc1LFxuICAgICAgMTU4LFxuICAgICAgMjUxLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgMzQsXG4gICAgICA2MCxcbiAgICAgIDc3LFxuICAgICAgMTEzLFxuICAgICAgNzYsXG4gICAgICAxMCxcbiAgICAgIDIzNCxcbiAgICAgIDg1LFxuICAgICAgNDUsXG4gICAgICAxMzIsXG4gICAgICAxNjAsXG4gICAgICAxODksXG4gICAgICAyMzUsXG4gICAgICAxMjgsXG4gICAgICAxNDQsXG4gICAgICAyMjksXG4gICAgICAxMzksXG4gICAgICA5MyxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDOTNONEdFTytHZzhjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwick5HVmx3YW03SVM1c0phTkR4T0hiYVBNZ1BMN01JTE03SW5rVVpoeEdrZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsOHlBd2VYTXJDWHFVNjVnTVdOWW5tTlp6Zis3VFJyV1RQQlVnWWlhKyswV0lsYnByR1pyZk9iKzcvUWk0djU0M1paa01FS3JESFlSVTJqbHF0UjdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOUlgrc3N5NXg5TlM2SGJwS1RNSW9oR05kSmsvQm5kSmEwSGd2YlE4VXZ6NXEzZlJydmhPNUJDZ1F1QVRqVml4WjJqUWZKalNaTEJiM1A5L0NLRnBodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDYxNDE4OTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYmFiYSBCYW5nYWxpXCIsXG4gICAgXCJsaWRcIjogXCI2NTI1NDA0MjE1MzAwMDo4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwNjE0MTg5OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU5NTYwNTYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWJiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBYmIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJna0dWR0hoWEJqVitjS1IzVzB1MjY4dzZJWnFBZndWeFhDWXo0OHlYSENJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MDkyNjAyMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1OTU2MDU2MzIxM1wifSIKfQ=="  // PUT your SESSION_ID 


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












