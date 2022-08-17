//Module to manipulate DOM for todos
import Todo from './todo.js'
import events from './mediator.js';

const displayTodos = (() => {
    const todoArr = []; //would be array from todo module
    const content = document.getElementById('todos');

    events.subscribe('todoAdded', tasks => todoArr.push(tasks));

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

            //.subscribe('todoAdded', makeCard) where to put this logic?
        }
    }

    // function makeCard() {
    //     const newTodo = Todo('Toby', 'Mick', '14', 'Yeah', 'notes'); //would be new info from dom
    //     todoArr.push(newTodo);
    //     displayCards();
    //     //sub to todo array then => create new card
        
    // }
    return { displayCards };
})();

//send out signal that new todo created event

export default displayTodos.makeCard;