import React , {useState} from "react";
import './App.css';

const emojiDictionary = {
  "😀" : "Smiling",
  "😲" : "disbelief",
  "😔" : "sad",
  "😡" : "angry",
  "😍" : "love",
  "😣" : "annoyance"
};

var emojiArray = Object.keys(emojiDictionary);

function App() {

  const [meaning , setMeaning ] = useState("Enter an Emoji or Choose one from below");

  function inputChangeHandler(event){
    if(event.target.value in emojiDictionary)
    {
      setMeaning("Meaning : " + emojiDictionary[event.target.value]);
    }
    else if(event.target.value === ""){
      setMeaning("Enter an Emoji or Choose one from below");
    }
    else setMeaning("We do not have that in our database");
  }

function emojiClickHandler(item){
  setMeaning("Meaning : " + emojiDictionary[item]);
}

  return (
    <div className="App">
      <h1>Emoji Finder</h1>
      <input type="text" onChange={inputChangeHandler}/>
      <br/><br/><br/>
      <div style={{fontSize:"x-large"}}>
         {meaning}
      </div>
        <br/><br/>
      <h1>Emoji We Know</h1>
      <br/>

      <ul>
        {emojiArray.map(item => {
          return <li onClick = {() => emojiClickHandler(item)}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
