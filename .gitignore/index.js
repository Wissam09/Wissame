const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Command: *help");
    console.log("Connectedç")
});

bot.login("Nzk0MjM5NjExNTc5NjYyMzM3.X-37Rw.ScFyCuNst5giUo479u16Raqw5RQ");


bot.on('message', message => {
    if (message.content === prefix + "help"){
         message.channel.send("Liste des commandes: \n -*help");
         }

         if (message.content === "Salut"){
             message.reply("Bien le bonjour. :)");
             console.log("Commande Salut effectué");
    }
});
