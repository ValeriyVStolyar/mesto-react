import React, { useState, useEffect, useContext } from 'react';
import { api } from '../utils/api';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick,
  cards, onCardLike, onCardDelete }) {
  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState('');
  //const [cards, setCards] = React.useState([]);

  const currentUser = useContext(CurrentUserContext);
  //console.log(currentUser)

  // useEffect(() => {
  //   api.getUserInfo()
  //     .then((result) => {
  //       setUserName(result.name);
  //       setUserDescription(result.about);
  //       setUserAvatar(result.avatar);
  //     })
  //     .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен.'));
  // }, [])

  // useEffect(() => {
  //   api.getCards()
  //     .then((result) => {
  //       console.log(result)
  //       setCards(result);
  //     })
  //     .catch(err => console.log('Ошибка при получании карточек'));
  // }, [])

  // function handleCardLike(card) {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);
  //   console.log(isLiked)

  //   // Отправляем запрос в API и получаем обновлённые данные карточки
  // //   api.deleteLikeCard(card._id, isLiked)
  // //   .then((newCard) => {
  // //     console.log(newCard)
  // //       setCards((state) => {
  // //         console.log(state)
  // //         return state.map((c) => {
  // // //          console.log(c)
  // //           return c._id === card._id ? newCard : c
  // //         })
  // //       });
  // //   });

  //   api.changeLikeCardStatus(card._id, !isLiked)
  //   .then((newCard) => {
  //     console.log(newCard)
  //       setCards((state) => {
  //         console.log(state)
  //         return state.map((c) => {
  // //          console.log(c)
  //           return c._id === card._id ? newCard : c
  //         })
  //       });
  //   });
  // }

  // // function handleCardDislike(card) {
  // //   // Снова проверяем, есть ли уже лайк на этой карточке
  // //   const isLiked = card.likes.some(i => i._id === currentUser._id);

  // //   api.deleteLikeCard(card._id, isLiked)
  // //   .then((newCard) => {
  // //     console.log(newCard)
  // //       setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  // //   });
  // // }

  // function handleCardDelete(card) {
  //   api.deleteCard(card._id)
  //   .then(() => {
  //     console.log()
  //     setCards(cards.filter(item =>
  //       item._id !== card._id)
  //    )
  //   });
  // }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          <img src={currentUser.avatar} alt="Аватар" className="profile__image" />
          <button type="button" aria-label="Открыть попап редактирования аватара"
          className="button button_type_edit-avatar" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button type="button" aria-label="Открыть попап"
          className="button button_type_edit" onClick={onEditProfile}>
          </button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" aria-label="Добавить карточку"
        className="button button_type_add-card" onClick={onAddPlace}>
        </button>
      </section>
      <section aria-label="Фотографии мест" className="places">
        {cards.map(card => (
          <Card
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            key={card._id}
          />
        )
        )}
      </section>
    </main>
  );
}

export default Main;
