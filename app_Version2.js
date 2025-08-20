const questions = [
  "Do you love me?",
  "Are you sure? Think again 🥺",
  "Please? I'll be the happiest person ever! 💖",
  "You can't say no to this face 😘",
  "I'll ask one last time: Do you love me?",
  "Just say YES! 😍"
];
let currentQuestion = 0;

const questionElem = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageElem = document.getElementById('message');

yesBtn.onclick = function() {
  questionElem.style.display = 'none';
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  messageElem.innerHTML = "Yay! I love you so much baby! 💖🥰";
};

noBtn.onclick = function() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    questionElem.textContent = questions[currentQuestion];
  } else {
    // Force her to click Yes!
    questionElem.textContent = "You have to say YES! 😜";
    noBtn.style.display = 'none';
  }
};