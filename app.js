// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Расширяем на весь экран (полезно для планшетов)
tg.expand();

// Основная кнопка
const mainBtn = document.getElementById('mainBtn');

mainBtn.addEventListener('click', () => {
    // Показываем всплывающее окно
    tg.showPopup({
        title: 'Уведомление',
        message: 'Вы нажали на кнопку!',
        buttons: [
            {id: 'close', type: 'close'}
        ]
    }, (buttonId) => {
        console.log('Popup closed with button:', buttonId);
    });
});

// Можно использовать данные от Telegram
const initData = tg.initData || {};
const user = tg.initDataUnsafe.user;

if (user) {
    console.log('User:', user);
    // Можно персонализировать интерфейс
    const header = document.querySelector('.app-header h1');
    if (header) {
        header.textContent = `Привет, ${user.first_name || 'друг'}!`;
    }
}

// Обработчик изменения размера
tg.onEvent('viewportChanged', () => {
    console.log('Viewport changed');
    // Можно добавить логику адаптации под новый размер
});
