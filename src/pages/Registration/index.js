import React, { Component } from 'react';
import './style.scss';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Name',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>
          Registration:
          { name }
        </h1>
      </div>
    );
  }
}

export default Registration;
