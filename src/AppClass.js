import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isOn: false,
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState((previousState) => ({count: previousState.count + 1}));
  }

  decrementCount() {
    this.setState((previousState) => ({count: previousState.count - 1}));
  }

  toggleLight = () => {
    this.setState((prevState) => ({isOn: !prevState.isOn}))
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <button onClick={this.incrementCount}>
          Increment ThIS: {this.state.count}
        </button>
        <button onClick={this.decrementCount}>
          Decrement
        </button>
        <br/>
        <br />
        <h1>toggleLight</h1>
        <div style={{
          height: "50px",
          width: "50px",
          background: this.state.isOn ? "yellow" : "grey",
        }}
        onClick={this.toggleLight}
        >

        </div>
      </>
    );
  }
}

export default App;
