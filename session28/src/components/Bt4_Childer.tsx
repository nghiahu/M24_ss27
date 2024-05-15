import React from 'react'
interface Props{
  name:string
}
export default function Bt4_Childer(props:Props) {
  return (
    <div>
      Họ và tên bên component con: {props.name}
    </div>
  )
}

