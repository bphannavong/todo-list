// events.publish('todoCreated', todoObj);

const Todo = (name, description, dueDate, priority, notes) => {
    return {name, description, dueDate, priority, notes};
};

export default Todo;


// class Todo {
//     constructor(name, description, dueDate, priority, notes) {
//         this.name = name;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//         this.notes = notes;
//     }
    
// }
