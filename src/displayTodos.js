//Module to manipulate DOM for todos
import events from './mediator.js';

const displayTodos = (() => {
    //Cache DOM
    const content = document.getElementById('todos');

    //Bind Events
    events.subscribe('tasksUpdated', displayCards);

    function displayCards(todoArr) {
        content.innerHTML = '';
        for (const item of todoArr) {
            const element = document.createElement('div');
            const removeBtn = document.createElement('button', {type: 'button'});
            removeBtn.addEventListener('click', removeCard);
            element.classList.add('card');
            element.setAttribute('id', item.name);
            element.appendChild(removeBtn);
            
            for (const prop in item) {
                const component = document.createElement('div');
                component.innerHTML = item[prop];
                element.appendChild(component);
            }
            content.appendChild(element);
        }
    }

    function removeCard(e) {
        const removed = e.target.closest('div').id; //find name of todo chosen to remove
        events.publish('cardRemoved', removed); //published id/name of removed todo
    }

})();
