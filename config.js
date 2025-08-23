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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_17_08_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MixcbiAgICAgICAgMjQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgwLFxuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5VHRJay8ycmlWYngvSFNpU0orQmZtdG5xT3B6MUZFczJ0Q2c3QlQwdVdBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIzMzQ1OTM3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTVFOENCODVERDlGRDNBRDRFOTM3RUI2NjkzRkIxMjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU1OTY1ODE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBVaXRGWkhKU3h5WS0zQ3kxZzFJWHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjFiMTJmYmYtZGZiMi00Yzc0LWIxY2QtYTZhZWIzZDE3MDFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMjA0LFxuICAgICAgMSxcbiAgICAgIDI1LFxuICAgICAgMTM3LFxuICAgICAgMzQsXG4gICAgICAxODEsXG4gICAgICA1NSxcbiAgICAgIDE0NyxcbiAgICAgIDIwMSxcbiAgICAgIDEyNixcbiAgICAgIDY0LFxuICAgICAgMTA3LFxuICAgICAgNjgsXG4gICAgICA4OSxcbiAgICAgIDM5LFxuICAgICAgMTE3LFxuICAgICAgMjE1LFxuICAgICAgMjEyLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgNjAsXG4gICAgICA2OCxcbiAgICAgIDE0LFxuICAgICAgMjQ4LFxuICAgICAgMTYsXG4gICAgICAyMjksXG4gICAgICAxMSxcbiAgICAgIDE0NSxcbiAgICAgIDE5MCxcbiAgICAgIDIxLFxuICAgICAgMjQ3LFxuICAgICAgMTAsXG4gICAgICAxNTIsXG4gICAgICA4MSxcbiAgICAgIDE3NCxcbiAgICAgIDczLFxuICAgICAgNzAsXG4gICAgICAxNTIsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096UWtaNERFUFBTcDhVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU2c1SXIvYkQxL0RmSWxoT1B2MlN2cFdvRjROY1UyRDhaSlBkOVRFSW9Tbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDR29DczBwM25BNEh4ZDRIN1pIS2JPN0d0SDVaaGQ2N3R2c1gxSlFPblkrTU5KenNpRW51ekpzVHNqa0F1b2pHS3VwM2JQVlg2bm5LMzJNeFgvMFJDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvQmFqMkJ6ZDQyZzZydnVkRUYyMzF5cll1REFQaktBY3FXU1JZdDhzdmpmZHlreHBhZHF0cExiaCtpMEY3MDhJVzZOckFWNVRTamtlc0NNQnlxYWdoUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIzMzQ1OTM3ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MTQ5NzMxMjIwMjk0Mjo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjMzNDU5Mzc4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTU5NjU4MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFT2JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVPYi5qc29uIjogIntcImtleURhdGFcIjpcInJiZkMrVHZKVWFrY2F0NktQcXY5UGV5ajF6OFViVDh2bjRjZW5ObUZUL1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODY4NTA5ODA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTU5NjU4MTk3MzRcIn0iCn0="  // PUT your SESSION_ID 


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






