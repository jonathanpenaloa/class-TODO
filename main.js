let formElement = document.querySelector('form');
let ul = document.querySelector('ul');



formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let todoItemFromForm = formElement.elements['todo-item'];
    let todoDescriptionFromForm = formElement.elements['description'];

    todos.createDOMElement(todoItemFromForm.value);
    
    todoItemFromForm.value = "";
    todoDescriptionFromForm.value = "";
});



class TodoItem {
    constructor(id, text, isCompleted = false) {
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
        this.element = null;
    }
    createDOMElement(todoText, todoDescrip) {
       let addedLi = document.createElement('li');

       let input = document.createElement('input');
       input.setAttribute("type", "checkbox");

       let label = document.createElement("label");
       label.setAttribute("for", "todos");
       label.textContent = todoText;

       let button = document.createElement("button");
       button.setAttribute("id", "delete");
       button.textContent = "X";

       button.addEventListener("click", () => {
        ul.removeChild(addedLi);
       });

       addedLi.appendChild(input);
       addedLi.appendChild(label);
       addedLi.appendChild(button);

       ul.appendChild(addedLi);
       return ul;
    }
    
    updateDOMElement(ul) {
        console.log(ul);
    }
}


let todos = new TodoItem();
todos.updateDOMElement(todos.id)


class TodoList {
    constructor(todoItem, todoDescription) {
    this.todoItem = todoItem
    this.todoDescription = todoDescription
    }
    add(text) {

    }
    remove(id) {

    }
    update(id, updates) {

    }
}
