import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);
//  console.log(card)
  // Определяем, являемся ли мы владельцем текущей карточки
const isOwn = card.owner._id === currentUser._id;
//console.log(isOwn)

// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
//  `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  `button button_type_remove ${isOwn ? 'button_type_remove' : 'button_disabled'}`
);
//console.log(cardDeleteButtonClassName)

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = card.likes.some(i => i._id === currentUser._id);
//console.log(card)
//console.log(card)

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = (
    `button button_type_like ${isLiked ? 'button_clicked' : ''}`
  );
//console.log(cardLikeButtonClassName)
  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="place">
      <button type="button" aria-label="Удалить"
      // className="button button_type_remove" onClick={handleDeleteClick}></button>
      className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <img src={card.link} alt={`Картинка места с названием
      ${card.name}`} className="place__image" onClick={handleClick} />
      <div className="place__list-sights">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-conteiner">
          <button type="button" aria-label="Лайкнуть"
          // className="button button_type_like" onClick={handleLikeClick}></button>
          className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="place__text">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
