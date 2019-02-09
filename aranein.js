//energie consommée par les activitées.
const cuillette = 2;
const exploration = 5;

const someille = 60; // energie restauré par le someille.
//energie restauré par eElement.
const epomme = 30;
const egpomme = 60;
const ebaie = 20;
const ejus = 50;
const egelee = 40
//valeur en jeton de vElement.
const vpomme = 50;
const vgpomme = 80;
const vbaie = 20;
const vjus = 60;
const vgelee = 70;
const vbilleC = 100;
const vbilleF = 100;
const vbilleA = 120;
const vbilleO = 150;
const vbilleP = 200;
const vclochetteC = 110;
const vclochetteA = 140;
const vclochetteO = 170;
const vcarillonO = 500;
const vcarillonP = 800;
const vgemmeP = 750;
const vgemmeM = 1250;
const vgemmeG = 2000;
//prix habitat pElement.
const pcaverne = 6000;
const ptente = 8000;
const pcahute = 12000;
const pmaison = 20000;
const pmanoir = 50000;
const ppalais = 100000;
//rareté rElement / 1000.
const rpomme = 300;
const rgpomme = 100;
const rbaie = 600;

const rbilleC = 100;
const rbilleF = 100;
const rbilleA = 100;
const rbilleO = 50;
const rbilleP = 50;
const rclochetteC = 100;
const rclochetteA = 100;
const rclochetteO = 100;
const rcarillonO = 100;
const rcarillonP = 100;
const rgemmeA = 100; //rareté d'une gemme
//rareté de la taille de la gemme /100
const rgemmeP = 65;
const rgemmeM = 30;
const rgemmeG = 5;  
//rareter groupe
const rgbille = 400;
const rgclochette = 300;
const rgcarillon = 200;
const rggemme = 100;

const explomin = 3;
const explomax = 5;
const cueillmin = 3;
const cueillmax = 5;



class AraneinEntity 
{
    constructor(discordid)
    {
        this.id = discordid;
        this.energiemax = 100;
        this.energie = 100;
        this.etat = "innocupe";
        this.jeton = 0;
        this.habitat = 
        {
            "terrier": true,
            "caverne": false,
            "tente": false,
            "cahute": false,
            "maison": false,
            "manoir": false,
            "palais": false
        };
        this.inventaire =
        {
            "pomme": 0,
            "grosse pomme": 0,
            "baie": 0,
            "bille": 
            {
                "cuivre": 0,
                "fer": 0,
                "argent": 0,
                "or": 0,
                "platine": 0
            },
            "clochette": 
            {
                "cuivre": 0,
                "argent": 0,
                "or": 0
            },
            "carillon": 
            {
                "or": 0,
                "platine": 0
            },
            "gemme":
            {
                "petite": 0,
                "moyenne": 0,
                "grosse": 0
            },
            "jus": 0,
            "gelee": 0
        };
    }





    cueillir(bot, message, args)
    {
        if (this.energie >= cuillette) {
            var nbreward = Math.floor(Math.random()*(cueillmax-cueillmin));
            nbreward = nbreward + cueillmin;
            var nbpomme = 0; var nbgpomme = 0; var nbbaie = 0;
            this.energie = this.energie-cuillette;
            for (let index = 0; index < nbreward; index++) {
                var rngreward = Math.floor(Math.random()*1000);
                if (rngreward < rbaie) {
                    this.inventaire.baie += 1;
                    nbbaie += 1;
                } else if(rngreward >= rbaie && rngreward<(rbaie+rpomme)){
                    this.inventaire.pomme += 1;
                    nbpomme += 1;
                }else{
                    this.inventaire["grosse pomme"] += 1;
                    nbgpomme += 1;
                }
            }
            var msg = `Vous avez cueillit : `;
            if (nbbaie>0) {
                msg += `\`${nbbaie} baie(s)\`, `
            }
            if (nbpomme>0) {
                msg += `\`${nbpomme} pomme(s)\`, `
            }
            if (nbgpomme>0) {
                msg += `\`${nbgpomme} grosse pomme(s) ,\``
            }
            message.reply(msg);
        } else {
            message.reply(`Vous êtes trop fatigué, au moins ${cuillette} points d'énergie sont nécéssaire pour sortir cueillir.`);
        }
    }



