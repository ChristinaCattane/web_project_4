const editButton = document.querySelector(".profile__edit-button");

//  I have found two modals
const editProfileModal = document.querySelector(".modal_type_edit-profile");
const addCardModal = document.querySelector(".modal_type_add-card");
const imageModalWindow = document.querySelector(".modal_type_image");

// I have found forms inside modals above
const editForm = editProfileModal.querySelector(".modal__popup-form");
const cardForm = addCardModal.querySelector(".modal__popup-form")

// found save buttons inside forms (not inside document)
const saveEditButton = editForm.querySelector(".modal__button");
const saveAddCardButton = cardForm.querySelector(".modal__button");

// close buttons inside modals
const editCloseButton = editProfileModal.querySelector(".modal__close-button");
const addCloseButton = addCardModal.querySelector(".modal__close-button");
const imageCloseButton = imageModalWindow.querySelector(".modal__close-button")

// find inputs inside  edit profile form
const inputName = editForm.querySelector(".modal__input_type_name");
const inputJob = editForm.querySelector(".modal__input_type_job");
// find info spans
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

// find inputs inside  add card from
const inputPlaceName = cardForm.querySelector(".modal__input_type_card-name");
const inputImageLink = cardForm.querySelector(".modal__input_type_url");

//find inputs inside image popout
const popoutImage = imageModalWindow.querySelector(".image__popout-image");
const popoutTitle = imageModalWindow.querySelector(".image__popout-title");



const addButton = document.querySelector(".profile__add-button");

addButton.addEventListener('click', () => {
    // I close 
    toggleModal(addCardModal);
})
addCloseButton.addEventListener("click", () => {
    toggleModal(addCardModal);
})

editButton.addEventListener("click", () => {
    toggleModal(editProfileModal);
})
editCloseButton.addEventListener("click", () => {
    toggleModal(editProfileModal);
})
imageCloseButton.addEventListener('click', () => {
    toggleModal(imageModalWindow);
})


function toggleModal(modal) {
    modal.classList.toggle("modal_visible");
    inputName.value = profileName.textContent
    inputJob.value = profileJob.textContent
}
editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    profileName.textContent = inputName.value
    profileJob.textContent = inputJob.value
    toggleModal(editProfileModal);
})
cardForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = {name: inputPlaceName.value, link: inputImageLink.value};
    renderCard(data);
    toggleModal(addCardModal);
})



const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];


const cardTemplate = document.querySelector('.card-template').content.querySelector('.element');



const createCard = (data) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector('.element__title');
    const cardImage = cardElement.querySelector('.element__img');
    const cardLikeButton = cardElement.querySelector('.element__heart');
    const cardRemoveButton = cardElement.querySelector('.element__remove-button');


    cardTitle.textContent = data.name;
    cardImage.style.backgroundImage = `url(${data.link})`;
    cardImage.style.backgroundSize = "cover";
    cardImage.style.minHeight = "282px";

    cardLikeButton.addEventListener('click', () => {
        //changeHeartColor()
        cardLikeButton.classList.toggle("element__heart-active");
    })

    cardRemoveButton.addEventListener('click', (e) => {
        //RemoveCard
        e.target.closest(".element").remove();
    })

    cardImage.addEventListener('click', (e) => {
        console.log(popoutImage, e.target.style);
        
        popoutImage.src = data.link;
        popoutImage.alt = data.name;
        popoutTitle.textContent = data.name;

        toggleModal(imageModalWindow);
    })
  
    return cardElement;
}

const list = document.querySelector('.elements');


const renderCard = (data) => {
    list.prepend(createCard(data));
}

initialCards.forEach((data) => {
    renderCard(data);
})


