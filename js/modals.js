const projectModalFullStack = document.querySelector('#personal-project-full-stack');
const projectModalWeddingProject = document.querySelector('#personal-project-wedding-project');
const projectModaProTest = document.querySelector('#personal-project-pro-test');
const projectModalProjectGoit = document.querySelector('#personal-project-goit');

const projectModalQuestify = document.querySelector('#team-project-questify');
const projectModalItTest = document.querySelector('#team-project-it-test');

const projectOpenBtnFullStack = document.querySelector('#personal-project-full-stack-btn');
const projectOpenBtnWeddingProject = document.querySelector('#personal-project-wedding-project-btn');
const projectOpenBtnProTest = document.querySelector('#personal-project-pro-test-btn');
const projectOpenBtnProjectGoit = document.querySelector('#personal-project-goit-btn');

const projectOpenBtnQuestify = document.querySelector('#team-project-questify-btn');
const projectOpenBtnItTest = document.querySelector('#team-project-it-test-btn');

// const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

// const modalsWrapper = document.querySelector('.modals-wrapper');
// const modalContainers = document.querySelectorAll('.modal-container');

// const MODAL_ACTIVE_CLASS = 'modal-active';
// const BODY_SCROLL_DISABLE_CLASS = 'body-scroll-disable';

const projectModals = [ projectModalFullStack, projectModalWeddingProject, projectModaProTest, projectModalProjectGoit, projectModalQuestify, projectModalItTest];
const projectBtns = [ projectOpenBtnFullStack, projectOpenBtnWeddingProject, projectOpenBtnProTest, projectOpenBtnProjectGoit, projectOpenBtnQuestify, projectOpenBtnItTest];

// enableCloseModalOnBgdClick();

projectBtns.forEach((projectBtn, index) => {
    const projectModal = projectModals[index];

    projectBtn.addEventListener('click', () => {
        projectModal.classList.add(MODAL_ACTIVE_CLASS);

        document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
    })
});

// modalCloseBtns.forEach(btn => {
//     btn.addEventListener('click', hideModal);
// })

// function enableCloseModalOnBgdClick() {
//     modalContainers.forEach( container => {
//         container.addEventListener('click', event => event.stopPropagation());
//     });

//     modalsWrapper.addEventListener('click', hideModal);
// }

// function hideModal() {
//     const modalToClose = document.querySelector(`.${MODAL_ACTIVE_CLASS}`);

//     if (modalToClose) {
//         modalToClose.classList.remove(MODAL_ACTIVE_CLASS);
//         document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS);    
//     }
// }