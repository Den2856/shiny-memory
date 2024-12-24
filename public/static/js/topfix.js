let head = document.querySelector('.top')
let logo = document.querySelector('.logoof')
let logoHover = document.querySelector('.logo')
let header = document.querySelector('.header')

let secondMenu = document.querySelector('.sub-menu')

window.addEventListener('scroll', function(){
    head.classList.add('fix')
    logoHover.style.cssText = 'width: 78px; height: 30px;'
    logo.style.cssText = 'width: 78px; height: 30px;'
    header.style.cssText = 'height: 50px;'
    
    if(this.scrollY === 0){
        head.classList.remove('fix')
        logoHover.style.cssText = 'width: 176px; height: 68px;'
        logo.style.cssText = 'width: 176px; height: 68px;'
        header.style.cssText = 'height: 118px;'
    }   
})

function season(){
    secondMenu.style.visibility = 'visible'
    secondMenu.style.opacity = '1'
}

function seasonHide(){
    secondMenu.style.visibility = 'hidden'
    secondMenu.style.opacity = '0'
}

document.querySelector(".btn.series-list").addEventListener("click", function () {
    const target = document.getElementById("season-1");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".btn.series-list").addEventListener("click", function () {
    const target1 = document.getElementById("season-2");
    target1.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener('DOMContentLoaded', () => {
    // Получаем кнопки сезонов и блоки с сериями
    const tabs = document.querySelectorAll('.season-tab');
    const contents = document.querySelectorAll('.episodes-grid');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Убираем класс active у всех кнопок и блоков
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Добавляем active к текущей кнопке и соответствующему блоку серий
            tab.classList.add('active');
            document.querySelector(`#${tab.dataset.target}`).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const votesCount = document.querySelector('.votes-count');
    const scoreCircle = document.querySelector('.score-circle');

    let currentScore = 0; // Текущий рейтинг
    let totalVotes = 0; // Количество голосов

    // Функция для обновления оценки
    function updateScore(newRating) {
        totalVotes++;
        currentScore = ((currentScore * (totalVotes - 1)) + newRating) / totalVotes;
        scoreCircle.textContent = currentScore.toFixed(2);
        votesCount.textContent = `${totalVotes} голосов`;
    }

    // Обработчик клика по звёздам
    stars.forEach((star) => {
        star.addEventListener('click', () => {
            const value = parseInt(star.dataset.value);
            updateScore(value);

            // Визуальное обновление звёзд
            stars.forEach((s) => {
                s.classList.toggle('inactive', parseInt(s.dataset.value) > value);
            });
        });
    });
});
