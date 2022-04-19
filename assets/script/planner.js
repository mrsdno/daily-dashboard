// create delete button and add to each item
var close = document.getElementsByClassName("close");
var i;

for (i=0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// add check when you click an item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
}, false);

// create new list item when you click the add button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input-box").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if(inputValue === '') {
        alert("You must write something to add a task!");
    } else {
        document.getElementById("task-list").appendChild(li);
    }
    document.getElementById("input-box").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i=0; i < close.length; i++) {
        close[i].onclick = function() {
            var div= this.parentElement;
            div.style.display = "none";
        }
    }
}