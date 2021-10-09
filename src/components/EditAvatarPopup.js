import React from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditAvatarPopup (props) {
    const currentUser = React.useContext(CurrentUserContext);
    const avatarRef = React.useRef();
    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef.current.value
        });
      } 
    return (
        <div className = {`popup popup_type_avatar ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__container">
        <button className="popup__close popup__close_avatar" type="button" onClick={props.onClose}></button>
                <form className="form" name= "avatar" onSubmit={handleSubmit}>
                    <h2 className="form__title">Обновить аватар</h2>
                    <input type="url" className="form__input" ref={avatarRef} id="avatar" name="avatar" required autoComplete="off" placeholder="Ссылка на картинку"/>
                    <span className="form__input-error" id="avatar-error"></span>
                <button className="form__save-button" type="submit">Сохранить</button>   
                </form>
            </div>
   </div>
    
    )
}
export default EditAvatarPopup;