import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/Footer'
import Menu from './component/Menu'
import Header from './component/Header'
import Pizzas from './component/Pizzas'

function App() {
  const [count, setCount] = useState(0)
const pizzaData=[
{
  name:"Farm House",
  slice:6,
  photoname:<link src='https://www.dominos.co.in/files/items/Veg_Extravaganz.jpg'></link>,
  soldOut:false
},
{
  name:"Corn n Cheese",
  slice:6,
  photoname:<link src='https://www.dominos.co.in/files/items/Corn_&_Cheese.jpg'></link>,
  soldOut:false
}
]
  return (
    <>
    <Header/>
    <Menu/>
    <Pizzas data={pizzaData}/>
      <Footer/>
    </>
  )
}

export default App
