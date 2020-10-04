import React from 'react';
import { colors } from './data';
import QuoteBox from './QuoteBox';

class ContainerFluid extends React.Component {
  constructor(props) {
    super();
    this.state = {
      color: 'blue'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div
        className="container-fluid vh-100"
        style={ 
          { backgroundColor: `${this.state.color}` }
        }
        onClick={ this.handleClick }
      >
        <div className="row h-100 align-items-center">
          <div className="container-fluid">
            <main 
              className="row justify-content-center"
              style={ {color: `${this.state.color}`} }
            >
              <QuoteBox mainColor={ this.state.color } />
            </main>
          
            <footer className="row justify-content-center text-white">
              <p>by taras</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.changeColor();
  }

  handleClick(event) {
    if (event.target.id === 'new-quote') {
      this.changeColor();
    }
  }

  changeColor() {
    let index = Math.floor(Math.random() * colors.length),
        randomColor = colors[index];

    this.setState({
      color: randomColor
    });
  }
}

export default ContainerFluid;