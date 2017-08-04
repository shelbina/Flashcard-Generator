var fs = require("fs");
var inquirer = require("inquirer");

// The constructor should accept two arguments: front and back.
function BasicCard(front, Back){
    this.front = front;  
    this.back = back;
	this.create = function() {
       
        var data = {
            front: this.front,
            back: this.back,
            type: "basic",
        };

        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
          
            if (error) {
                console.log(error);
            }
        });
    };
}
// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
module.exports = BasicCard;