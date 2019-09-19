const Discord = require('discord.js');
const {  prefix, token, giphyToken } = require('./config.json');
const client = new Discord.Client();

//var GphApiClient = require('giphy-js-sdk-core')
//giphy = GphApiClient("giphyToken")

client.once('ready', () => {
    console.log('Ready!')
    client.user.setActivity("Playing m!help for help.")
})

client.on('message', message => {
    if(message.member.hasPermission(['ADMINISTRATOR'])){

        //console.log(message.content);

        let args = message.content.substring(prefix.length).split(" ");

        switch(args[0]){
            case "hello":
                let member = message.author;
                message.channel.sendMessage("Hello " + member + "!")
                break;
            case "info":
                message.channel.sendMessage("Maple bot was developed by Krazyclass.")
                break;
            case "version":
                message.channel.sendMessage("Current version = Version 1.0.0")
                break;
            case "help":
                const embed = new Discord.RichEmbed()
                .setTitle("Maple Commands:") 
                .addField("m!help", "Help menu.")
                .addField("m!info", "Information about the bot.")
                .addField("m!version", "Displays current version.")
                .addField("m!prefix", "Displays current prefix.")
                //.addField("m!clear (#)", "Clears the specified amount of messages.")
                .setColor(0xff5a00)
                message.channel.sendEmbed (embed);
                break;
            //case "clear":
                if(!args[1]) return message.reply("Error: Please define the number of messages to clear.")
                message.channel.bulkDelete(args[1]);
                break;
            }

        if(message.content.startsWith(`${prefix}kick`)) {
            //message.channel.send("Test")

            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been kicked!")
            })
        }
    }
})

client.login(token);