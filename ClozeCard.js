var BasicCard = require("./BasicCard.js");
// define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
//module.exports = ClozeCard; 
// constructor should accept two arguments: text and cloze.
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
// "Who was the first president of the United States?"
console.log(firstPresident.front); 
// "George Washington"
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
// "George Washington" cloze property that contains only the cloze-deleted portion of the text.
console.log(firstPresidentCloze.cloze); 
// " ... was the first president of the United States. partial property that contains only the partial text.
console.log(firstPresidentCloze.partial);
// "George Washington was the first president of the United States. fullText property that contains only the full text.
console.log(firstPresidentCloze.fullText)

// constructor should throw or log an error when the cloze deletion does not appear in the input text.
var brokenCloze = new ClozeCard("This doesn't work", "oops");

// Use prototypes to attach these methods, wherever possible.