import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [count , setCount] = useState(2);
  const [buttonlist , setButtons] = useState([]);

  function onButtonClick(e){

    setButtons( buttons =>{
      return (
        [...buttons , { value : ("Button" + count ) , id : crypto.randomUUID() }]
      )
    } )
  }
  
  
  return <>
  <div className='newbutton'>
  <ul id='list'>
  <button className='table-button'  onClick={e => { setCount(count+1); onButtonClick(e) }} >Button</button>
    {buttonlist.map(
      lists =>{
        return <button className='table-button'>{lists.value}</button>
      }
    )}
  </ul>
  </div>
  </>
}

export default App
