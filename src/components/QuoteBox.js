import React from 'react';
import { quotes } from './data';

class QuoteBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: '',
      author: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div id="quote-box" className="col-xl-6 p-4 rounded bg-white" onClick={ this.handleClick }>
        <div className="row">
          <blockquote className="col blockquote">
            <p id="text" className="text-center">
              { this.state.text }
            </p>

            <footer className="blockquote-footer text-right">
              <cite id="author">
                { this.state.author }
              </cite>
            </footer>
          </blockquote>
        </div>      

        <div className="row justify-content-end px-3">
          <button
            id="new-quote"
            className="col-xl-5 btn btn-info text-white"
            style={
              {
                backgroundColor: `${this.props.mainColor}`
              } 
            }
          >
            New quote
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.changeQuote();
  }

  handleClick(event) {
    if (event.target.id === 'new-quote') {
      console.log(this);
      this.changeQuote();
    }
  }

  changeQuote() {
    let index = Math.floor(Math.random() * quotes.length),
        randomQuote = quotes[index];
    
    if (randomQuote === this.state.text) {
      this.changeQuote();
    }

    this.setState({
      text: randomQuote.quote,
      author: randomQuote.author
    });
  }
}

export default QuoteBox;