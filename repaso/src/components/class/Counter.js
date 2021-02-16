import React, { Component } from 'react';
import Square from './Square';
import Actions from './Actions';
import Multiply from './Multiply';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  };

  incrementCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrementCount() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  clearCount = () => this.setState({ count: 0 });

  render() {
    return (
      <div
        className='content'
        style={{
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Square count={this.state.count} />
          <Multiply count={this.state.count} />
        </div>
        <Actions
          handleIncrementCount={this.incrementCount}
          handleDecrementCount={this.decrementCount}
          handleClearCount={this.clearCount}
        />
      </div>
    );
  }
};

export default Counter;