    explorer(bot, message, args)
    {
        if (energie >= exploration) {
            var nbreward = Math.floor(Math.random()*(explomax-explomin));
            nbreward = nbreward + explomin;
            var nbbilleC = 0; var nbbilleF = 0; var nbbilleA = 0; var nbbilleO = 0; var nbbilleP = 0;
            var nbclochetteC = 0; var nbclochetteA = 0; var nbclochetteO = 0;
            var nbcarillonO = 0; var nbcarillonP = 0;
            var nbgemmeP = 0; var nbgemmeM = 0; var nbgemmeG = 0;
            this.energie = this.energie-exploration;
            for (let index = 0; index < nbreward; index++) {
                var drngreward = Math.floor(Math.random()*1000);
                if (drngreward < rgbille) {
                    //bille
                    var rngreward = drngreward;
                    if (rngreward < rbilleC) {
                        this.inventaire.bille.cuivre += 1;
                        nbbilleC += 1;
                    } else 
                    if(rngreward < rbilleC+rbilleF) {
                        this.inventaire.bille.fer += 1;
                        nbbilleF += 1;
                    } else 
                    if(rngreward < rbilleC+rbilleF+rbilleA) {
                        this.inventaire.bille.argent += 1;
                        nbbilleA += 1;
                    } else 
                    if(rngreward < rbilleC+rbilleF+rbilleA+rbilleO) {
                        this.inventaire.bille.or += 1;
                        nbbilleO += 1;
                    } else {
                        this.inventaire.bille.platine += 1;
                        nbbilleP += 1;
                    }
                } else if(drngreward >= rgbille && drngreward<(rgbille+rgclochette)){
                    //clochette
                    var rngreward = drngreward - rgbille;
                    if (rngreward < rclochetteC) {
                        this.inventaire.clochette.cuivre += 1;
                        nbclochetteC += 1;
                    }else if (rngreward < rclochetteC+rclochetteA){
                        this.inventaire.clochette.argent += 1;
                        nbclochetteA += 1;
                    }else{
                        this.inventaire.clochette.or += 1;
                        nbclochetteO += 1;
                    }
                }else if (drngreward >= (rgbille+rgclochette) && drngreward < (rgbille+rgclochette+rgcarillon)){
                    //carillon
                    var rngreward = drngreward - rgbille - rgclochette;
                    if (rngreward < rcarillonO) {
                        this.inventaire.carillon.or += 1;
                        nbcarillonO += 1;
                    }else{
                        this.inventaire.carillon.platine += 1;
                        nbcarillonP += 1;
                    }
                }else{
                    //gemme
                    var rngreward = drngreward - rgbille - rgclochette - rgcarillon;
                    if (rngreward < rgemmeP) {
                        this.inventaire.gemme.petite += 1;
                        nbgemmeP += 1;
                    } else if (rngreward < rgemmeP+rgemmeM) {
                        this.inventaire.gemme.moyenne += 1;
                        nbgemmeM += 1;
                    }else{
                        this.inventaire.gemme.grosse += 1;
                        nbgemmeG += 1;
                    }
                }
            }
            var msg = `Vous avez trouvé : `;
            if (nbbilleC>0) {
                msg += `\`${nbbilleC}bille(s) de cuivre\`, `;
            }
            if (nbbilleF>0) {
                msg += `\`${nbbilleF}bille(s) de fer\`, `;
            }
            if (nbbilleA>0) {
                msg += `\`${nbbilleA}bille(s) d'argent,\``;
            }
            if (nbbilleO>0) {
                msg += `\`${nbbilleO}bille(s) d'or,\``;
            }
            if (nbbilleP>0) {
                msg += `\`${nbbilleP}bille(s) de platine,\``;
            }
            if (nbclochetteC>0) {
                msg += `\`${nbclochetteC}clochette(s) de cuivre,\``;
            }
            if (nbclochetteA>0) {
                msg += `\`${nbclochetteA}clochette(s) d'argent,\``;
            }
            if (nbclochetteO>0) {
                msg += `\`${nbclochetteO}clochette(s) d'or,\``;
            }
            if (nbcarillonO>0) {
                msg += `\`${nbcarillonO}carillon(s) d'or,\``;
            }
            if (nbcarillonP>0) {
                msg += `\`${nbcarillonP}carillon(s) de platine,\``;
            }
            if (nbgemmeP>0) {
                msg += `\`${nbgemmeP}petite gemme(s),\``;
            }
            if (nbgemmeM>0) {
                msg += `\`${nbgemmeM}gemme(s) moyenne,\``;
            }
            if (nbgemmeG>0) {
                msg += `\`${nbgemmeG}grosse gemme(s),\``;
            }
            message.reply(msg);
        } else {
            message.reply(`Vous êtes trop fatigué, au moins ${exploration} points d'énergie sont nécéssaire pour sortir cueillir.`);
        }
    }



