const editButton = document.querySelector(".profile__edit-button");
const modalCloseButton = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal");
const form = document.querySelector(".modal__popup-form");
const inputName = document.querySelector(".modal__input_name");
const inputJob = document.querySelector(".modal__input_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function toggleModul() {
    modal.classList.toggle("modal__visible");
}


editButton.addEventListener("click", toggleModul);

modalCloseButton.addEventListener("click", toggleModul);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    profileName.textContent = inputName.value
    profileJob.textContent = inputJob.value

})






