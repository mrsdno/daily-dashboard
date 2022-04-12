// Collection Of Quote
const quotes = [{
    quote: `Quote 1`,
    author: `-Author`
}, {
    quote: `Quote 2`,
    author: `-Author`
}, {
    quote: `Quote 3`,
    author: `-Author`
}, {
    quote: `Quote 4`,
    author: `-Author`
}, {
    quote: `Quote 5`,
    author: `-Author`
}, {
    quote: `Quote 6`,
    author: `-Author`
}, {
    quote: `Quote 7`,
    author: `-Author`
}, {
    quote: `Quote 8`,
    author: `-Author`
}, {
    quote: `Quote 9`,
    author: `-Author`
}, {
    quote: `Quote 10`,
    author: `-Author`
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