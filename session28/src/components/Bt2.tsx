import React, { Component } from 'react'
interface State{
    id:number
    name:string
    birthday:string
    address:string
}
export default class Bt2 extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
            id:1,
            name:"Ngô Hữu Nghĩa",
            birthday:"12/04/2005",
            address:"Hà Nội"
        }
    }
  render(){
    return (
      <div>Bài tập 2
        <p>id: {this.state.id}</p>
        <p>Tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.birthday}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    )
  }
}
