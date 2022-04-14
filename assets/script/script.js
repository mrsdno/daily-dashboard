//Date function
let dateToday = document.getElementById("currentDay");

let today = new Date();
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;

let month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
console.log(month);
let year = today.getFullYear();

dateToday.textContent = `${day}/${month}/${year}`
