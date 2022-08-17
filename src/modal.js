import makeCard from './displayTodos.js';

const handleModal = (function () {``
    const modal = document.getElementById('taskModal');
    const closeModal = document.querySelector('.close');
    const addBtn = document.getElementById('addBtn');
    const submitBtn = document.getElementById('submitBtn');

    addBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    submitBtn.addEventListener('click', makeCard);
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
        //const values = values...
        // publish values => to pub
    }
});

export default handleModal;

