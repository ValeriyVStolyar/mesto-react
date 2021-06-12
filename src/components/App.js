//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
      <a href="#" target="_blank" rel="noopener" className="logo"></a>
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          <img src="<%=require('./images/avatar-face.jpg')%>" alt="Аватар" className="profile__image" />
          <button type="button" aria-label="Открыть попап редактирования аватара" className="button button_type_edit-avatar"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button type="button" aria-label="Открыть попап" className="button button_type_edit">
          </button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button type="button" aria-label="Добавить карточку" className="button button_type_add-card">
        </button>
      </section>
      <section aria-label="Фотографии мест" className="places">
      </section>
      <article className="popup popup_place_profile">
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
      </article>
      <article className="popup popup_place_places">
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
      </article>
      <article className="popup popup_place_picture">
        <form action="#" method="POST" name="Input-list" className="popup__container popup__container_size_large">
          <button type="button" aria-label="Закрыть попап" className="button button_type_close"></button>
          <img src="<%=require('./images/place-andora.jpg')%>" alt="Ваша картинка" className="popup__image" />
          <h2 className="popup__title popup__title_size_small">Картинка</h2>
        </form>
      </article>
      <article className="popup popup_place_submition">
        <form action="#" method="POST" name="submition" className="popup__container">
          <button type="button" aria-label="Закрыть попап" className="button button_type_close"></button>
          <h2 className="popup__title">вы уверены?</h2>
          <button type="submit" aria-label="Сохранить" className="button button_type_submit button_type_submition">Да</button>
        </form>
      </article>
      <article className="popup popup_place_avatar">
        <form action="#" method="POST" name="avatarka" className="popup__container popup__validate" novalidate>
          <button type="button" aria-label="Закрыть попап" className="button button_type_close"></button>
          <h2 className="popup__title">обновить аватар</h2>
          <input id="popup__avatar" type="url" name="avatar" placeholder="https://somewebsite.com/someimage.jpg"
            className="popup__input popup__input_type_avatar" required />
          <span className="popup__input-error popup__avatar-error"></span>
          <button type="submit" aria-label="Сохранить" className="button button_type_submit">Сохранить</button>
        </form>
      </article>
    </main>
    <footer className="footer">
      <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
    </footer>
    </div>
  );
}

export default App;

