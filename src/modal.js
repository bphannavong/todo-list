import render from './displayTodos.js';
import events from './mediator.js';

const handleModal = (function () {

    //cache DOM
    const modal = document.getElementById('taskModal');
    const closeModal = document.querySelector('.close');
    const addBtn = document.getElementById('addBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    //bind events
    addBtn.addEventListener('click', show);
    closeModal.addEventListener('click', hide);

    submitBtn.addEventListener('click', getValues);
    submitBtn.addEventListener('click', hide);

    window.addEventListener('click', function (e) { //if window is clicked on modal (not modal content) then close modal
        if (e.target == modal) {
            hide();
        }
    });

    function show() {
        modal.style.display = 'block';
    }

    function hide() {
         modal.style.display = 'none';
    }

    function getValues() {
        const name = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        //const values = values...
        // publish values => to pub
        events.publish('formSubmit', [name, description, dueDate, priority]);
    }
})();

