const formElement = document.querySelector(".form__popup-form");
const nameInput = formElement.querySelector(".form__input_name");
const nameOutput = document.querySelector(".profile__name");
const jobInput = formElement.querySelector(".form__input_job");
const jobOutput = document.querySelector(".profile__job");
const editBtn = document.querySelector(".profile__edit-button");
const closeBtn = document.querySelector(".form__close-button");
const form = document.querySelector(".form__container");


function toggle() {
    form.classList.toggle("form__container_active");
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




