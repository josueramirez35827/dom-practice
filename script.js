let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {

  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  document.getElementById("main-title").textContent = "Welcome to Dom's Homepage!";

  // Part 2

  document.body.style.background = "lightblue";

  // Part 3

  let Staring = document.getElementById("favorite-things").children[5];
  Staring.remove();

  // Part 4

  let elements = document.getElementsByClassName("special-title");

  for (i = 0; i < elements.length; i++) {
    let element = elements[i];
    element.style.fontSize = "2rem";
  }

  // Part 5

  let Chicago = document.getElementById("past-races").children[3];
  Chicago.remove();


  // Part 6

  let node = document.createElement("li");
  node.innerHTML = "New York";

  document.getElementById("past-races").appendChild(node);

  // Part 7

  let mainDiv = document.querySelector(".main");
  let newDiv = document.createElement("div");

  mainDiv.appendChild(newDiv);
  newDiv.className = "blog-post purple test";

  let h1 = document.createElement("h1");
  h1.innerText = "New York";

  let p1 = document.createElement("p");
  p1.innerText = "THE CONRETE JUNGLE HAS NOTHING ON THE DOM!";

  newDiv.append(h1, p1);

}
