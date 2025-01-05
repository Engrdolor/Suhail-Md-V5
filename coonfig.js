const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="dolorfaithful@gmail.com"
global.location="Lagos,nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347087941249" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "yes";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087941249";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "yes"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "yes";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode
A
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_31_01_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNnBNMzd4ejNSaGRQb0hORm8xRHpOdlo4TG1FNVhSek9HeWl5Vm8xQ2dsUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNC1CQ29rZUxSRGFXdTJXM052X01SQVwiLFxuICBcInBob25lSWRcIjogXCI3ZTFlZWU1My03N2Q4LTQ2NzAtYWU3NS03N2ZiNTE0MTM1MjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgNDcsXG4gICAgICAxNjgsXG4gICAgICA1MixcbiAgICAgIDEwLFxuICAgICAgMTczLFxuICAgICAgMTQwLFxuICAgICAgMTI1LFxuICAgICAgMjQ1LFxuICAgICAgMTA5LFxuICAgICAgNjksXG4gICAgICAyMTMsXG4gICAgICAxODYsXG4gICAgICAxNTYsXG4gICAgICAxMjMsXG4gICAgICAxNCxcbiAgICAgIDExNSxcbiAgICAgIDgsXG4gICAgICAxODUsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTI0LFxuICAgICAgNzksXG4gICAgICA1NCxcbiAgICAgIDkzLFxuICAgICAgMTg3LFxuICAgICAgMjM3LFxuICAgICAgMTczLFxuICAgICAgMjExLFxuICAgICAgMTQxLFxuICAgICAgMTI3LFxuICAgICAgMjE5LFxuICAgICAgMTcxLFxuICAgICAgOTgsXG4gICAgICAyNDEsXG4gICAgICAzLFxuICAgICAgNTUsXG4gICAgICAxMDQsXG4gICAgICAxOSxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDMzRNUlI3RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4Nzk0MTI0OToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzk5OTgzNDYwNjgwNzQ6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2plNjgwRkVLTDA2N3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4cXNBNU9YeVhIQ0FTeU9XcW56amVYbWFJTU5YblJDdmkwY0NzeTZaSFJRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRXTDg2T25sb2N5bEJ1bkFpZmFxSDhhK0FSQi9rWmcyNGpUNFVxR1dwOW5ZM09vM0s0bWhXdDliMGVtWmdjZ1VFYnRUUUxvY1N1UFBZajJWWWhzcUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhNNlZ6eTREb2FjN2luVzQ5ZVF3N3d0SmdMMWxQUUlWSTVPRXFPVVFuUjZvV1RzQ084WHpVTVBReTE4cjl5TU9taG02ZGdyYjBIVDNjVDBjRHJLcGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODc5NDEyNDk6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM2MTEyNjc4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Engrdolor",
  packname: process.env.PACK_NAME || "Engrdolor",
  botname : process.env.BOT_NAME  || "Engr-Dolor",
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
  LANG: ( process.env.THEME ||  "ENGRDOLOR"  ).toUpperCase(),



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
