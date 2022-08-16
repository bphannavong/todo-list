import Todo from './todo.js'

const todoArr = [new Todo('steve', 'a', 'v', 'v', 'notes')];

const content = document.getElementById('current');
export default function makeCard() {
    for (const i in todoArr){
        const element = document.createElement('div');
        element.classList.add('card');

        for (const prop in i) {
            const component = document.createElement('div');
            component.innerHTML = i[prop];
            element.appendChild(component);
        }

        content.appendChild(element);
    }
}