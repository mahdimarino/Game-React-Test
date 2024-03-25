import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Login from './components/Login';
import Layout from './components/Layout'
import { BrowserRouter, RouterProvider } from 'react-router-dom';

export function App() {
  const [count, setCount] = useState(0);
  const [active , setActive] = useState('');
  const [active2 , setActive2] = useState('');
  const [color, setColor] = useState(false)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
       {/*  <Route index element={<Home />} /> */}
        <Route path="login" element={<Login />} />
     
       
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
