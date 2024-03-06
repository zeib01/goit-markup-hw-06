(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle('is-open');
    }
})();

const buttonElem = document.querySelector('.wrapper_button');
const modalElem = document.querySelector('.backdrop');
const openModal = () => { modalElem. }

buttonElem.addEventListener('click', openModal);
