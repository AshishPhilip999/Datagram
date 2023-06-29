import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [count , setCount] = useState(2);
  const [buttonlist , setButtons] = useState([]);

  // function onButtonClick(e){

  //   setButtons( buttons =>{
  //     return (
  //       [...buttons , { value : ("Button" + count ) , id : crypto.randomUUID() }]
  //     )
  //   } )
  // }
  
  
  return <>
  <div className='newbutton'>
  <ul id='list'>
  <button className='table-button' >Button</button>   
  </ul>
  </div>

  <div className='table' >
    <table>
      <thead>
        <tr>
          <th id='attributes'>Name</th>
          <th id='attributes'>ID</th>
          <th id='attributes'>Age</th>
          <th id='attributes'>Mobile</th>

          <button className='add-column'>+</button>
        </tr>

      </thead>
      <tbody>
           <tr>
            <td id='row'>Ashish</td>
            <td id='row'>16826</td>
            <td id='row'>20</td>
            <td id='row'>99999999</td>
           </tr>

           <tr>
            <td id='row'>Philip</td>
            <td id='row'>16816</td>
            <td id='row'>20</td>
            <td id='row'>9934567</td>
           </tr>
           <button className='add-row'>+</button>
      </tbody>
    </table>
  </div>
  </>
}

export default App
