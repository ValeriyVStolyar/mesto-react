import React, {useState, useEffect} from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const[userName, setUserName] = React.useState([]);
  const[userDescription, setUserDescription] = React.useState([]);
  const[userAvatar, setUserAvatar] = React.useState([]);

  const[cards, setCards] = React.useState([]);
  const[isCardsName, setIsCardsName] = React.useState([]);
  const[isCardsLikes, setIsCardsLikes] = React.useState([]);
  const[isCardsImage, setIsCardsImage] = React.useState([]);
//function Main(props) {
//  const[onEditAvatar, onEditProfile, onAddPlace] = React.useState(false);
  //console.log(onEditAvatar)
  // console.log(isCardsImage)
  // console.log(cards)
  // console.log(userDescription)
  // console.log(userAvatar)
  // const [isActive, setIsActive] = React.useState(false);
  // function handleEditProfileClick() {
  //       setIsActive(true);
  //     }
  useEffect(() => {
    api.getInfoUser()
      .then((result) => {
  //      console.log(result)
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен.'));
  })

  useEffect(() => {
    api.getCards()
      .then((result) => {
    //    console.log(result)
        setCards(result);
    //   result.find((card) => {
          // setIsCardsName(card.name);
          // setIsCardsLikes(card.likes.length);
          // setIsCardsImage(card.link);
          
           console.log(result)
          // console.log(card.name)
          // console.log(card._id)
          //console.log(card.link)
          // console.log(card.likes.length)
    //    })
        // setIsCardsName(result.name);
        // setIsCardsLikes(result.likes);
        // setIsCardsImage(result.link);
      })
      .catch(err => console.log('Ошибка при получании карточек'));
  })


    // cards.map((card) => {
    //   console.log(card.name);
    // })


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          {/* <img src="<%=require('./images/avatar-face.jpg')%>" alt="Аватар" className="profile__image" /> */}
          {/* <img src="./images/avatar-face.jpg" alt="Аватар" className="profile__image" /> */}
          {/* <img src={`${userAvatar}`} alt="Аватар" className="profile__image" /> */}
          <img src={userAvatar} alt="Аватар" className="profile__image" />
          <button type="button" aria-label="Открыть попап редактирования аватара" className="button button_type_edit-avatar" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" aria-label="Открыть попап" className="button button_type_edit" onClick ={onEditProfile}>
          </button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" aria-label="Добавить карточку" className="button button_type_add-card" onClick={onAddPlace}>
        </button>
      </section>
      <section aria-label="Фотографии мест" className="places">
      </section>
      {/* <article className="popup popup_place_profile">
        <form action="#" method="POST" name="Input-list-profile" className="popup__container popup__validate" novalidate>
          <button type="button" aria-label="Закрыть попап" className="button button_type_close"></button>
          <h2 className="popup__title">редактировать профиль</h2>
          <input id="popup__name" type="text" name="name" placeholder="Имя" className="popup__input popup__input_type_name"
            minlength="2" maxlength="40" required />
          <span className="popup__input-error popup__name-error"></span>
          <input id="popup__job" type="text" name="job" placeholder="О себе" className="popup__input popup__input_type_job"
            minlength="2" maxlength="200" required />
          <span className="popup__input-error popup__job-error"></span>
          <button type="submit" aria-label="Сохранить" className="button button_type_submit">Сохранить</button>
        </form>
      </article> */}
      {/* <article className="popup popup_place_places">
        <form action="#" method="POST" name="Input-list-places" className="popup__container popup__validate" novalidate>
          <button type="button" aria-label="Закрыть попап" className="button button_type_close"></button>
          <h2 className="popup__title">новое место</h2>
          <input id="popup__place" type="text" name="place" placeholder="Название"
            className="popup__input popup__input_type_place" minlength="2" maxlength="30" required />
          <span className="popup__input-error popup__place-error"></span>
          <input id="popup__link" type="url" name="link" placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link" required />
          <span className="popup__input-error popup__link-error"></span>
          <button type="submit" aria-label="Сохранить" className="button button_type_submit">Сохранить</button>
        </form>
      </article> */}
      {/* <article className="popup popup_place_picture">
        <form action="#" method="POST" name="Input-list" className="popup__container popup__container_size_large">
          <button type="button" aria-label="Закрыть попап" className="button button_type_close"></button>
          <img src="<%=require('./images/place-andora.jpg')%>" alt="Ваша картинка" className="popup__image" />
          <h2 className="popup__title popup__title_size_small">Картинка</h2>
        </form>
      </article> */}
      {/* <article className="popup popup_place_submition">
        <form action="#" method="POST" name="submition" className="popup__container">
          <button type="button" aria-label="Закрыть попап" className="button button_type_close"></button>
          <h2 className="popup__title">вы уверены?</h2>
          <button type="submit" aria-label="Сохранить" className="button button_type_submit button_type_submition">Да</button>
        </form>
      </article> */}
      {/* <article className="popup popup_place_avatar">
        <form action="#" method="POST" name="avatarka" className="popup__container popup__validate" novalidate>
          <button type="button" aria-label="Закрыть попап" className="button button_type_close"></button>
          <h2 className="popup__title">обновить аватар</h2>
          <input id="popup__avatar" type="url" name="avatar" placeholder="https://somewebsite.com/someimage.jpg"
            className="popup__input popup__input_type_avatar" required />
          <span className="popup__input-error popup__avatar-error"></span>
          <button type="submit" aria-label="Сохранить" className="button button_type_submit">Сохранить</button>
        </form>
      </article> */}
      {cards.map((card) =>
      // <article className="place">
      //   <button type="button" aria-label="Удалить" className="button button_type_remove"></button>
      //   {/* <img src="<%=require('./images/place-niagara-falls.jpg')%>" alt="Картинка" className="place__image" /> */}
      //   <img src={card.link} alt="Картинка" className="place__image" />
      //   <div className="place__list-sights">
      //     {/* <h2 className="place__title">{isCardsName}</h2> */}
      //     <h2 className="place__title">{card.name}</h2>
      //     <div className="place__like-conteiner">
      //       <button type="button" aria-label="Лайкнуть" className="button button_type_like"></button>
      //       <p className="place__text">{card.likes.length}</p>
      //     </div>
      //   </div>
      // </article>
      <Card
        card = {card}
      />
      )}
    {/* {Cards.map((card) => {
      <Cards
        card = {card}
        key = {card._id}
        setCard = {setCards} 
      />    
    })} */}

      {/* <Card
        card = {card}
        key = {card._id}
        setCard = {setCards} 
      />  */}

    </main>
  );
}

export default Main;