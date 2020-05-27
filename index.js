const modalElement = document.querySelector(".modal__popup-form");
const nameInput = formElement.querySelector(".modal__input_name");
const nameOutput = document.querySelector(".profile__name");
const jobInput = formElement.querySelector(".modal__input_job");
const jobOutput = document.querySelector(".profile__job");
const editBtn = document.querySelector(".profile__edit-button");
const closeBtn = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal__container");


function toggle() {
    form.classList.toggle("modal__container_active");
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameOutput.textContent = nameInput.value;
    jobOutput.textContent = jobInput.value;
    toggle()
}

formElement.addEventListener("submit", formSubmitHandler);
editBtn.addEventListener("click", toggle);
closeBtn.addEventListener("click", toggle);




