const menuActive = document.querySelector('.dropDown'); // Находим меню
const burger = document.querySelector('.burger'); // Находим кнопку бургера
const menuClose = document.querySelector('.dropDown__Close'); // Находим кнопку крестика

function toggleMenu() {
	menuActive.classList.toggle('hidden'); //Ф-ция удаляет или устанавливает класс с названием 'hidden' в div с классом .menu-active
}

burger.addEventListener('click', toggleMenu); // По клику на бургер срабатывает ф-ция
menuClose.addEventListener('click', toggleMenu); // По клику на крестик срабатывает ф-ция
