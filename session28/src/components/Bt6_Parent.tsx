import React, { Component } from 'react'
import Bt6_Childer from './Bt6_Childer'
let users =[
    {
        id:1,
        name:"Nam",
        address:"Hà Nội",
        email:"nam@gamil.com"
    },
    {
        id:2,
        name:"Hà",
        address:"Hưng Yên",
        email:"ha@gamil.com"
    },
    {
        id:3,
        name:"Yến",
        address:"Hà Giang",
        email:"yen@gmail.com"
    },
]
export default class Bt6 extends Component {
  render() {
    return (
      <div>
        Bài tập 6
        <Bt6_Childer users={users}></Bt6_Childer>
      </div>
    )
  }
}
