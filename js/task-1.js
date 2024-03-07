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



window.onload = () => {
    const buttonElem = document.querySelector('.wrapper_button');
    const modalElem = document.querySelector('.backdrop');
    const closeBtnElem = document.querySelector('.modal-btn');

    // buttonElem.onclick = () => {
    //     modalElem.classList.add("is-open");
    // }
    // closeBtnElem.onclick = () => {
    //     modalElem.classList.remove("is-open");
    // }

    function toggleModal() {
        modalElem.classList.toggle('is-open');
    }
    buttonElem.onclick = toggleModal;
    closeBtnElem.onclick = toggleModal;
}