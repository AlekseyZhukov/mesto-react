import React from 'react';
import {api} from '../utils/Api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName]=React.useState('');
    const [userDescription, setUserDescription]=React.useState('');
     const [userAvatar, setUserAvatar]=React.useState('')
     const [cards, setCards]= React.useState([])
   
 
    function setUserinfo (data) {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar)
    }

    React.useEffect(() =>{
    api.getAvatarUserInfo('users/me')
      .then((data) => {  
        setUserinfo(data)      
      }) 
      .catch((err) => console.log(err)) 
        
    }, []);  

    React.useEffect(() => { 
        api.getInitialCards('cards')
        .then((cards) => {
            setCards(cards)
      })
      .catch((err) => console.log(err))
     }, [])


    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__photo-container">
                        <div className="profile__photo" style={{ backgroundImage: `url(${userAvatar})` }} ></div>
                        <div className="profile__photo-overlay"
                            onClick={props.onEditAvatar}></div>
                    </div>
                    <div className="profile__all">
                        <div className="profile__box">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__corrector"
                                type="button" 
                                onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__occupation">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button"
                onClick = {props.onAddPlace}></button>
            </section>
            <section>
                <ul className="elements">
                {cards.map((card) => ( 
            <Card key={card._id} card={card} onCardClick={props.onCardClick}/> 
            
          ))} 
               
               
                
                
                
                </ul>
            </section>

            
        </main>
    )
}

export default Main;