    dormir(bot, message, args)
    {
        if (this.etat == "innocupe") {
            this.etat = "occuper";
            this.energie += 50;
            if (this.energie > this.energiemax) {
                this.energie = this.energiemax;
            }
            message.reply(`Vous vous couchez et reposerez ${someille}secondes`);
            setTimeout(reveil, someille*1000, this.etat, message);
            //message.reply(`Message non définis`);
        } else {
            message.reply(`Impossible de dormir, vous êtes actuellement occupé.`);
        }
    }



    profil(bot, message, args)
    {
        var msginventaire = `profil de ${message.author.username}: \n`;
        msginventaire += `Energie : ${this.energie}/${this.energiemax}\n`
        msginventaire += `Jeton(s): ${this.jeton}\n`;
        msginventaire += `\`\`\`
Pomme : ${this.inventaire.pomme}
Grosse pomme : ${this.inventaire["grosse pomme"]}
Baie : ${this.inventaire.baie}
\`\`\`
\`\`\`
Bille de cuivre : ${this.inventaire.bille.cuivre}
Bille de fer : ${this.inventaire.bille.fer}
Bille d'argent : ${this.inventaire.bille.argent}
Bille d'or : ${this.inventaire.bille.or}
Bille de platine : ${this.inventaire.bille.platine}
\`\`\`
\`\`\`
Clochette de cuivre : ${this.inventaire.clochette.cuivre}
Clochette d'argent : ${this.inventaire.clochette.argent}
Clochette d'or : ${this.inventaire.clochette.or}
\`\`\`
\`\`\`
Carillon d'or : ${this.inventaire.carillon.or}
Carillon de platine : ${this.inventaire.carillon.platine}
\`\`\`
\`\`\`
Petite gemme : ${this.inventaire.gemme.petite}
Gemme moyenne : ${this.inventaire.gemme.moyenne}
Grosse gemme : ${this.inventaire.gemme.grosse}
\`\`\`
`;
        message.reply(msginventaire);
    }



