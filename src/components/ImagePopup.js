function ImagePopup (props) {
    return (
        <div className = {`popup popup_type_image ${props.card.isOpen && 'popup_opened'}`}>
        <figure className="popup__image-container">
            <button className="popup__close popup__close_image"
                type="button" onClick={props.onClose}></button>
            <img src={props.card.link} alt={props.card.name}
                className="popup__image"/>
            <figcaption className="popup__image-name">{props.card.name}</figcaption>
        </figure>
    </div>
    )
    
}
export default ImagePopup;