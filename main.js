let formIElement = document.querySelector('form');
let ul = document.querySelector('ul');



formIElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let todoItemFromForm = formIElement.elements['todo-item'];
    let todoDescriptionFromForm = formIElement.elements['description'];

    createDOMElement(todoItemFromForm.value, todoDescriptionFromForm.vlaue);
    console.log(todoItemFromForm.value);
    console.log(todoDescriptionFromForm.value);
    
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
       button.textContent = "X"

       addedLi.appendChild(input);
       addedLi.appendChild(label);
       addedLi.appendChild(button);

       ul.appendChild(addedLi);



    }
    updateDOMElement() {

    }
}


class TodoList {
    constructor(todoItem, todoDescription) {

    }
    add(text) {

    }
    remove(id) {

    }
    update(id, updates) {

    }
}
