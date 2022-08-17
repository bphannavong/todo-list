// events.publish('todoCreated', todoObj);
const tasks = [];

const Todo = (name, description, dueDate, priority) => {
    return {name, description, dueDate, priority};
};

export default Todo;


//sub to modal values ==> push todo to list
function addTodo(name, description, dueDate, priority) {
    tasks.push(Todo(name, description, dueDate, priority));
}
// class Todo {
//     constructor(name, description, dueDate, priority, notes) {
//         this.name = name;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//     }
    
// }