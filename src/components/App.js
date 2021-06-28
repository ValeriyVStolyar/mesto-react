import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);

  const handleEditAvatarClick = () => {
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
        setCurrentUser(result);
        //      console.log(currentUser)
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

  const handleUpdateUser = (user) => {
    console.log(user)
    api.setUserInfo(user)
      //  console.log(user)
      //  api.reviewUserInfo(user.name, user.about)
      .then((result) => {
        console.log(result)
        setCurrentUser(result);
        //      console.log(currentUser)
        closeAllPopups();
      })
      .catch(err => console.log('Ошибка. Запрос на обновление профиля не выполнен.'));
  }

  const handleUpdateAvatar = (user) => {
    console.log(user)
    api.setUserAvatar(user)
      //  console.log(user)
      //  api.reviewUserInfo(user.name, user.about)
      .then((result) => {
        console.log(result)
        setCurrentUser(result);
        //      console.log(currentUser)
        closeAllPopups();
      })
      .catch(err => console.log('Ошибка. Запрос на обновление профиля не выполнен.'));
  }


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log(isLiked)

    // Отправляем запрос в API и получаем обновлённые данные карточки
    //   api.deleteLikeCard(card._id, isLiked)
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

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        console.log(newCard)
        setCards((state) => {
          console.log(state)
          return state.map((c) => {
            //          console.log(c)
            return c._id === card._id ? newCard : c
          })
        });
      });
    api.deleteLikeCard(card._id, isLiked)
      .then((newCard) => {
        console.log(newCard)
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  // function handleCardDislike(card) {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);

  //   api.deleteLikeCard(card._id, isLiked)
  //   .then((newCard) => {
  //     console.log(newCard)
  //       setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  //   });
  // }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        console.log()
        setCards(cards.filter(item =>
          item._id !== card._id)
        )
      });
  }

  const handleAddPlaceSubmit = (newCard) => {
    console.log(newCard)
    api.addCard(newCard)
      //  console.log(user)
      //  api.reviewUserInfo(user.name, user.about)
      .then((result) => {
        console.log(result)
        //  setCards(result);
        setCards([result, ...cards]);
        //      console.log(currentUser)
        closeAllPopups();
      })
      .catch(err => console.log('Ошибка. Запрос на добавление карточки не выполнен.'));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <PopupWithForm
          name="submition"
          title="вы уверены?"
          save="да"
        >
        </PopupWithForm>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

