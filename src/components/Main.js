import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__photo-container">
                        <div className="profile__photo" style={{ backgroundImage: `url(${currentUser.avatar})` }} ></div>
                        <div className="profile__photo-overlay"
                            onClick={props.onEditAvatar}></div>
                    </div>
                    <div className="profile__all">
                        <div className="profile__box">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__corrector"
                                type="button"
                                onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__occupation">{currentUser.about}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button"
                    onClick={props.onAddPlace}></button>
            </section>
            <section>
                <ul className="elements">
                    {props.cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardDelete={props. onCardDelete} onCardLike={props.onCardLike} />

                    ))}
                </ul>
            </section>


        </main>
    )
}

export default Main;