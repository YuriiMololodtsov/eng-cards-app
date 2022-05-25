import '../src/components/card.css';
import './app.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__title">
          <h1>EngCards</h1>
          <h3>
            Создавайте карточки слов, добавляйте перевод, запоминайте больше
            слов!
          </h3>
        </div>
      </header>
      <main>
        <div className="form">
          <input
            className="form__word"
            placeholder="Введите слово на англ..."
          ></input>

          <input
            className="form__translat"
            placeholder="Введите перевод..."
          ></input>

          <button className="form__btn">Создать</button>
        </div>
        {/* <div className="cards">
        <div className="card center">
          <div className="card__front">
            <span>FRONT</span>
          </div>
          <div class="cards__back">
            <span class="card__text center">back</span>
          </div>
        </div>

          <div className="cards__card">
          <div className="cards__title">DOG</div>
        </div>
        <div className="cards__card">
          <div className="cards__title">BIRD</div>
        </div>
        <div className="cards__card">
          <div className="cards__title">COW</div>
        </div>
        <div className="cards__card">
          <div className="cards__title">HORSE</div>
        </div> 
      </div> */}
        <div className="cards">
          <div class="card center">
            <div class="front">CAT1</div>

            <div class="back">
              <div class="back-content center">
                <span>КОТ1</span>
              </div>
            </div>
          </div>
          <div class="card center">
            <div class="front">CAT2</div>

            <div class="back">
              <div class="back-content center">
                <span>КОТ2</span>
              </div>
            </div>
          </div>
          <div class="card center">
            <div class="front">CAT2</div>

            <div class="back">
              <div class="back-content center">
                <span>КОТ2</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
