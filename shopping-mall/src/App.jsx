import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import CartContainer from './components/CartContainer/CartContainer'
import Navbar from './components/Header/Navbar'

function App() {

  const [isActive,setIsActive] = useState({
    cart: true,
    status: "cart"
  })


  const  handleIsActive = status => {
    if(status == 'cart'){
      setIsActive({
        cart: true,
        status: 'cart'
      })
    }
    else {
      setIsActive({
        cart: false,
        status: 'about'
      })
    }
  }
 
  console.log(isActive);

  return (
    <>
     <Navbar />
     <div className='flex justify-around font-medium mt-10'>
      <AllProducts />
      <CartContainer handleIsActive={handleIsActive} isActive={isActive}/>
     </div>
    </>
  )
}

export default App
