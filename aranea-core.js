const fs = require('fs');
const AraneinEntity = require('./aranein');
const discord = require('discord.js')

const client = new discord.Client();

const config = require('./.data/config.json');
client.config = config;


//reset all player etat
client.on('ready', () => {
    console.log('AraneaClicker est pret');
    var sfs = require('fs');
    sfs.readdir("./.data/player/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if(!file.endsWith('.json')) return;
            let splayer_id = file.split(".")[0];
            var splayer = new AraneinEntity(splayer_id);
            splayer.chargerdonnee(client,splayer_id,"fake");
            splayer.resetstatut(client,splayer_id,"fake");
            splayer.sauvegarderdonnee(client,splayer_id,"fake");
            console.log(`reset de l'etat de `+splayer_id);
        });
      });
    
    client.user.setUsername("Aranea-Adventum");
    client.user.setActivity(config.prefix+'aide');
    
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
            player.chargerdonnee(client,msg.author.id,args);
            player.cueillir(client,msg,args);
            break;
        case "manger":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg.author.id,args);
            player.manger(client,msg,args);
            break;
        case "dormir":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg.author.id,args);
            await player.dormir(client,msg,args);
            break;
        case "vendre":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg.author.id,args);
            player.vendre(client,msg,args);
            break;
        case "profil":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg.author.id,args);
            player.profil(client,msg,args);
            break;
        case "explorer":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg.author.id,args);
            player.explorer(client,msg,args);
            break;
        case "forceinnocupe":
            var player = new AraneinEntity(msg.author.id);
            player.chargerdonnee(client,msg.author.id,args);
            player.resetstatut(client,msg.author.id,args);
            break;
        case "aide":
            msg.reply(`Liste des commandes disponible : 
\`\`\`
${client.config.prefix}cueillir, ${client.config.prefix}explorer,
${client.config.prefix}manger, ${client.config.prefix}dormir,
${client.config.prefix}profil, ${client.config.prefix}vendre
\`\`\` `);
            break;
    
        default:
            break;
    }
});

client.login(config.token);

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  //console.log(Date.now() + " Ping Received");
  response.sendStatus(200);                            /// example how to keep your bot 24/7
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 2800);