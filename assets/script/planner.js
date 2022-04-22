var toDoTasks = {
    tasks: []
}

var addBtn = document.querySelector(".addBtn")
var taskListEl = document.querySelector("#task-list")


// create delete button and add to each item
var close = document.getElementsByClassName("close");
var i;

for (i=0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// cross out item when you click on i
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
}, false);

// create new list item when you click the add button
function newElement() {
    var taskLi = document.createElement("li");
    var inputValue = document.getElementById("input-box").value;
    var taskText = document.createTextNode(inputValue);
    taskLi.appendChild(taskText);

    // catch error if no input when clicking add
    if(inputValue === '') {
        alert("You must write something to add a task!");
    } else {
        document.getElementById("task-list").appendChild(taskLi);
        // add input value to the to do array
        toDoTasks.tasks.push(inputValue);

        // save array to local storage
        localStorage.setItem("to-do", toDoTasks.tasks);
    }





    document.getElementById("input-box").value = "";



    var span = document.createElement("span");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    taskLi.appendChild(span);
    console.log(inputValue);



    // delete the item when you click close
    for (i=0; i < close.length; i++) {
        close[i].onclick = function() {
            var div= this.parentElement;
            div.style.display = "none";
        }
    }
}

function loadTasks() {
    var savedTasks = localStorage.getItem("to-do");

    if (savedTasks) {
        savedTasksList = savedTasks.split(',');

        
        for (i=0; i < savedTasksList.length; i++) {
            // create task
            var taskLi = document.createElement("li");
            taskLi.textContent = savedTasksList[i];
            console.log(taskLi);

            // create close btn
            var span = document.createElement("span");
            var txt = document.createTextNode("\u00d7");
            span.className = "close";
            span.appendChild(txt);
            taskLi.appendChild(span);

            // append to page
            taskListEl.appendChild(taskLi);
            
            // keep tasks in local storage
            // add this task to the to do array
            toDoTasks.tasks.push(savedTasksList[i]);

            // save array to local storage
            localStorage.setItem("to-do", toDoTasks.tasks);

            // delete the item when you click close
            for (t=0; t < close.length; t++) {
                close[t].onclick = function() {
                var div= this.parentElement;
                div.style.display = "none";              
                }
            }

        }
    }
   

}

loadTasks();
addBtn.addEventListener('click', newElement)