    manger(bot, message, args)
    {
        if(this.energie != this.energiemax)
        {switch (args[1]) {
            case "pomme":
                if (this.inventaire.pomme >= 1) {
                    var nbdispo = this.inventaire.pomme;
                    if (nbdispo < args[2]) {
                        args[2] = nbdispo;
                    }
                    var nbmanger =  0;
                    for (let index = 0; index < args[2]; index++) {
                        if (this.inventaire.pomme >= 1 && this.energie<this.energiemax) {
                            nbmanger += 1;
                            this.inventaire.pomme -= 1;
                            this.energie = this.energie + epomme;
                            if (this.energie > this.energiemax) {
                                this.energie = this.energiemax;
                            }
                        }
                    }
                    message.reply(`Vous avez mangé ${nbmanger} pomme(s), récupérant ainsi ${nbmanger*epomme} énergie.\n Vous avez désormais ${this.energie}énergie.`);
                } else {
                    message.reply(`Vous ne possedez pas de pomme.`);
                }
                break;
            case "gpomme":
                if (this.inventaire["grosse pomme"] >= 1) {
                    var nbdispo = this.inventaire["grosse pomme"];
                    if (nbdispo < args[2]) {
                        args[2] = nbdispo;
                    }
                    var nbmanger =  0;
                    for (let index = 0; index < args[2]; index++) {
                        if (this.inventaire["grosse pomme"] >= 1 && this.energie<this.energiemax) {
                            nbmanger += 1;
                            this.inventaire["grosse pomme"] -= 1;
                            this.energie = this.energie + egpomme;
                            if (this.energie > this.energiemax) {
                                this.energie = this.energiemax;
                            }
                        }
                    }
                    message.reply(`Vous avez mangé ${nbmanger} grosse pomme(s), récupérant ainsi ${nbmanger*egpomme} énergie.\n Vous avez désormais ${this.energie}énergie.`);
                } else {
                    message.reply(`Vous ne possedez pas de grosse pomme.`);
                }
                break;
            case "baie":
                if (this.inventaire.baie >= 1) {
                    var nbdispo = this.inventaire.baie;
                    if (nbdispo < args[2]) {
                        args[2] = nbdispo;
                    }
                    var nbmanger =  0;
                    for (let index = 0; index < args[2]; index++) {
                        if (this.inventaire.baie >= 1 && this.energie<this.energiemax) {
                            nbmanger += 1;
                            this.inventaire.baie -= 1;
                            this.energie = this.energie + ebaie;
                            if (this.energie > this.energiemax) {
                                this.energie = this.energiemax;
                            }
                        }
                    }
                    message.reply(`Vous avez mangé ${nbmanger} baie(s), récupérant ainsi ${nbmanger*ebaie} énergie.\n Vous avez désormais ${this.energie}énergie.`);
                } else {
                    message.reply(`Vous ne possedez pas de baie.`);
                }
                break;
            case "jus":
                    if (this.inventaire.jus >= 1) {
                    var nbdispo = this.inventaire.jus;
                    if (nbdispo < args[2]) {
                        args[2] = nbdispo;
                    }
                    var nbmanger =  0;
                    for (let index = 0; index < args[2]; index++) {
                        if (this.inventaire.jus >= 1 && this.energie<this.energiemax) {
                            nbmanger += 1;
                            this.inventaire.jus -= 1;
                            this.energie = this.energie + ejus;
                            if (this.energie > this.energiemax) {
                                this.energie = this.energiemax;
                            }
                        }
                    }
                    message.reply(`Vous avez mangé ${nbmanger} jus, récupérant ainsi ${nbmanger*ejus} énergie.\n Vous avez désormais ${this.energie}énergie.`);
                } else {
                    message.reply(`Vous ne possedez pas de jus.`);
                }
                break;
            case "gelee":
                    if (this.inventaire.gelee >= 1) {
                    var nbdispo = this.inventaire.gelee;
                    if (nbdispo < args[2]) {
                        args[2] = nbdispo;
                    }
                    var nbmanger =  0;
                    for (let index = 0; index < args[2]; index++) {
                        if (this.inventaire.gelee >= 1 && this.energie<this.energiemax) {
                            nbmanger += 1;
                            this.inventaire.gelee -= 1;
                            this.energie = this.energie + egelee;
                            if (this.energie > this.energiemax) {
                                this.energie = this.energiemax;
                            }
                        }
                    }
                    message.reply(`Vous avez mangé ${nbmanger} gelée(s), récupérant ainsi ${nbmanger*egelee} énergie.\n Vous avez désormais ${this.energie}énergie.`);
                } else {
                    message.reply(`Vous ne possedez pas de gelée.`);
                }
                break;
            case "max":
                      //TODO
                      message.reply("```\nFonction actuellement en developpement.\n```");      
                break;
            default:
                message.reply(`vous devez indiquer ce que vous désirez manger et en quelle quantité à la suite de cette commande
pomme, gpomme(grosse pomme), baie, jus, gelee, max(mange au hazard jusqu'au seuil d'énergie max). `);
                break;
        }}else{
            message.reply(`Vous êtes au déjâ au maximum d'énergie.`);
        }
    }



