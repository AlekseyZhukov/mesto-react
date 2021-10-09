import React from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup (props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [description, setDescription] = React.useState(currentUser.about);
   
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    function handleChangeName(e) {
        setName(e.target.value);
      }

      function handleChangeDescription(e) {
        setDescription(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
          name,
          about: description,
        });
      } 

    return (
        <div className = {`popup popup_type_edit ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__container" >
        <button className="popup__close popup__close_edit" type="button" onClick={props.onClose}></button>
                <form className="form" name='edit' onSubmit={handleSubmit}>
                    <h2 className="form__title">Редактировать профиль</h2>
                    <input type="text" value={name || ' '} onChange={handleChangeName} className="form__input" id="name" minLength="2" maxLength="40" name="name" required />
                    <span className="form__input-error" id="name-error"></span>
                    <input type="text" value={description || ' '} onChange={handleChangeDescription} className="form__input" id="job" minLength="2" maxLength="200" name="about" required />
                    <span className="form__input-error" id="job-error"></span>
                <button className="form__save-button" type="submit">Сохранить</button>   
                </form>
            </div>
    </div>
    )
}
export default EditProfilePopup;