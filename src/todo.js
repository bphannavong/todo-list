import events from './mediator.js';

const todo = (function() {
    //task array with all todos
    const tasks = [];

    //bind events
    events.subscribe('formSubmit', addTodo);

     //Todo factory function
     const Todo = ([name, description, dueDate, priority]) => {
        return {name, description, dueDate, priority};
    };
    
    //sub to modal values ==> push todo to list
    function addTodo(arr) {
        tasks.push(Todo(arr));
        console.log(tasks);
        events.publish('todoAdded', tasks);
    }
})();
