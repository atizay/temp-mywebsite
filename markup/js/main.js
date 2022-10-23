document.addEventListener('DOMContentLoaded', function () {
  // конечная дата
  const deadline = new Date(2022, 11, 01);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const daysValue = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hoursValue = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutesValue = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const secondsValue = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    days.textContent = daysValue < 10 ? '0' + daysValue : daysValue;
    hours.textContent = hoursValue < 10 ? '0' + hoursValue : hoursValue;
    minutes.textContent = minutesValue < 10 ? '0' + minutesValue : minutesValue;
    seconds.textContent = secondsValue < 10 ? '0' + secondsValue : secondsValue;

    days.dataset.title = declensionNum(daysValue, ['день', 'дня', 'дней']);
    hours.dataset.title = declensionNum(hoursValue, ['час', 'часа', 'часов']);
    minutes.dataset.title = declensionNum(minutesValue, ['минута', 'минуты', 'минут']);
    seconds.dataset.title = declensionNum(secondsValue, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const days = document.querySelector('.timer_days');
  const hours = document.querySelector('.timer_hours');
  const minutes = document.querySelector('.timer_minutes');
  const seconds = document.querySelector('.timer_seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});