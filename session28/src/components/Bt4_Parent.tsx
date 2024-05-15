import React from 'react'
import Bt4_Childer from './Bt4_Childer'
export default function Bt4_Parent() {
  let name:string = "Nguyễn Văn Nam"
  return (
    <div>
      Bài Tập 4
      <p>Họ và tên bên component cha: {name}</p>
      <Bt4_Childer name={name}></Bt4_Childer>
    </div>
  )
}


