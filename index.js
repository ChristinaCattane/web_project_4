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
    modal.classList.toggle(".modal_visible");
    inputName.value = profileName.textContent
    inputJob.value = profileJob.textContent
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    profileName.textContent = inputName.value
    profileJob.textContent = inputJob.value
    toggleModal()
})

editButton.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);

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


/*const initialCards = [
  {
      name: "Oregon Night Sky",
      link: "./images/oregon-sky.jpg"
  },
  {
      name: "Multnomah Falls, Oregon",
      link: "./images/multnomah-falls.jpg"
  },
  {
      name: "Mt. Hood, Oregon",
      link: "./images/mt-hood.jpg"
  },
  {
      name: "Haystack Rock, Oregon",
      link: "./images/haystack-rock.jpg"
  },
  {
      name: "Ecola State Park, Oregon",
      link: "./images/ecola-park.jpg"
  },
  {
      name: "Crater Lake, Oregon",
      link: "./images/crater-lake.jpg"
  }
];

//open full image/////////////////////////////////
const popupFullImage = document.querySelector(".popup_type_image");
const buttonCloseImage = popupFullImage.querySelector(".button__close");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

function fullImage(name, link) {
  popupFullImage.classList.toggle("popup_active");
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
}

//add new card////////////////////////////////////
const galleryTemplate = document.querySelector(".gallery__template").content.querySelector(".gallery__item");

const createCard= (name, link) => {
  const galleryElement = galleryTemplate.cloneNode(true);
  const galleryImage = galleryElement.querySelector(".gallery__image");
  const buttonRemove = galleryElement.querySelector(".button__remove");
  const galleryTitle = galleryElement.querySelector(".gallery__title");
  const buttonLike = galleryElement.querySelector(".button__like");

  galleryTitle.textContent = name;
  galleryImage.style.background = `url(${link})`;
  galleryImage.style.backgroundSize = "cover";
  galleryImage.style.minHeight = "282px";

  buttonLike.addEventListener("click", (evt) => {
    function changeHeartColor() {
      buttonLike.classList.toggle("button__like_activated");
    }
    changeHeartColor();
  });
  buttonRemove.addEventListener("click", (evt) => {
    evt.target.closest(".gallery__item").remove();
  });
  galleryImage.addEventListener("click", (evt) => {
    fullImage(name, link);
    galleryImage.addEventListener("click", fullImage);
    buttonCloseImage.addEventListener("click", fullImage);

  });

  return galleryElement;
};
const galleryItems = document.querySelector(".gallery__items");

const renderCard = (name, link) => {
  galleryItems.prepend(createCard(name, link));
};

initialCards.forEach((data) => {
  renderCard(data.name, data.link);
});
//Add button popup////////////////////////////////////////////////////

const buttonAdd = document.querySelector(".button__add");
const popupAdd = document.querySelector(".popup_type_add-button");
const buttonCloseAdd = popupAdd.querySelector(".button__close");
const formAdd = document.querySelector(".popup__form_type_add-button");
const buttonCreate = document.querySelector(".button__submit_create");
const inputTitle = document.querySelector(".popup__input_title");
const inputImageLink = document.querySelector(".popup__input_image-link");

function popUnpopAdd () {
  popupAdd.classList.toggle("popup_active");
  inputTitle.placeholder = "Image Title";
  inputImageLink.placeholder = "Image Link";
}
buttonAdd.addEventListener("click", popUnpopAdd);
buttonCloseAdd.addEventListener("click", popUnpopAdd);

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  renderCard(inputTitle.value, inputImageLink.value);
  popUnpopAdd ();
});
*/





