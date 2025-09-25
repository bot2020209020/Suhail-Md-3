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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_51_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICA2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MixcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDk3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK3gzY1NzK0JVaE01Y2xDTEJnSHYvdU1hZjREOHlJUW1Obzc4UWVQWlgvbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibW1yb0lGVE5TWldsemt2TDJtbWdBZ1wiLFxuICBcInBob25lSWRcIjogXCJjZDU0MzI3OC1lZmI5LTQ4ZWEtOWZkMi1mYjczMjFlOTU5NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDIxMixcbiAgICAgIDEwMCxcbiAgICAgIDI0NSxcbiAgICAgIDEyLFxuICAgICAgMTkwLFxuICAgICAgOTEsXG4gICAgICAxMjUsXG4gICAgICAxNDQsXG4gICAgICAxMzcsXG4gICAgICAxMzgsXG4gICAgICAxMixcbiAgICAgIDMsXG4gICAgICAxMjIsXG4gICAgICA3NSxcbiAgICAgIDE3NSxcbiAgICAgIDE5OCxcbiAgICAgIDIwMixcbiAgICAgIDQxLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDk0LFxuICAgICAgMTg0LFxuICAgICAgMTEsXG4gICAgICAxNzksXG4gICAgICAxNTksXG4gICAgICAyNDIsXG4gICAgICAyNDUsXG4gICAgICAxMCxcbiAgICAgIDExMixcbiAgICAgIDE0MCxcbiAgICAgIDY3LFxuICAgICAgNzksXG4gICAgICAxMDcsXG4gICAgICAxODQsXG4gICAgICAxLFxuICAgICAgMjQsXG4gICAgICA1NSxcbiAgICAgIDQsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0oyZ3plOEZFSzZlMXNZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNEZsV1Z0Nk5veWFHcmNNTVRDRkdYWUljc29SSE92YUR0ampjOUtWQSswUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjaFRPakUxY2JMbU5jdmxsaHJyY01ndnozYXkwWWg4VzNpMjNDMUhVK0tNSEJ0ZjVvSmNSRmlYNXNUY2ZoS2tMYnVZMm9JNzd5VEc0ZTF0WHJvSkhEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsNCt4d1FLNDhuRGYvdXUvVDdBUjU2K2JIQU96WE1Dbkh1RUtsMXkyK2tzeDVYQ1VyNCtLclBPNkFyS0s4VDNBVTM2eDlIV3lPRzcwcTQrb3dkRjlnUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2Nzo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjc5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU4ODI2MjkxXG59Igp9"  // PUT your SESSION_ID 


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











