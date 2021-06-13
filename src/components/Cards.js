//import React, {useState} from 'react';
import React, {useState} from 'react';

//function Cards() {
function Cards({ card, setCard }) {
//  const[card, setCard] = React.useState([]);

  const handleCardClick = () => {
      setCard(card);
  }

  return (
    <article className="place">
      <button type="button" aria-label="Удалить" className="button button_type_remove" onClick={handleCardClick}></button>
      {/* <img src="<%=require('./images/place-niagara-falls.jpg')%>" alt="Картинка" className="place__image" /> */}
      <img src={card.link} alt="Картинка" className="place__image" />
      <div className="place__list-sights">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-conteiner">
          <button type="button" aria-label="Лайкнуть" className="button button_type_like"></button>
          <p className="place__text">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Cards;