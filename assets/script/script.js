const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `- ${data.author}`;
    });
}

// Jokes API

var humorApiKey = "9669728bcac44db48eb2b346ee61e5ef";

// fetch jokes from humorapi
var getJokes = function() {
    // humor API url
    var humorApiURL = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single"

    fetch(humorApiURL).
    then(function(response) {
        if (response.ok) {
            response.json().then(function(response){
                displayJokes(response);
            })
        }
    })
}

// display jokes on page

var displayJokes = function(jokes) {
    // create element to hold joke, select element to append joke
    var jokeTextEl = document.createElement("p");
    var jokeHolderEl = document.querySelector("#joke-holder");
    jokeTextEl.textContent = jokes.joke;

    jokeHolderEl.appendChild(jokeTextEl);
    

}