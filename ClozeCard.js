var BasicCard = require("./BasicCard.js");
var fs = require("fs");

function ClozeCard(text, Cloze){
    this.text = text.split(cloze);
    this.cloze = cloze;
        this.create = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted,
            type: "cloze"
        };
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
// constructor should throw or log an error when the cloze deletion does not appear in the input text.          
            if (error) {
                console.log(error);
            }
        });
    };
}

// define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
module.exports = ClozeCard;