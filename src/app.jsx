import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Login from './components/Login';

export function App() {
  const [count, setCount] = useState(0);
  const [active , setActive] = useState('');
  const [active2 , setActive2] = useState('');
  const [color, setColor] = useState(false)

  return (
    <>
      <Login />
      
     
      <div class="card">
       {/*  <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <button onClick={() => setColor(curColor => !curColor)}>{color ? 'pas color': 'color'}</button>
        <button onClick={() => setActive((active)=> 'black')}>change my color</button>
        <button onClick={() => setActive2((active2)=> 'down')}>send me down</button>
        <button onClick={() => setActive2((active2)=> '')}>up</button>
        <button onClick={() => setActive((active)=> '')}>left</button>



       
      </div>
      <div className={`box ${color === true ? 'black' : ''} ${active} ${active2}`}></div>
  
    </>
  )
}
