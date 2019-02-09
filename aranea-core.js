const fs = require('fs');
const AraneinEntity = require('./aranein');
const discord = require('discord.js')

const client = new discord.Client();

const config = require('./.data/config.json');
client.config = config;

client.on('ready', () => {
    console.log('AraneaClicker est pret');
});

//test

client.on('message', async msg =>{
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(config.prefix)) return undefined;
    let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(config.prefix.length);
    var args = msg.content.split(' ');
    //
    switch (command) {
        case "cueillir":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg,args);
            player.cueillir(client,msg,args);
            player.sauvegarderdonnee(client,msg,args);
            break;
        case "manger":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg,args);
            player.cueillir(client,msg,args);
            player.sauvegarderdonnee(client,msg,args);
            break;
        case "dormir":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg,args);
            player.dormir(client,msg,args);
            player.sauvegarderdonnee(client,msg,args);
            break;
        case "vendre":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg,args);
            player.vendre(client,msg,args);
            player.sauvegarderdonnee(client,msg,args);
            break;
        case "profil":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg,args);
            player.profil(client,msg,args);
            player.sauvegarderdonnee(client,msg,args);
            break;
    
        default:
            break;
    }
});

client.login(config.token);

