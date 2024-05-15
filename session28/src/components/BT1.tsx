import React, { Component } from 'react';
interface State{
    name:string
}
export default class BT1 extends Component<{},State> {
  constructor(props:{}) {
    super(props);
    this.state = {
      name: "Ngô Hữu Nghĩa"
    };
  }

  render() {
    return (
      <div>
        Bài tập 1
        <p>Họ và tên: {this.state.name}</p>
      </div>
    );
  }
}


