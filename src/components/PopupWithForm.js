import React from 'react';
import './PopupWithForm.css';

function PoupWithForm({name, title, isOpen, onClose, children, save}) {

  return (
    <article className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
        <form action="#" method="POST" name="Input-list-${props.name}" className="popup__container popup__validate" noValidate>
          <button type="button" aria-label="Закрыть попап" className="button button_type_close" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" aria-label="Сохранить" className="button button_type_submit">{save}</button>
        </form>
      </article>
  );
}

export default PoupWithForm;