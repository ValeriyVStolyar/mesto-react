import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
//import Card from './Card';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState('');

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  useEffect(() => {
    api.getUserInfo()
    .then((result) => {
      console.log(result)
      setCurrentUser(result);
      console.log(currentUser)
    })
    .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен.'));
  }, [])

  useEffect(() => {
    api.getCards()
      .then((result) => {
        console.log(result)
        setCards(result);
      })
      .catch(err => console.log('Ошибка при получании карточек'));
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          save="Сохранить">
          <input id="popup__name" type="text" name="name" placeholder="Имя" className="popup__input popup__input_type_name"
            minLength="2" maxLength="40" required />
          <span className="popup__input-error popup__name-error"></span>
          <input id="popup__job" type="text" name="job" placeholder="О себе" className="popup__input popup__input_type_job"
            minLength="2" maxLength="200" required />
          <span className="popup__input-error popup__job-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="places"
          title="новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          save="Сохранить"
        >
          <input id="popup__place" type="text" name="place" placeholder="Название"
            className="popup__input popup__input_type_place" minLength="2" maxLength="30" required />
          <span className="popup__input-error popup__place-error"></span>
          <input id="popup__link" type="url" name="link" placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link" required />
          <span className="popup__input-error popup__link-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          save="Сохранить"
        >
          <input id="popup__avatar" type="url" name="avatar" placeholder="https://somewebsite.com/someimage.jpg"
            className="popup__input popup__input_type_avatar" required />
          <span className="popup__input-error popup__avatar-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="submition"
          title="вы уверены?"
          save="да"
        >
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