    vendre(bot, message, args)
    {
        if (args[1]) {
            switch (args[1]) {
                case "pomme":
                    if (eval("this.inventaire."+args[1]) != 0) {
                        if (args[2]) {
                            if (typeof args[2] != typeof eval("this.inventaire."+args[1])) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > eval("this.inventaire."+args[1])) {
                                args[2] = eval("this.inventaire."+args[1]);
                            }
                            eval("this.inventaire."+args[1]) -= args[2];
                            this.jeton += (eval("v"+args[1])*args[2]);
                        } else {
                            eval("this.inventaire."+args[1]) -= 1;
                            this.jeton += eval("v"+args[1]);
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de ${args[1]}`);
                    }
                    console.log("pomme:"+this.inventaire.pomme+", jeton:"+this.jeton);
                    break;
                case "grossepomme":
                    if (this.inventaire["grosse pomme"] != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire["grosse pomme"]) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire["grosse pomme"]) {
                                args[2] = this.inventaire["grosse pomme"];
                            }
                            this.inventaire["grosse pomme"] -= args[2];
                            this.jeton += (vgpomme*args[2]);
                        } else {
                            this.inventaire["grosse pomme"] -= 1;
                            this.jeton += vgpomme;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Grosse pomme`);
                    }
                    break;
                case "baie":
                    if (eval("this.inventaire."+args[1]) != 0) {
                        if (args[2]) {
                            if (typeof args[2] != typeof eval("this.inventaire."+args[1])) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > eval("this.inventaire."+args[1])) {
                                args[2] = eval("this.inventaire."+args[1]);
                            }
                            eval("this.inventaire."+args[1]) -= args[2];
                            this.jeton += (eval("v"+args[1])*args[2]);
                        } else {
                            eval("this.inventaire."+args[1]) -= 1;
                            this.jeton += eval("v"+args[1]);
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de ${args[1]}`);
                    }
                    break;
                case "jus":
                    if (eval("this.inventaire."+args[1]) != 0) {
                        if (args[2]) {
                            if (typeof args[2] != typeof eval("this.inventaire."+args[1])) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > eval("this.inventaire."+args[1])) {
                                args[2] = eval("this.inventaire."+args[1]);
                            }
                            eval("this.inventaire."+args[1]) -= args[2];
                            this.jeton += (eval("v"+args[1])*args[2]);
                        } else {
                            eval("this.inventaire."+args[1]) -= 1;
                            this.jeton += eval("v"+args[1]);
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de ${args[1]}`);
                    }
                    break;
                case "gelee":
                    if (eval("this.inventaire."+args[1]) != 0) {
                        if (args[2]) {
                            if (typeof args[2] != typeof eval("this.inventaire."+args[1])) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > eval("this.inventaire."+args[1])) {
                                args[2] = eval("this.inventaire."+args[1]);
                            }
                            eval("this.inventaire."+args[1]) -= args[2];
                            this.jeton += (eval("v"+args[1])*args[2]);
                        } else {
                            eval("this.inventaire."+args[1]) -= 1;
                            this.jeton += eval("v"+args[1]);
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de ${args[1]}`);
                    }
                    break;
                case "billecuivre":
                    if (this.inventaire.bille.cuivre != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.bille.cuivre) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.bille.cuivre) {
                                args[2] = this.inventaire.bille.cuivre;
                            }
                            this.inventaire.bille.cuivre -= args[2];
                            this.jeton += (vbilleC*args[2]);
                        } else {
                            this.inventaire.bille.cuivre -= 1;
                            this.jeton += vbilleC;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Bille de cuivre`);
                    }
                    break;
                case "billefer":
                    if (this.inventaire.bille.fer != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.bille.fer) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.bille.fer) {
                                args[2] = this.inventaire.bille.fer;
                            }
                            this.inventaire.bille.fer -= args[2];
                            this.jeton += (vbilleF*args[2]);
                        } else {
                            this.inventaire.bille.fer -= 1;
                            this.jeton += vbilleF;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Bille de fer`);
                    }
                    break;
                case "billeargent":
                    if (this.inventaire.bille.argent != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.bille.argent) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.bille.argent) {
                                args[2] = this.inventaire.bille.argent;
                            }
                            this.inventaire.bille.argent -= args[2];
                            this.jeton += (vbilleA*args[2]);
                        } else {
                            this.inventaire.bille.argent -= 1;
                            this.jeton += vbilleA;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Bille d'argent`);
                    }
                    break;
                case "billeor":
                    if (this.inventaire.bille.or != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.bille.or) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.bille.or) {
                                args[2] = this.inventaire.bille.or;
                            }
                            this.inventaire.bille.or -= args[2];
                            this.jeton += (vbilleO*args[2]);
                        } else {
                            this.inventaire.bille.or -= 1;
                            this.jeton += vbilleO;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Bille d'or`);
                    }
                    break;
                case "billeplatine":
                    if (this.inventaire.bille.platine != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.bille.platine) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.bille.platine) {
                                args[2] = this.inventaire.bille.platine;
                            }
                            this.inventaire.bille.platine -= args[2];
                            this.jeton += (vbilleP*args[2]);
                        } else {
                            this.inventaire.bille.platine -= 1;
                            this.jeton += vbilleP;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de ${args[1]}`);
                    }
                    break;
                case "clochettecuivre":
                    if (this.inventaire.clochette.cuivre != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.clochette.cuivre) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.clochette.cuivre) {
                                args[2] = this.inventaire.clochette.cuivre;
                            }
                            this.inventaire.clochette.cuivre -= args[2];
                            this.jeton += (vclochetteC*args[2]);
                        } else {
                            this.inventaire.clochette.cuivre -= 1;
                            this.jeton += vclochetteC;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Clochette de cuivre`);
                    }
                    break;
                case "clochetteargent":
                    if (this.inventaire.clochette.argent != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.clochette.argent) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.clochette.argent) {
                                args[2] = this.inventaire.clochette.argent;
                            }
                            this.inventaire.clochette.argent -= args[2];
                            this.jeton += (vclochetteA*args[2]);
                        } else {
                            this.inventaire.clochette.argent -= 1;
                            this.jeton += vclochetteA;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Clochette d'argent`);
                    }
                    break;
                case "clochetteor":
                    if (this.inventaire.clochette.or != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.clochette.or) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.clochette.or) {
                                args[2] = this.inventaire.clochette.or;
                            }
                            this.inventaire.clochette.or -= args[2];
                            this.jeton += (vclochetteO*args[2]);
                        } else {
                            this.inventaire.clochette.or -= 1;
                            this.jeton += vclochetteO;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Clochette d'or`);
                    }
                    break;
                case "carillonor":
                    if (this.inventaire.carillon.or != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.carillon.or) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.carillon.or) {
                                args[2] = this.inventaire.carillon.or;
                            }
                            this.inventaire.carillon.or -= args[2];
                            this.jeton += (vcarillonO*args[2]);
                        } else {
                            this.inventaire.carillon.or -= 1;
                            this.jeton += vcarillonO;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Carillion d'or`);
                    }
                    break;
                case "carillonplatine":
                    if (this.inventaire.carillon.platine != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.carillon.platine) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.carillon.platine) {
                                args[2] = this.inventaire.carillon.platine;
                            }
                            this.inventaire.carillon.platine -= args[2];
                            this.jeton += (vcarillonP*args[2]);
                        } else {
                            this.inventaire.carillon.platine -= 1;
                            this.jeton += vcarillonP;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Carillion de platine`);
                    }
                    break;
                case "petitegem":
                    if (this.inventaire.gemme.petite != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.gemme.petite) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.gemme.petite) {
                                args[2] = this.inventaire.gemme.petite;
                            }
                            this.inventaire.gemme.petite -= args[2];
                            this.jeton += (vgemmeP*args[2]);
                        } else {
                            this.inventaire.gemme.petite -= 1;
                            this.jeton += vgemmeP;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Petite Gem`);
                    }
                    break;
                case "moyennegem":
                    if (this.inventaire.gemme.moyenne != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.gemme.moyenne) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.gemme.moyenne) {
                                args[2] = this.inventaire.gemme.moyenne;
                            }
                            this.inventaire.gemme.moyenne -= args[2];
                            this.jeton += (vgemmeM*args[2]);
                        } else {
                            this.inventaire.gemme.moyenne -= 1;
                            this.jeton += vgemmeM;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Gem Moyenne`);
                    }
                    break;
                case "grossegem":
                    if (this.inventaire.gemme.grosse != 0) {
                        if (args[2]) {
                            if (typeof args[2] != this.inventaire.gemme.grosse) {
                                args[2] = parseInt(args[2]);
                            }
                            if (parseInt(args[2]) > this.inventaire.gemme.grosse) {
                                args[2] = this.inventaire.gemme.grosse;
                            }
                            this.inventaire.gemme.grosse -= args[2];
                            this.jeton += (vgemmeG*args[2]);
                        } else {
                            this.inventaire.gemme.grosse -= 1;
                            this.jeton += vgemmeG;
                        }
                    } else {
                        message.reply(`Vous ne possedez pas de Petite Gem`);
                    }
                    break;
                    
            
                default:
                    message.reply(`Pour vendre utiliser la commande de vente suivis de l'objet a vendre et du montant a vendre
                    ex: ${bot.config.prefixe}vendre pomme 10`);
                    break;
            }
        } else {
            message.reply(`la commande doit être suivi par l'objet a vendre et le montant`);
        }
    }

    chargerdonnee(bot, message, args)
    {
        var self = this;
        var fs = require('fs');
        if (fs.existsSync('./.data/player/'+message.author.id+'.json')) {
            var data = fs.readFileSync('./.data/player/'+message.author.id+'.json');
            //console.log(data.toString());
            var obj = JSON.parse(data.toString());
            this.id = obj.id;
            this.energiemax = obj.energiemax;
            this.energie = obj.energie;
            this.etat = obj.etat;
            this.jeton = obj.jeton;
            this.habitat = obj.habitat;
            this.inventaire = obj.inventaire;
        } else {
            fs.writeFileSync('./.data/player/'+message.author.id+'.json', "", "utf8");  
        }
    }

    sauvegarderdonnee(bot, message, args){
        var fs = require('fs');
        //console.log("##########################");
        var tosave = JSON.stringify(this);
        //console.log(tosave);
        fs.writeFileSync('./.data/player/'+message.author.id+'.json',tosave, 'utf8');
    } 
}

function reveil(etat, message)
{
    etat = "innocupe";
    message.reply(`Vous vous êtes reveillez.`);
}

module.exports = AraneinEntity;