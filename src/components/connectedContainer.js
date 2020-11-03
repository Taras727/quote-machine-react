import React from 'react';
import QuoteBoxContainer from './QuoteBoxContainer';
import { connect } from 'react-redux';

class ContainerFluid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{ backgroundColor: `${this.props.mainColor}`, color: `${this.props.mainColor}` }}
        className="container-fluid vh-100"
      >
        <div className="row h-100 align-items-center">
          <div className="container-fluid">
            <main className="row justify-content-center">
              <QuoteBoxContainer />
            </main>
          
            <footer className="row justify-content-center text-white">
              <p>by taras</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ mainColor: state.mainColor }),
      connectedContainer = connect(mapStateToProps, null)(ContainerFluid);

export default connectedContainer;