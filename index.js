const{Client,gatewayIntentBits, GatewayIntentBits }=require("discord.js");
const client =new Client({
intents:[
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
],
});

client.on("messageCreate",(message)=>{
    
    message.reply({
     content:   "darsh is best"
    })
});

client.login(
    "MTIxMjk2MTMyMTM2MDk1NzQ2MA.GyslUR.oy4bih2umzKJnYyERPdENJSuJWmmnqyRWiP8_A"
);

