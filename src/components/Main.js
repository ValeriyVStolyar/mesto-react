import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getInfoUser()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен.'));
  }, [])

  useEffect(() => {
    api.getCards()
      .then((result) => {
        setCards(result);
      })
      .catch(err => console.log('Ошибка при получании карточек'));
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          <img src={userAvatar} alt="Аватар" className="profile__image" />
          <button type="button" aria-label="Открыть попап редактирования аватара" className="button button_type_edit-avatar" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" aria-label="Открыть попап" className="button button_type_edit" onClick={onEditProfile}>
          </button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" aria-label="Добавить карточку" className="button button_type_add-card" onClick={onAddPlace}>
        </button>
      </section>
      <section aria-label="Фотографии мест" className="places">
        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={onCardClick}
            key={card._id}
          />
        )
        )}
      </section>
    </main>
  );
}

export default Main;
