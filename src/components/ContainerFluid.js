import React from 'react';
import colors from './data';

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
            <main className="row justify-content-center">
              <div id="quote-box" className="col-xl-6 p-4 rounded bg-white">
                <div className="row">
                  <div />
                  
                  {/* <blockquote className="col blockquote">
                    <p id="text" className="text-center"></p>
                    <footer id="author" className="blockquote-footer text-right"></footer>
                  </blockquote> */}
                </div>        
                
                <div className="row justify-content-end px-3">
                  <button id="new-quote" className="col-xl-5 btn btn-default text-white">New quote</button>
                </div>
              </div>
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