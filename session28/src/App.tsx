import Parent from "./components/Parent"
import Products from "./components/Products"
import Bt1 from "./components/BT1"
import Bt2 from "./components/Bt2"
import Bt3 from "./components/Bt3"
import Bt4 from "./components/Bt4_Parent"
import Bt5 from "./components/Bt5_Parent"
import Bt6 from "./components/Bt6_Parent"
export default function App() {
  let fullName:string = "hoa"
  let age:number = 20
  let products=[
    {
      name:"iphone15",
      id:1,
      price:5000
    },
    {
      name:"iphone14",
      id:2,
      price:400,
    },
    {
      name: "iphone13",
      id:3,
      price: 3000,
    }
  ]
  return (
    <div>App
      <p>props : properties
        - dùng để truyền,  gửi dữ liệu từ component cha xuống component con 
        -componet cha chứa componet con
      </p>
      <p>state

      </p>
      <Parent a={fullName} b={age}></Parent>
      <Products product={products}></Products>
      <Bt1></Bt1>
      <Bt2></Bt2>
      <Bt3></Bt3>
      <Bt4></Bt4>
      <Bt5></Bt5>
      <Bt6></Bt6>
    </div>
  )
}

