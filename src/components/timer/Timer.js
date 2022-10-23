import './Timer.css';

function Timer() {
  return (
    <div className="attention-block">
      <h3>Полная версия сайта будет разработана через:</h3>
      <ul className="timer">
        <li className="timer__item timer_days">00</li>
        <li className="timer__item timer_hours">00</li>
        <li className="timer__item timer_minutes">00</li>
        <li className="timer__item timer_seconds">00</li>
      </ul>
    </div>
  );
}

export default Timer;
