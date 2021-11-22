import logo from './img/logo.jpg';
import facebook from './img/facebook.png';
import imgBig from './img/imgBig.jpg';
import './App.css';

function App() {
  const Author = {
    name: "Anakin Skywalker",
    photo: logo,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: facebook,
    date: "• 21 nov.",
    imageBig: imgBig,
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={Author.photo} className="App-logo" alt="logo" />
        <div className="App-block">
          <h4> {Author.name} </h4>
          <img src={Author.image} className="App-facebook" />
          <span>{Author.nickname}</span>
          <span> {Author.date}</span>
          <p>{Author.content}</p>
          <img src={Author.imageBig} className="ImageWomen" />
        </div>
      </header>

    </div>
  );
}

export default App;


