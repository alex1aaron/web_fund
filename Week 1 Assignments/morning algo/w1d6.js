function d6(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
d6(1,6);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// Using the following array, write a function that will answer all of our questions by randomly choosing a response

function oracle(numberOfAnswers){
    var answers = [];
    for (var i = 1; i <= numberOfAnswers; i++) {
        answers.push(lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)])
    }
    return answers;
}

oracle(3);

