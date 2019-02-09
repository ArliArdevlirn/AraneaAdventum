class Exemple 
{
    constructor()
    {
        this.var1 = 0;
    }

    async loadVarFromFile()
    {
        var fs = require('fs');
        fs.readFile("data.json", function readCallback(err, data){
            var obj = JSON.parse(data);
            //???
        });
    }
}
// data.json content : {"test":10,"test2":15}