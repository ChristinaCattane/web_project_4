const editButton = document.querySelector(".profile__edit-button");

const modal = document.querySelector(".modal");
const form = document.querySelector(".modal__popup-form");
const inputName = document.querySelector(".modal__input_type_name");
const inputJob = document.querySelector(".modal__input_type_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const save = document.querySelector(".modal__button");
const editProfileWindow = document.querySelector(".modal_type_edit-profile");
const addCardModalWindow = document.querySelector(".modal_type_add-card");

const editCloseButton = editProfileWindow.querySelector(".modal__close-button");
const addCloseButton = addCardModalWindow.querySelector(".modal__close-button");

const addButton = document.querySelector(".profile__add-button");
addButton.addEventListener('click', () => {
    toggleModal(addCardModalWindow);
})
addCloseButton.addEventListener("click", toggleModal);

editButton.addEventListener("click", () => {
    toggleModal(editProfileWindow);
})
editCloseButton.addEventListener("click", toggleModal);

function toggleModal(modal) {
    modal.classList.toggle("modal_visible");
    inputName.value = profileName.textContent
    inputJob.value = profileJob.textContent
}
/*form.addEventListener("submit", (e) => {
    e.preventDefault();

    profileName.textContent = inputName.value
    profileJob.textContent = inputJob.value
    toggleModal()
})*/





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
    const cardRemoveButton =cardElement.querySelector('.element__remove-button');
  
  
  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;
  cardImage.style.backgroundSize = "cover";
  cardImage.style.minHeight = "282px";
  
  cardLikeButton.addEventListener('click', () => {
    //changeHeartColor()
  })
  
  cardRemoveButton.addEventListener('click', () => {
      //RemoveCard
  })
  
  cardImage.addEventListener('click', () => {
      //openModul
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



