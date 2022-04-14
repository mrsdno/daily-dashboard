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

var nextJoke = function() {
    jokeTextEl.textContent = "";
    getJokes();
}

jokeBtn.addEventListener("click", nextJoke);

// display jokes on page

var displayJokes = function(jokes) {
    // create element to hold joke, select element to append joke

    var jokeTextEl = document.createElement("p");
    var jokeHolderEl = document.querySelector("#joke-holder");
    jokeTextEl.textContent = jokes.joke;

    jokeHolderEl.appendChild(jokeTextEl);
    

}

// Jokes API
var humorApiKey = "9669728bcac44db48eb2b346ee61e5ef";

var humorApiKey = "9669728bcac44db48eb2b346ee61e5ef";
var jokeBtn = document.querySelector("#joke-btn");
var jokeTextEl = document.createElement("p");

// get another joke

getJokes();
