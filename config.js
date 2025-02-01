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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "true";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087941249";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_23_02_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI4LFxuICAgICAgICA0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyLFxuICAgICAgICA1NSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgyLFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4c01FZlplUndPby9oSGF1dDFtc2pJSmRPNUVhZXJqK1VsWEhJeUR6OEwwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuMGpSdnoyb1RicXExb2NpeWd0LWdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxYzQyMDAwLTlhZTEtNDkwMS05NTgxLTE3NmI1OGM4NTZmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDMyLFxuICAgICAgMTc1LFxuICAgICAgMjA4LFxuICAgICAgODgsXG4gICAgICA4NyxcbiAgICAgIDEzMyxcbiAgICAgIDEwNSxcbiAgICAgIDgzLFxuICAgICAgNzgsXG4gICAgICAxODUsXG4gICAgICAxMzIsXG4gICAgICAxOTIsXG4gICAgICAzNSxcbiAgICAgIDY3LFxuICAgICAgMjQ0LFxuICAgICAgNjksXG4gICAgICAyMzIsXG4gICAgICAyMixcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICA1OCxcbiAgICAgIDM2LFxuICAgICAgOTUsXG4gICAgICA0MyxcbiAgICAgIDEwNCxcbiAgICAgIDcxLFxuICAgICAgOTQsXG4gICAgICA0MSxcbiAgICAgIDE0MCxcbiAgICAgIDIzMixcbiAgICAgIDI0NixcbiAgICAgIDE5NCxcbiAgICAgIDI1MyxcbiAgICAgIDExNCxcbiAgICAgIDI2LFxuICAgICAgNTYsXG4gICAgICAyNCxcbiAgICAgIDEzNCxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkMyNE5LVkVIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3OTQxMjQ5OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3OTk5ODM0NjA2ODA3NDozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcmU2ODBGRU5qUzlid0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhxc0E1T1h5WEhDQVN5T1dxbnpqZVhtYUlNTlhuUkN2aTBjQ3N5NlpIUlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWVI1Zk5vbXorRlpOcXkra25Ca1BpK3hpeW0vSG8rVm9BYld3azBVRnRXRHNuNDIvaTZ4MjlNK2p1Nkp6V2dSZzFhemEzbUlEUVE1Vkt2VVk0LzRiQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV2RKVUdDNit0eGZoa1c0dzQ5SXBPTkV4Qjk0K2xiY1VVeUQvSFNncHlVREVFWTdHRy9sUHhOaVZrUlZnSk80OHVVaDdkbytSQ0h3U3JQSWRUK0xoQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4Nzk0MTI0OTozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzgzNjkzNzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
