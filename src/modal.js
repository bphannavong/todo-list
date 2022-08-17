import makeCard from './displayTodos.js';
import events from './mediator.js';

const handleModal = (function () {

    //cache DOM
    const modal = document.getElementById('taskModal');
    const closeModal = document.querySelector('.close');
    const addBtn = document.getElementById('addBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    const show = function() {
        modal.style.display = 'block';
    }
    //bind events
    addBtn.addEventListener('click', show);

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    submitBtn.addEventListener('click', getValues);
    submitBtn.addEventListener('click', function () {
        modal.style.display = 'none'
    });

    window.addEventListener('click', function (e) { //if window is clicked on modal (not modal content) then close modal
        console.log(e.target);
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    })

    function getValues() {
        const name = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        //const values = values...
        // publish values => to pub

        events.publish('formSubmit', [name, description, dueDate, priority]);
    }

    return {};
});

export default handleModal;

