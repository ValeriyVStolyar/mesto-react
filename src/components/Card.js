import React from 'react';

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="place">
      <button type="button" aria-label="Удалить" className="button button_type_remove"></button>
      <img src={card.link} alt={`Картинка места с названием ${card.name}`} className="place__image" onClick={handleClick} />
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

export default Card;
