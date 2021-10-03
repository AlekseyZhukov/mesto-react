
function Card (props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 
    
    return (
        
        <li className="elements__item">
            <button className="elements__delete" type="button"></button>
            <div className="elements__photo" onClick = {handleClick} style={{ backgroundImage: `url(${props.card.link})` }}></div>
            <div className="elements__name-container">
                <h3 className="elements__name">{props.card.name}</h3>
                <div className="elements__like-container">
                    <button className="elements__button" type="button"></button>
                    <p className="elements__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    
    )
}

export default Card;