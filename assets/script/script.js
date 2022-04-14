var humorApiKey = "9669728bcac44db48eb2b346ee61e5ef";
var jokeBtn = document.querySelector("#joke-btn");
var jokeTextEl = document.createElement("p");

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
    
    var jokeHolderEl = document.querySelector("#joke-holder");
    jokeTextEl.textContent = jokes.joke;
    jokeHolderEl.appendChild(jokeTextEl);
}

// get another joke



// Collection Of Quote
const quotes = [{
    quote: `Positive anything is better than
    negative nothing.`,
    author: `-Elbert Hubbard`
}, {
    quote: `Winning is fun, but those moments that you can touch someone’s life in a very positive way
    are better.`,
    author: `-Tim Howard`
}, {
    quote: `Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you.`,
    author: `-Mary Lou Retton`
}, {
    quote: `Virtually nothing is impossible in this world if you just put your mind to it and maintain a
    positive attitude.`,
    author: `-Lou Holtz`
}, {
    quote: `It makes a big difference in your life when you
    stay positive.`,
    author: `-Ellen DeGeneres`
}, {
    quote: `If opportunity doesn’t knock, build a door.`,
    author: `-Milton Berle`
}, {
    quote: `You are never too old to set another goal or dream a new dream.`,
    author: `-Les Brown`
}, {
    quote: `Happiness is an attitude. We either make ourselves miserable, or happy and strong. The amount of work is
    the same.`,
    author: `-Francesca Reigler`
}, {
    quote: `The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.`,
    author: `-Charles Dickens`
}, {
    quote: `It’s not whether you get knocked down, it’s whether you get up.`,
    author: `-Vince Lombardi`
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})

getJokes();
//Date function
let dateToday = document.getElementById("currentDay");

let today = new Date();
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;

let month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
console.log(month);
let year = today.getFullYear();

dateToday.textContent = `${day}/${month}/${year}`