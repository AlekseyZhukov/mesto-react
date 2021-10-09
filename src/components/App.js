
import '../index.css';
import Header from './Header';
import React from 'react';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';


function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(({ isOpen: false }));
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getInitialCards('cards')
        .then((cards) => {
            setCards(cards)
        })
        .catch((err) => console.log(err))
}, [])

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.changeLikeCardStatus(card._id, isLiked)
  .then(
      (newCard) => {
        const newCards = cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard)
        setCards(newCards);
      },
      (err) => {
        console.log(err);
      }
    )
}
function handleCardDelete (card) {
  api.deleteCard(`cards/${card._id}`)
  .then(() => {
      const newCards = cards.filter((elem) => elem._id !== card._id);
      console.log(newCards);
      setCards(newCards);
})
}

  React.useEffect(() => {
    api.getAvatarUserInfo('users/me')
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => console.log(err))
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopup(true);
  }

  function handleCardClick(card) {
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
    setSelectedCard({ isOpen: false })
  }

  function handleUpdateUser(data) {
    api.changeUserName('users/me', data)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups()
      })
      .catch((err) => console.log(err))

  }
  function handleUpdateAvatar (data) {
    console.log(data);

    api.changeUserAvatar('users/me/avatar', data)
    .then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch((err) => console.log(err))
    
  }
  function handleAddPlaceSubmit (data) {
    api.newCardAdd('cards', data)
    .then ((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups()
    })
    .catch((err) => console.log(err))  
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick} 
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete = {handleCardDelete}/>
        
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar ={handleUpdateAvatar}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} btnText='Создать' onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
        <PopupWithForm name='delete' text='Вы уверены' btnText='Да' />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
