import { Routes, Route } from 'react-router-dom'
import { UserContextProvider } from '../contexts/UserContext'
import { Cart } from '../pages/cart'
import { Successful } from '../pages/cart/Successful'
import { Home } from '../pages/home'

export function AppRouter() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="cart/success" element={<Successful />}></Route>
      </Routes>
    </UserContextProvider>
  )
}
