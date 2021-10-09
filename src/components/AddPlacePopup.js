import React from "react";
function AddPlacePopup(props) {
    const [name, setNamePlace] = React.useState('');
    const [link, setLinkPlace] = React.useState('');
   
    function handleAddNamePlace(e) {
        setNamePlace(e.target.value);
      }

      function handleAddLinkPlace(e) {
        setLinkPlace(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
          name, link
        });
      } 

    return (
        <div className={`popup popup_type_new-card} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close popup__close_edit" type="button" onClick={props.onClose}></button>
                <form className="form" name="new-card" onSubmit={handleSubmit}>
                    <h2 className="form__title">Новое место</h2>
                    <input type="text" className="form__input" id="place" name="name" minLength="2" maxLength="30" required autoComplete="off" placeholder="Новое место" onChange={handleAddNamePlace}/>
                    <span className="form__input-error" id="place-error"></span>
                    <input type="url" className="form__input" id="link" name="link" required autoComplete="off" placeholder="Ссылка на картинку" onChange={handleAddLinkPlace}/>
                    <span className="form__input-error" id="link-error"></span>
                    <button className="form__save-button" type="submit">Создать</button>
                </form>
            </div>
        </div>
    );

}
export default AddPlacePopup;