const todoInput = document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delecteCheck);
filterOption.addEventListener("change",filterTodo )

function addTodo(event) {
   event.preventDefault();
  

   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");

   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);


   const completedButton = document.createElement('button');
   completedButton.innerHTML = `<i class="fas fa-check"></i>`;
   completedButton.classList.add('complet-button');
   todoDiv.appendChild(completedButton);


   const trashButton = document.createElement('button');
   trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
   trashButton.classList.add('trash-button');
   todoDiv.appendChild(trashButton);

   todoList.appendChild(todoDiv);
   todoInput.value = "";
}

function delecteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitoned', function() {
            todo.remove()
        });
    }
    if (item.classList[0] === "complet-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
} 

function filterTodo (e) {
    const todos = Array.from(todoList.children);
    todos.map(function(todo){
      switch(e.target.value) {
        case "all": 
        todo.style.display ="flex";
        break;
        case "completed":
      if (todo.classList.contains("completed")) {
        todo.style.display = "flex";
      }else {
        todo.style.display = "none"
      }
      break;
      case "uncompleted":
       if (!todo.classList.contains("completed")) {
         todo.style.display = "flex";
     } else {
       todo.style.display = "none";
     }
         break;
      }  
    });
}

