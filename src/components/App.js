
import '../index.css';
import Header from './Header';
import React from 'react';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function App() {

 const [isEditProfilePopupOpen, setEditProfilePopup]  = React.useState(false);
const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(({isOpen : false}))
  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
}
function handleEditProfileClick() {
  setEditProfilePopup(true);
}
function handleAddPlaceClick() {
  setAddPlacePopup(true);
}
function handleCardClick (card) {
  setSelectedCard({ 
  isOpen: true, 
  link: card.link, 
  name: card.name
})
}
  
 function closeAllPopups() {
  setEditAvatarPopup(false);
  setEditProfilePopup(false);
  setAddPlacePopup(false);
  setSelectedCard({isOpen : false})
 }
  return (
    <div className="page">
   <Header/>
  
    <Main onEditProfile={handleEditProfileClick} onAddPlace = {handleAddPlaceClick}  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
   

    <PopupWithForm name='edit' text='Редактировать профиль' isOpen={isEditProfilePopupOpen} btnText='Сохранить' onClose={closeAllPopups}>
    <input type="text" className="form__input" id="name" minLength="2" maxLength="40" name="name" required/>
    <span className="form__input-error" id="name-error"></span>
    <input type="text" className="form__input" id="job" minLength="2" maxLength="200" name="about" required/>
    <span className="form__input-error" id="job-error"></span>
    
    </PopupWithForm>

    <PopupWithForm name='avatar' text='Обновить аватар' isOpen = {isEditAvatarPopupOpen} btnText='Сохранить' onClose={closeAllPopups}>
    <input type="url" className="form__input" id="avatar" name="avatar" required autoComplete="off" placeholder="Ссылка на картинку"/>
    <span className="form__input-error" id="avatar-error"></span>
   </PopupWithForm>
    
    
    <PopupWithForm name='new-card' text='Новое место' isOpen = {isAddPlacePopupOpen} btnText='Создать' onClose={closeAllPopups}>
    <input type="text" className="form__input" id="place" name="name" minLength="2" maxLength="30" required autoComplete="off" placeholder="Новое место"/>
    <span className="form__input-error" id="place-error"></span>
    <input type="url" className="form__input" id="link" name="link" required autoComplete="off" placeholder="Ссылка на картинку"/>
    <span className="form__input-error" id="link-error"></span>
  
    </PopupWithForm>

    <PopupWithForm name='delete' text='Вы уверены' btnText='Да'/>
    
       
    <ImagePopup card = {selectedCard} onClose={closeAllPopups}/>
   <Footer/>


</div>
  );
}

export default App;
