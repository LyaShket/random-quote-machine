import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

class QuoteBlock extends React.Component {
  onNewQuote() {
    this.props.onNewQuote();
  }

  render() {
    return (
      <div id="quote-box">
        <p id="text">{this.props.quote}</p>
        <p id="author" className="text-right mb-6">(c) {this.props.author}</p>
        <div className="flex items-center justify-between">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
            <FontAwesomeIcon icon={faTwitter} width="40px" />
          </a>
          <button id="new-quote" onClick={this.onNewQuote.bind(this)}>New quote</button>
        </div>
      </div>
    );
  }
}

export default QuoteBlock;
