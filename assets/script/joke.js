// Jokes API
var humorApiKey = "9669728bcac44db48eb2b346ee61e5ef";
var jokeBtn = document.querySelector("#joke-btn");
var jokeTextEl = document.createElement("p");

// fetch jokes from joke api
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
    // REMEMBER TO ADD CATCH AND SUCH
}

var nextJoke = function() {
    var displayedJoke = document.getElementById("display-joke");
    
    if (displayedJoke) {
    displayedJoke.remove();
    }

    getJokes();
}




// display jokes on page
// Jokes API
var humorApiKey = "9669728bcac44db48eb2b346ee61e5ef";

var humorApiKey = "9669728bcac44db48eb2b346ee61e5ef";
var jokeBtn = document.querySelector("#joke-btn");
var jokeTextEl = document.createElement("p");

jokeBtn.addEventListener("click", nextJoke);

var displayJokes = function(jokes) {
    // create element to hold joke, select element to append joke
    var jokeTextEl = document.createElement("p");
    var jokeHolderEl = document.querySelector("#joke-holder");
    jokeTextEl.textContent = jokes.joke;
    jokeHolderEl.appendChild(jokeTextEl);
    jokeTextEl.setAttribute("id", "display-joke");
}

<<<<<<< HEAD




// get another joke


getJokes();
=======
getJokes()
>>>>>>> fd77d3ec8b064b1f58d50a2a4f60a0c6ae5ab6a0
