/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, нгут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


let answers = [
    'Сегодня вечером тебя ждет сюрприз.', 'Тебе повезет в лотерее.', 'Этой зимой улетишь на море с вероятностью...', 'Повышение зарплаты будет в следующем месяце'
];

function chance() {
    return Math.floor(Math.random() * 100);
}


const sendButton = document.querySelector('.forecast-btn');

sendButton.addEventListener('click', function() {

    const answer = answers[Math.floor(Math.random() * answers.length)];
    const firstCardTitle = document.querySelector('h1');
    firstCardTitle.textContent = answer;


    const firstCardChance = document.querySelector('p');
    firstCardChance.textContent = 'Вероятность:' + chance() + '%';



    const container = document.querySelector('.forecasts');
    const cardTemplate = document.querySelector('#forecast-item');
    const myCard = cardTemplate.content.cloneNode(true);

    myCard.querySelector('h3').textContent = answer;
    myCard.querySelector('p').textContent = firstCardChance.textContent;

    container.prepend(myCard);

});