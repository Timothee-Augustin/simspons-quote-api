import React, {useState} from "react"
import QuoteCard from "./components/QuoteCard"
import './App.css';

const sampleSimpson =  
  { "quote": "I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
    "character": "Homer Simpson",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    "characterDirection": "Right"}

console.log(sampleSimpson)

function App() {
  
  const [simpson, setSimpson] = useState(sampleSimpson)  

  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;

  const getQuote = () => {
    fetch(url)
    .then ((response) => response.json())    
    .then((result) => {
      console.log(result)    
      setSimpson(result[0])
    })
    
  }

  return (
    <div className="App">
      <QuoteCard simpson = {simpson} />
      <button type="button" onClick={getQuote}>New random quote</button>
    </div>
  );
}

export default App;
