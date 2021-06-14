//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';

function App() {
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
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
  //    userAvatar = "../images/avatar-face.jpg"
      />
      <Footer />
      <PopupWithForm
        name = "profile"
        title = "редактировать профиль"
        isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups }
      />
      <PopupWithForm
        name = "places"
        title = "новое место"
        isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups }
      />
      <PopupWithForm
        name = "avatar"
        title = "обновить аватар"
        isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups }
      />
      <PopupWithForm
        name = "submition"
        title = "вы уверены?"
      />
      <ImagePopup />
        {/* image = { './images/place-andora.jpg' } */}
    </div>
  );
}

export default App;

