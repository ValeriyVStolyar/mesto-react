//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
//import Card from './Card';

function App() {
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const[selectedCard, setselectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = () => {
    setselectedCard(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setselectedCard(false)
  }

  // const handlRequest = () => {
  //   Api
  //     .seach({query: ''})
  //     .then(response => {
  //       console.log('response:', response)
  //     })
  // }

  return (
    <div className="page">
      <Header />
      <Main 
      onEditAvatar = { handleEditAvatarClick }
      onEditProfile = { handleEditProfileClick }
      onAddPlace = { handleAddPlaceClick }
      onCardClick = { handleCardClick }
  //    userAvatar = "../images/avatar-face.jpg"
      />
      <Footer />
      <PopupWithForm
        name = "profile"
        title = "редактировать профиль"        
        isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups }
        save = "Сохранить">
        {/* <input id="popup__name" type="text" name="name" placeholder="Имя" className="popup__input popup__input_type_name"
            minlength="2" maxlength="40" required />
        <span className="popup__input-error popup__name-error"></span>
        <input id="popup__job" type="text" name="job" placeholder="О себе" className="popup__input popup__input_type_job"
            minlength="2" maxlength="200" required />
        <span className="popup__input-error popup__job-error"></span> */}
      </PopupWithForm>
      <PopupWithForm
        name = "places"
        title = "новое место"
        isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups }
        save = "Сохранить"
      />
      <PopupWithForm
        name = "avatar"
        title = "обновить аватар"
        isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups }
        save = "Сохранить"
      />
      <PopupWithForm
        name = "submition"
        title = "вы уверены?"
        save = "Сохранить"
      />
      <ImagePopup
        card = { selectedCard }
        onClose = { closeAllPopups }
      /> 
    </div>
  );
}

export default App;

