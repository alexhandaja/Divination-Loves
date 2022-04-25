var answers = ["That's a hard one to answer", 
"Hmm.. I'm not sure", 
"Without a doubt", 
"Yes - definitely",
"Definitely not", 
"Most likely", 
"High chance", 
"No", 
"Yes", "Luck is on your side",
"Luck is not on your side", 
"Run away",
"Give up", 
"You should try",
"Try again later", 
"You're gonna be disappointed", 
"Ask again later", 
"They are definitely in love",
"100%", 
"Ask me again"];

let displayAnswer = function() {
    var counter=0;
    response.innerText = "";
    
    var num = Math.floor(Math.random() * Math.floor(answers.length));
    
    answer.innerText = answers[num];
    counter++;

    if(counter==2){
      displayAnswer.style.display = 'none'; //hide if the clicks reached to 5
    }
};
