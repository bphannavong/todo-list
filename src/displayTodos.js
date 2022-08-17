//Module to manipulate DOM for todos


import Todo from './todo.js'

const displayTodos = (() => {
    let todoArr = [Todo('steve', 'a', 'v', 'v', 'notes'), Todo('Joe', 'aa', 's', '14', 'notes')]; //would be array from todo module
    const content = document.getElementById('todos');

    function displayCards() {
        content.innerHTML = '';
        for (const item of todoArr) {
            const element = document.createElement('div');
            element.classList.add('card');
            for (const prop in item) {
                const component = document.createElement('div');
                component.innerHTML = item[prop];
                element.appendChild(component);
            }
            content.appendChild(element);
        }
    }

    function makeCard() {
        const newTodo = Todo('Toby', 'Mick', '14', 'Yeah', 'notes'); //would be new info from dom
        todoArr.push(newTodo);
        displayCards();
    }
    return { makeCard };
})();

//send out signal that new todo created event

export default displayTodos.makeCard;