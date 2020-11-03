import React from 'react';
import { colors, getQuotes } from '../data';
import { connect } from 'react-redux';
import { changeQuote } from '../redux/actions';

let quotes;

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.newQuote = this.newQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let buttonStyleObj = {
      backgroundColor: `${this.props.mainColor }`,
      boxShadow: 'none',
      borderColor: `${this.props.mainColor}`
    }

    return (
      <div id="quote-box" className="col-xl-6 p-4 rounded bg-white">
        <div className="row">
          <blockquote className="col blockquote">
            <p id="text" className="text-center">
              { this.props.quoteObj && this.props.quoteObj.quote }
            </p>

            <footer className="blockquote-footer text-right">
              <cite id="author">
                { this.props.quoteObj && this.props.quoteObj.author }
              </cite>
            </footer>
          </blockquote>
        </div>      

        <div className="row justify-content-end px-3">
          <button
            id="new-author"
            style={ buttonStyleObj }
            className="col-xl-5 btn text-white"
            onClick={ this.handleClick }
          >
            New quote
          </button>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    quotes = await getQuotes.then(res => res);
    this.newQuote();    
  }

  handleClick() {
    this.newQuote();
  }

  newQuote() {
    let randomQuote = randomElem(quotes, this.props.quoteObj),
        randomColor = randomElem(colors, this.props.mainColor);

    this.props.newQuote(randomQuote, randomColor);

    function randomElem(arr, prevElem) {
      let randomIndex = Math.floor(Math.random() * arr.length),
          newElem = arr[randomIndex];

      return Object.is(newElem, prevElem) ? randomElem(arr, prevElem) : newElem;
    }
  }
}

const mapStateToProps = state => {
        return {
          quoteObj: state.quote,
          mainColor: state.mainColor
        };
      },
      mapDispatchToProps = dispatch => {
        return { newQuote: (quote, color) => dispatch(changeQuote(quote, color)) }
      },
      QuoteBoxContainer = connect(mapStateToProps, mapDispatchToProps)(QuoteBox);

export default QuoteBoxContainer;