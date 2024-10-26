
const greeting = ['Howdy!', 'Hey!', 'Hello!', 'Hi-ya!', 'Nice to see you!'];
const affirmation = ['You look great!', 'I am so excited to see you!', 'Look who it is! My favorite person!', 'I have been wondering what you have been up to!'];
const question = ['How are you?', 'Are you busy?', 'Can we catch up soon?', 'What have I missed?'];

function generateMessage() {

let randomMessage = [];

function randomGreeting() {
    const greetingIndex = Math.floor(Math.random() * greeting.length);
    const selectedGreeting = greeting[greetingIndex];
    randomMessage.push(selectedGreeting);
};

function randomAffirmation() {
    const affirmationIndex = Math.floor(Math.random() * affirmation.length);
    const selectedAffirmation = affirmation[affirmationIndex];
    randomMessage.push(selectedAffirmation);
};

function randomQuestion() {
    const questionIndex = Math.floor(Math.random() * question.length);
    const selectedQuestion = question[questionIndex];
    randomMessage.push(selectedQuestion);
};

randomGreeting();
randomAffirmation();
randomQuestion();

const generatedMessage = randomMessage.join(' ');

console.log(generatedMessage);

};

generateMessage();



