
function PopupWithForm (props) {
    
        return (
            <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
                <div className="popup__container">
                    <button className="popup__close popup__close_edit" type="button" onClick={props.onClose}></button>
                    <form className="form" name={props.name}>
                        <h2 className="form__title">{props.text}</h2>
                        {props.children}
                        <button className="form__save-button" type="submit">{props.btnText}</button>
                    </form>
                </div>
            </div>
        );
    }

export default PopupWithForm;


