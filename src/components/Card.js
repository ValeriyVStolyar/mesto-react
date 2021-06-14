//import React, {useState} from 'react';
import React from 'react';

function Card({card}) {
//function Cards({ card, setCard }) {
//  const[card, setCard] = React.useState([]);

//   const handleCardClick = () => {
//       setCard(card);
//   }
console.log(card)

  return (
    <article className="place">
        <button type="button" aria-label="Удалить" className="button button_type_remove"></button>
        {/* <img src="<%=require('./images/place-niagara-falls.jpg')%>" alt="Картинка" className="place__image" /> */}
        <img src={card.link} alt="Картинка" className="place__image" />
        <div className="place__list-sights">
          {/* <h2 className="place__title">{isCardsName}</h2> */}
          <h2 className="place__title">{card.name}</h2>
          <div className="place__like-conteiner">
            <button type="button" aria-label="Лайкнуть" className="button button_type_like"></button>
            <p className="place__text">{card.likes.length}</p>
          </div>
        </div>
      </article>
  );
}

export default Card;