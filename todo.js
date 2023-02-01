const todoform = document.querySelector(".form-todo");
const todoinput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoform.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodotext = todoinput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTodotext}</span>
    <div class="todo-bottons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoinput.value = "";
});

todoList.addEventListener("click", (e) => {
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"
    }
})