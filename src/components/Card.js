import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
        `${isOwn ? 'elements__delete' : 'elements__delete_noactive'}`
    );

    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    

    const cardLikeButtonClassName = `${isLiked ? 'elements_button elements__button_active' : 'elements__button'}`;

    function handleClick() {
        props.onCardClick(props.card);
    }
    function handleLikeClick() {
        props.onCardLike(props.card);
    }
    function handleDeleteClick () {
        props.onCardDelete(props.card)
    }

    return (

        <li className="elements__item">
            <button className={cardDeleteButtonClassName} type="button" onClick = {handleDeleteClick}></button>
            <div className="elements__photo" onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})` }}></div>
            <div className="elements__name-container">
                <h3 className="elements__name">{props.card.name}</h3>
                <div className="elements__like-container">
                    <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
                    <p className="elements__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>

    )
}

export default Card;