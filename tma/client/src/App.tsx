import { useEffect } from 'react';
import './App.css';  // Импортируем стили

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    // Проверяем, доступен ли tg перед вызовом методов
    if (tg) {
      tg.ready();  // Инициализация Telegram Web App
    } else {
      console.error('Telegram WebApp не загружен');
    }
  }, []);

  const onClose = () => {
    if (tg) {
      tg.close();  // Закрываем WebApp
    } else {
      console.error('Telegram WebApp не доступен');
    }
  };

  return (
    <>
      <div className="App">
        work
        <button onClick={onClose}>Закрыть</button>
      </div>
    </>
  );
}

export default App;
