import React from 'react';

function ImagePopup({image}) {

  return (
    <article className="popup popup_place_picture">
        <form action="#" method="POST" name="Input-list" className="popup__container popup__container_size_large">
          <button type="button" aria-label="Закрыть попап" className="button button_type_close"></button>
          {/* <img src="<%=require('./images/place-andora.jpg')%>" alt="Ваша картинка" className="popup__image" /> */}
          <img src={image} alt="Ваша картинка" className="popup__image" />
          <h2 className="popup__title popup__title_size_small">Картинка</h2>
        </form>
      </article>
  );
}

export default ImagePopup;