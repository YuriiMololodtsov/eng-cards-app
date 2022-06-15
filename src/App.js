import './app.css';
import React, { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';

function App() {
  const [item, setItem] = useState(); //слово на англ.
  const [item2, setItem2] = useState(); //перевод

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || [] //парсим хранилище
  );

  //записываем массив в хранилище
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  //создаем новый елемент, добавляем в массив, чистим импуты
  const newItem = () => {
    if (item.trim() !== '') {
      const newItem = {
        id: uuid4(),
        item: item,
        item2: item2,
      };
      setItems((item) => [...items, newItem]);
      setItem('');
      setItem2('');
    } else {
      alert('Введите слово, и перевод...');
      setItem('');
      setItem2('');
    }
  };

  //кнопка удаления карточки
  const deleteNode = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

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
            value={item}
            className="form__word"
            placeholder="Введите слово на англ..."
            onChange={(e) => setItem(e.target.value)}
          ></input>

          <input
            value={item2}
            className="form__translat"
            placeholder="Введите перевод..."
            onChange={(e) => setItem2(e.target.value)}
          ></input>

          <button onClick={newItem} className="form__btn">
            Создать
          </button>
        </div>

        <div className="cards">
          {items.map((item) => {
            <p>{`${item.item}`}</p>;
          })}
          {items.map((item, index) => {
            return (
              <div class="card center">
                <div class="front">{item.item}</div>

                <div class="back">
                  <div class="back-content center">
                    <span>{item.item2}</span>
                  </div>
                  <button
                    className="delete"
                    onClick={() => deleteNode(item.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
