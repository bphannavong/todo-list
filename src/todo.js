import events from './mediator.js';

const todo = (function() {
    //task array with all todos
    let tasks = [];

    //bind events
    events.subscribe('formSubmitted', addTodo);
    events.subscribe('cardRemoved', removeTodo);

     //Todo factory function
     const Todo = ([name, description, dueDate, priority]) => {
        return {name, description, dueDate, priority};
    };
    
    //sub to modal values ==> push todo to list
    function addTodo(newValues) {
        tasks.push(Todo(newValues));
        events.publish('tasksUpdated', tasks);
    }

    function removeTodo(todoName) {
        tasks = tasks.filter(item => item.name !== todoName);
        events.publish('tasksUpdated', tasks);
    }
})();
