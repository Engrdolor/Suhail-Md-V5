const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="dolorfaithful101@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347087941249" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087941249";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_09_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJdTRHRkxLOWFiWDczMmdzRElQSmplZTlReEtjNUhiSC84MnB4Mit3YXRJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODc5NDEyNDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNFNjEwQkRGM0M5RjVCNkNFRTU2OUZFRDRGRDc0REVEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NzIzMTc1N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJobkdwc2hoQ1JsMkQ3bV9lY19nRGFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRhOGExNmE5LTdhZWQtNGRmNi1iNWIwLWNjMTA4YTNkZWFlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMTIsXG4gICAgICAxOTMsXG4gICAgICA4MyxcbiAgICAgIDE1LFxuICAgICAgMzAsXG4gICAgICAxNDAsXG4gICAgICAxNjUsXG4gICAgICAxODIsXG4gICAgICAyMixcbiAgICAgIDgxLFxuICAgICAgODgsXG4gICAgICAxMjQsXG4gICAgICA5MSxcbiAgICAgIDEwOCxcbiAgICAgIDI0OSxcbiAgICAgIDI1NSxcbiAgICAgIDIsXG4gICAgICAyMTMsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMTgwLFxuICAgICAgOTgsXG4gICAgICAyMDAsXG4gICAgICA5NixcbiAgICAgIDExLFxuICAgICAgMTY3LFxuICAgICAgMjUsXG4gICAgICAxNDAsXG4gICAgICA4NSxcbiAgICAgIDEyNCxcbiAgICAgIDE5MSxcbiAgICAgIDIyMixcbiAgICAgIDU0LFxuICAgICAgMTMwLFxuICAgICAgMTMzLFxuICAgICAgNTksXG4gICAgICA2NixcbiAgICAgIDE4OCxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzSEdUQ1RQQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4Nzk0MTI0OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3OTk5ODM0NjA2ODA3NDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002cXFvb0JFSVRJa3NFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiamdZbDhPeTdjN2xLWCtDSm5aZndtM1Q4bHBQUnFKYjdNZlhHSk1GdkpEYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtd0tDUjA1ckhSYlVRZmhTdEJVMTZULzRkNXE2aW1wUFZ4NGtPUlVmUkNnTndhTkFWTkdDdGYwK0lHbHFjS1RmT09CQlJvY28wRzgzdlkvUnZxNERBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoWmtqT3Z5dGNvenYvL1JGZUpxRHBiVTdPL2E4QklDUU9HaTJKSkp5akVVWldjQllNWUJ4akJiRG5oYzlpbTJITnpOOUpydUVQYXUrSmREUDR3djRBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDg3OTQxMjQ5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDcyMzE3NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLSVRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtJVC5qc29uIjogIntcImtleURhdGFcIjpcInNDYkZpS1FZdDR6eVlVRDJaWFJGTjRScmVBWHRSVHJqZ3d4bEdMaEZERW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjkwMTAwNTU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDcyMzE3NTkxMDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Engrdolor",
  packname: process.env.PACK_NAME || "Engrdolor",
  botname : process.env.BOT_NAME  || "Engrdolor",
  ownername:process.env.OWNER_NAME|| "Engrdolor",


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
