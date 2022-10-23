import SocialLinks from '../social-links/SocialLinks';
// import Timer from '../timer/Timer';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1 className="wrapper-title">
        Привет, меня зовут <span className="accented-color">Артур Осипов</span>,<br/>я <span className="accented-color">Frontend-разработчик</span>
      </h1>
      <ul className="stack-list">
        <li className="stack-list__item"><h2>JavaScript</h2></li>
        <li className="stack-list__item"><h2>TypeScript</h2></li>
        <li className="stack-list__item"><h2>React</h2></li>
        <li className="stack-list__item"><h2>Redux</h2></li>
      </ul>
      <SocialLinks />      
      {/* <Timer /> */}
    </div>
  );
}

export default App;
