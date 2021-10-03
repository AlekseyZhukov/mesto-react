export const buttonOnPopupEdit = document.querySelector('.profile__corrector');
export const buttonOnPopupNewCard = document.querySelector('.profile__add-button');
export const nameInput = document.querySelector("input[name='name']");
export const jobInput = document.querySelector("input[name='about']");
export const formProfile = document.querySelector("form[name='profile']");
export const formNewCard = document.querySelector("form[name='place']");
export const templateElement = document.querySelector('#elements');
export const templateSelector = '#elements';
export const cardItem = templateElement.content.querySelector('.elements__item').cloneNode(true);
export const cardsContainer = document.querySelector('.elements');
export const imagePopup = document.querySelector('.popup_type_image');
export const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  inputErrorClass: 'form__input_type_error',
  errorActiveClass: 'form__input-error_active',
  submitButtonSelector: '.form__save-button'
};
export const avatar = document.querySelector('.profile__photo');
export const avatarEdit = document.querySelector('.profile__photo-overlay');
export const formAvatar = document.querySelector("form[name='avatar']");
export const counterLike = cardItem.querySelector('.elements__like-counter');
export const buttonSaveEdit = document.querySelector('.form__save-button_edit');
export const buttonSaveNewCard = document.querySelector('.form__save-button_new-card');
export const buttonSaveAvatar = document.querySelector('.form__save-button_avatar');