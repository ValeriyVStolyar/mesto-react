import React, {useState, useContext} from 'react';
import PopupWithForm from './PopupWithForm';
//import CurrentUserContext from '../contexts/CurrentUserContext';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const[name, setPlace] = React.useState('');
  const[link, setLink] = React.useState('');
//  const currentUser = useContext(CurrentUserContext);

  function handleChangePlace(e) {
    setPlace(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setPlace();
    setLink();
  }, []);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
    console.log(name)
    console.log(link)
  }

  return (
    <PopupWithForm
      name="places"
      title="новое место"
      isOpen={isOpen}
      onClose={onClose}
      save="Сохранить"
      onSubmit={handleSubmit}
    >
      <input id="popup__place" type="text" name="place" placeholder="Название" value={name}
        className="popup__input popup__input_type_place" minLength="2" maxLength="30" required
        onChange={handleChangePlace}/>
      <span className="popup__input-error popup__place-error"></span>
      <input id="popup__link" type="url" name="link" placeholder="Ссылка на картинку" value={link}
        className="popup__input popup__input_type_link" required
        onChange={handleChangeLink} />
      <span className="popup__input-error popup__link-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
