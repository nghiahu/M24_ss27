import React, { Component } from 'react'
import Bt5_Childer from './Bt5_Childer'
let props = {
    id:1,
    name:"SamsumGalaxy_ss24Ultra",
    price:32000000,
    quantity:3
}

export default class Bt5_Parent extends Component {
  render() {
    return (
      <div>
        Bài tập 5
        <Bt5_Childer product={props}></Bt5_Childer>
      </div>
    )
  }
}
