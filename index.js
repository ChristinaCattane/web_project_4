const editButton = document.querySelector(".profile__edit-button");
const modalCloseButton = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal");
const form = document.querySelector(".modal__popup-form");
const inputName = document.querySelector(".modal__input_type_name");
const inputJob = document.querySelector(".modal__input_type_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const save = document.querySelector(".modal__button")


function toggleModal() {
    modal.classList.toggle("modal-visible");
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    profileName.textContent = inputName.value
    profileJob.textContent = inputJob.value

})
function updateProfile(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    toggleModal();
}
save.addEventListener("click", toggleModal);
editButton.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);








