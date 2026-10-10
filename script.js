const answers = [
  "Take a ten-minute wander and notice three things you’ve never spotted before.",
  "Find a patch of sun, sit down, and do absolutely nothing for a few minutes.",
  "Take the long way to your next errand. Bonus points for a tree-lined street.",
  "Bring a drink outside and enjoy it somewhere that isn’t your usual spot.",
  "See how many different bird calls you can hear on a short walk.",
  "Visit a local park and follow the path you usually pass by.",
  "Take a pocket-sized sketchbook outside and draw the nearest leaf.",
  "Give a plant some attention: check the soil, pull a weed, or water it.",
  "Walk until you find something colorful, then take a closer look.",
  "Pick up a snack and have a tiny picnic somewhere nearby.",
  "Stretch your legs outside. No routine required—just move how you like.",
  "Find a quiet place and listen for a minute with your phone away.",
  "Take a friend on a catch-up walk. Let the route be a surprise.",
  "Look for signs of the season: changing leaves, seed pods, or cooler air.",
  "Head to a nearby green space and see what’s blooming.",
  "Step outside and follow the breeze for one block.",
  "Choose a short trail or neighborhood loop you haven’t tried before.",
  "Bring a reusable bag and pick up a few pieces of litter on your walk.",
  "Watch the clouds for five minutes and name the shapes you see.",
  "Find a bench with a view and give yourself a proper screen break.",
];

const form = document.querySelector("#question-form");
const questionInput = document.querySelector("#question");
const answerCard = document.querySelector("#answer-card");
const answerText = document.querySelector("#answer-text");
const askAgainButton = document.querySelector("#ask-again");
const suggestionButtons = document.querySelectorAll(".suggestion");

let previousAnswerIndex = -1;

function showRandomAnswer() {
  let answerIndex;

  if (answers.length > 1 && previousAnswerIndex >= 0) {
    answerIndex = Math.floor(Math.random() * (answers.length - 1));
    if (answerIndex >= previousAnswerIndex) answerIndex += 1;
  } else {
    answerIndex = Math.floor(Math.random() * answers.length);
  }

  previousAnswerIndex = answerIndex;
  answerText.textContent = answers[answerIndex];
  answerCard.hidden = false;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showRandomAnswer();
});

askAgainButton.addEventListener("click", showRandomAnswer);

suggestionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    questionInput.value = button.textContent;
    showRandomAnswer();
    questionInput.focus();
  });
});
