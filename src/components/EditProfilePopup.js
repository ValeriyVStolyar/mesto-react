import React, { useState, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  //console.log(isOpen)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: description,
      //  description,
    });
    console.log(name)
    console.log(description)
  }

  return (
    <PopupWithForm
      name="profile"
      title="редактировать профиль"
      // isOpen={isEditProfilePopupOpen}
      isOpen={isOpen}
      // onClose={closeAllPopups}
      onClose={onClose}
      save="Сохранить"
      onSubmit={handleSubmit}>
      <input id="popup__name" type="text" name="name" placeholder="Имя"
        className="popup__input popup__input_type_name" value={name}
        minLength="2" maxLength="40" required onChange={handleChangeName} />
      <span className="popup__input-error popup__name-error"></span>
      <input id="popup__job" type="text" name="job" placeholder="О себе"
        className="popup__input popup__input_type_job" value={description}
        minLength="2" maxLength="200" required onChange={handleChangeDescription} />
      <span className="popup__input-error popup__job-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
