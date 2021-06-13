import React from 'react';
import './PopupWithForm.css';

function PoupWithForm(props) {
//  const[name, title, isOpen, onClose] = React.useState([]);

  return (
    <article className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
        <form action="#" method="POST" name="Input-list-${props.name}" className="popup__container popup__validate" novalidate>
        {/* <form action="#" method="POST" name="${props.name}" className="popup__container popup__validate" novalidate> */}
          <button type="button" aria-label="Закрыть попап" className="button button_type_close" onClick={props.onClose}></button>
          <h2 className="popup__title">{props.title}</h2>
          <input id="popup__name" type="text" name="name" placeholder="Имя" className="popup__input popup__input_type_name"
            minlength="2" maxlength="40" required />
          <span className="popup__input-error popup__name-error"></span>
          <input id="popup__job" type="text" name="job" placeholder="О себе" className="popup__input popup__input_type_job"
            minlength="2" maxlength="200" required />
          <span className="popup__input-error popup__job-error"></span>
          <button type="submit" aria-label="Сохранить" className="button button_type_submit">Сохранить</button>
        </form>
      </article>
  );
}

export default PoupWithForm;