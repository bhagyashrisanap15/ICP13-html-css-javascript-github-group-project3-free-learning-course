let todoItems = JSON.parse(localStorage.getItem("todos")) || [];


function displayTodoItems() {
    const todoItemsContainer = document.getElementById("todo-items-container");
    todoItemsContainer.innerHTML = "";

    for (let i = 0; i < todoItems.length; i++) {
        todoItemsContainer.innerHTML += `
            <div class="todo-item">
                ${todoItems[i]}
                <img src="../images/delete.png"
                     onclick="deleteTodoItem(${i})"
                     class="delete-btn"
                     alt="Delete">
            </div>`;
    }
}
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("show");
}


function addTodoItem() {
    const todoInput = document.getElementById("todo-input");
    const newTodoItem = todoInput.value.trim();

    if (newTodoItem === "") {
        alert("Please enter a valid task.");
        return;
    }

    todoItems.push(newTodoItem);
    localStorage.setItem("todos", JSON.stringify(todoItems));
    todoInput.value = "";
    displayTodoItems();
}
function deleteTodoItem(index) {
    todoItems.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todoItems));
    displayTodoItems();
}

function clearAllTodoItems() {
    todoItems = [];
    localStorage.removeItem("todos");
    displayTodoItems();
}
displayTodoItems();