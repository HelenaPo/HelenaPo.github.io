const age1 = prompt ("Введите Ваш возраст:");

const welcom = (age1 < 18) ? 'Извините, доступ открыт пользователям 18+':
( (age1 >= 18) && (age1 <= 30) ) ? 'Хай, дружище!!':
'Здравствуйте! Рады Вас видеть!';
alert(welcom);