import React from 'react';
import QuoteCard from './QuoteCard';
import axios from 'axios';

const sampleCharacter = 
  {
    quote: "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
    character: "Homer Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right"
  };

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: sampleCharacter
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          character: data[0],
        });
    });
  }

  render () {
    return (
      <div className="App">
        <QuoteCard character={this.state.character} />
        <button type="button" onClick={this.getQuote}>Get a new quote</button>
      </div>
    )
  }
}
  
export default RandomQuote;
