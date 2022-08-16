import Todo from './todo.js'

const todoArr = [new Todo('steve', 'a', 'v', 'v', 'notes')];

const content = document.getElementById('todos');
export default function makeCard() {
    for (const item of todoArr){
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

//send out signal that new todo created event