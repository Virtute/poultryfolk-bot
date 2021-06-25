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
    /*
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
    */
    if (msg.content === "!join orangutanglers") {
        msg.member.roles.add("857785068692439040");
        msg.reply("You have joined the Orangutanglers");
        msg.react(":orangutan:");
    }
    else if (msg.content === "!join poultryfolk") {
        msg.member.roles.add("857784945329045554");
        msg.reply("You have joined the Poultryfolk");
        msg.react(":chicken:");
    }
})

client.on("messageDelete", msg => {
    msg.reply("stop deleting messages!");
})

