const emoji = document.querySelector("#emoji");

const emojis = [
  "🙂",
  "😎",
  "🙄",
  "😴",
  "😛",
  "🤑",
  "😲",
  "🐱",
  "🙁",
  "😖",
  "😤",
  "🤯",
  "😵",
  "🥴",
  "🥵",
  "😇",
  "🤓",
];

// adding event listeners ['mouseover']
emoji.addEventListener("mouseover", () => {
  // change content of emoji
  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});
