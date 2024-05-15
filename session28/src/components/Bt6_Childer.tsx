import React, { Component } from 'react'
interface user{
  name:string,
  id:number,
  address:string,
  email:string
}
interface Props {
  users:user[]
}
export default class Bt6_Childer extends Component<Props> {
    render() {
        const {users}=this.props
        return (
          <div>
                 {users.map((item,index) =>{
                    return <li key={index}>{item.name} id: {item.id} Tên: {item.name} Địa chỉ :{item.address}</li>
                })}
          </div>
        )
      } 
}

