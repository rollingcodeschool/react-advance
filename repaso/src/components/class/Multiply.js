import React, { Component } from 'react';
import Square from './Square';

const MULTIPLY_FACTOR = 2;

class Multiply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
  };

  componentDidMount() {
    this.setState({ result: this.props.count * MULTIPLY_FACTOR });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
      this.setState({ result: this.props.count * MULTIPLY_FACTOR });
    }
  };

  render() {
    return (
      <Square count={this.state.result} />
    );
  }
};

export default Multiply;