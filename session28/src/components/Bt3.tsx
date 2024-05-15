import React, { Component } from 'react'
interface User{
    id:number
    name:string
    address:string
}

export default class Bt3 extends Component<{},User[]>{
    constructor(props:{}){
        super(props)
        this.state = [
          {
            id:1,
            name:"Nam",
            address:"Hà Nội"
          },
          {
            id:2,
            name:"Lan",
            address:"Hải Phòng"
          }
        ]
    }
  render() {
    return (
      <div>
        Bài tập 3
        <ul>
          {this.state.map((item,index) =>{
            return <div key={index}>id: {item.id} <br/>Tên: {item.name} <br/>Địa chỉ: {item.address}</div>
                    
          })}
        </ul>
      </div>
    )
  }
}
