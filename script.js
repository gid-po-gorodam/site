const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Кнопки «Смотреть все» готовы для расширения.
// Если каналов больше четырёх, добавьте им класс hidden.
document.querySelectorAll('.show-more').forEach(button => {
  button.addEventListener('click', () => {
    const city = button.dataset.target;
    const card = document.querySelector(`[data-city="${city}"]`);
    const hidden = card.querySelectorAll('.channel.hidden');
    const isOpen = button.dataset.open === 'true';

    hidden.forEach(item => item.classList.toggle('hidden', isOpen));
    button.dataset.open = String(!isOpen);

    const names = city === 'moscow' ? ['Москве', 'Москве'] : ['Петербурге', 'Петербурге'];
    button.innerHTML = isOpen
      ? `Смотреть все каналы о ${names[0]} <span>⌄</span>`
      : `Скрыть дополнительные каналы <span>⌃</span>`;
  });
});

// ЗАМЕНА ССЫЛОК НА MAX:
// Сейчас href="#" стоит как заглушка. Для каждого канала вставьте настоящую ссылку.
// Пример: href="https://max.ru/your_channel"
document.querySelectorAll('.channel[href="#"]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    // Пока ссылка не настроена — ничего не открываем.
    // После замены href="#" на ссылку MAX этот обработчик можно удалить.
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
