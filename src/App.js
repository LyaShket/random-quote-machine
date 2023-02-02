import './App.css';
import React from 'react';
import QuoteBlock from "./components/QuoteBlock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    }
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data.content,
          author: data.author,
        })
      });
  }

  render() {
    return (
      <div className="App">
        <QuoteBlock quote={this.state.quote} author={this.state.author} onNewQuote={this.getQuote.bind(this)} />
      </div>
    );
  }
}

export default App;
