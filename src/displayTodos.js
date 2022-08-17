//Module to manipulate DOM for todos
import events from './mediator.js';

const displayTodos = (() => {
    //Cache DOM
    const content = document.getElementById('todos');

    //Bind Events
    events.subscribe('todoAdded', displayCards);

    function displayCards(todoArr) {
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

    // function removeCard(item)

})();
