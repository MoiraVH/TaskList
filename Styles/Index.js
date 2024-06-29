const TaskList = document.getElementById("InputTask");
const ListC = document.getElementById("ListContainer");

function addTask(){
    if(TaskList.value === ''){
        alert("You must add a task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = TaskList.value;
        ListC.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    TaskList.value = "";
    saveData();
}

ListC.addEventListener("click", function(e) { 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showList(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showList();