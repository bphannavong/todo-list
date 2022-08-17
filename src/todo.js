// events.publish('todoCreated', todoObj);
import events from './mediator.js';
const tasks = [];


const Todo = ([name, description, dueDate, priority]) => {
    return {name, description, dueDate, priority};
};

export default Todo;

events.subscribe('formSubmit', addTodo);
//sub to modal values ==> push todo to list
function addTodo(arr) {
    
    tasks.push(Todo(arr));
    events.publish('todoAdded', tasks);
}
// class Todo {
//     constructor(name, description, dueDate, priority, notes) {
//         this.name = name;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//     }
    
// }