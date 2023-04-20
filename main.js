

let formIElement = document.querySelector('form');

formIElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let todoItemFromForm = formIElement.elements['todo-item'];
    let todoDescriptionFromForm = formIElement.elements['description'];
    console.log(todoItemFromForm.value);
    console.log(todoDescriptionFromForm.value);
})



class TodoItem {
    constructor(id, text, isCompleted = false, element) {
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
        this.element = element;
    }
    createDOMElement() {
        
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
