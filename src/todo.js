// events.publish('todoCreated', todoObj);

export default class Todo {
    constructor(name, description, dueDate, priority, notes) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}