require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ['MESSAGE']
});

client.login(process.env.BOT_TOKEN)

client.on("ready", () => {
    console.log("Bot is ready")
})

client.on("message", msg => {
    if (msg.content === "hey") {
        msg.reply("hi there")
    }
    else if (msg.content === "u good bro") {
        msg.channel.send("nah")
    }
    else if (msg.content === "rtn is epic") {
        msg.react("❤️")
    }
    else if (msg.content === "gimme mod") {
        msg.member.roles.add("857782241260994621");
    }
})

client.on("messageDelete", msg => {
    msg.reply("stop deleting messages!");
})

