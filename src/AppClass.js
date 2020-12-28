import React, {Component} from 'react';

class App extends Component {
  constructor() {
    this.state = {
      count: 0,
    }
  }

  incrementCount() {
    this.state.count = this.setState((previousState) => (previousState.count + 1));
  }

  decrementCount() {
    this.state.count = this.setState((previousState) => (previousState.count - 1));
  }

  render() {
    return (
      <>
        <button onClick={this.incrementCount}>
          Increment
        </button>
        <button onClick={this.decrementCount}>
          Decrement
        </button>
      </>
    );
  }
}

export default App;
