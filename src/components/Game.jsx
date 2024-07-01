import { useEffect, useState } from 'preact/hooks';
import React from 'react'


export const Game = () => {
  const speed = 20;
  const gameObject = 50;
  const [player1score, setPlayer1score] = useState(0);
  const [player2score, setPlayer2score] = useState(0);

  // const [active , setActive] = useState('');
  // const [active2 , setActive2] = useState('');
  // const [color, setColor] = useState(false)
  const [playerX, setPlayerX] = useState(0)
  const [playerY, setPlayerY] = useState(0)
  const [player2X, setPlayer2X] = useState(0)
  const [player2Y, setPlayer2Y] = useState(0)
  // const [scalingFactor, setScalingFactor] = useState(1)
  // const [angle, setAngle] = useState(0)
  const [bananaX, setBananaX] = useState(Math.random()* 1000)
  const [bananaY, setBananaY] = useState(Math.random() * 900)


  // useEffect(() => {
  //   setScalingFactor(Math.max(1 - Math.sqrt(Math.pow((move-790), 2) + Math.pow(movedown-690, 2)) / 300, 0.1))
  // }, [move, movedown])
  const handleKeyDown = (event) => {
    var cont = document.querySelector('.gamecontainer');
    var contRect = cont.getBoundingClientRect()

    if (event.key === 'ArrowRight') {
      setPlayerX((curPlayerX) => {
        if (curPlayerX + gameObject + speed >= contRect.right)
          return contRect.right - gameObject

        return curPlayerX + speed





        if (curPlayerX + speed + gameObject <= contRect.right) {
          return curPlayerX + speed
        }
        return curPlayerX
      })
      // setAngle(180)
    }

    else if (event.key === 'ArrowLeft') {
      setPlayerX((curPlayerX) => {
        if (curPlayerX + speed >= 300) {
          return curPlayerX - speed
        }
        return curPlayerX
      })
      // setAngle(0)
    }
    else if (event.key === 'ArrowDown') {
      setPlayerY((curPlayerY) => {
        if (curPlayerY + speed <= 600) {
          return curPlayerY + speed
        }
        return curPlayerY
      })
      // setAngle(270)

    }
    else if (event.key === 'ArrowUp') {
      setPlayerY((curPlayerY) => {
        if (curPlayerY + speed >= 120) {
          return curPlayerY - speed
        }
        return curPlayerY
      })
      // setAngle(90)

    }
    ///////////////////////////// player 2
    if (event.key === 'd') {
      setPlayer2X((curPlayer2X) => {
        if (curPlayer2X + speed <= 1300) {
          return curPlayer2X + speed
        }
        return curPlayer2X
      })
      // setAngle(180)
    }

    else if (event.key === 'a') {
      setPlayer2X((curPlayer2X) => {
        if (curPlayer2X + speed >= 203) {
          return curPlayer2X - speed
        }
        return curPlayer2X
      })
      // setAngle(0)
    }
    else if (event.key === 'w') {
      setPlayer2Y((curPlayer2Y) => {
        if (curPlayer2Y + speed >= 120) {
          return curPlayer2Y - speed
        }
        return curPlayer2Y
      })
      // setAngle(90)

    }

    else if (event.key === 's') {
      setPlayer2Y((curPlayer2Y) => {
        if (curPlayer2Y + speed <= 620) {
          return curPlayer2Y + speed
        }
        return curPlayer2Y
      })
      // setAngle(270)

    }

    //////////////////////////////////////////
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  useEffect(() => {
    /* const box = document.getElementsByClassName('box'); */
    if (playerX === bananaX && playerY === bananaY) {
      // if ((playerX === bananaX && playerY === bananaY) || (playerX + 10) === bananaX && (playerY + 10) === bananaY) {
      setPlayer1score((player1score)=>{
        return player1score +1
      })

    }
    else if (player2X === bananaX && player2Y === bananaY){
      console.log("play2 did it")
      setPlayer2score((player2score) => {
        return player2score + 1
      })
    }
    
  }, [playerX , player2X , player2Y , playerY])


  return (
    <div>
      player one {player1score} - player tow {player2score}
    <div className='gamecontainer'>
      <div style={{ position: 'absolute', left: playerX, top: playerY, backgroundColor: 'red', width: gameObject, height: gameObject }} className={`box`}></div>
      <div style={{ position: 'absolute', left: player2X, top: player2Y, backgroundColor: 'black', width: gameObject, height: gameObject }} className={`box2`}></div>
      <div style={{ position: 'absolute', left: bananaX, top: bananaY, backgroundColor: 'blue', width: gameObject, height: gameObject }} className="banana"></div>
      </div>
      </div>
  )
}
{/* <Login /> */ }


{/* <div class="card"> */ }
{/*  <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
{/*  <button onClick={() => setColor(curColor => !curColor)}>{color ? 'pas color': 'color'}</button> */ }

{/*  <button onClick={() => setActive((active)=> 'black')}>change my color</button>
        <button onClick={() => setActive2((active2)=> 'down')}>send me down</button> */}
{/* <button onClick={() => setActive2((active2)=> '')}>up</button>
        <button onClick={() => setActive((active)=> '')}>left</button> */}
{/* <button className='w-25' onClick={() => setMove((move)=> move + 100)}>move right</button> */ }
{/*  <button className='w-25' onClick={() => setMovedown((movedown)=> movedown + 100)}>move down</button> */ }
{/*  <button className='w-25' onClick={() => setMove((move)=> move - 100)}>move left</button>
        <button className='w-25' onKeyUp={() => setMovedown((movedown)=> movedown - 100)}>move Up</button> */}



{/* </div> */ }
{/* <div className={`box ${color === true ? 'black' : ''} ${active} ${active2}`}></div> */ }
