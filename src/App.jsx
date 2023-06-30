import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [count , setCount] = useState(1);

  const [column , setColumn] = useState([]);

  const [rows , setRows] = useState([]);

  const [values , setValues] = useState([]);


  function onClickAddColumnButton(e){

    if(rows !=  null){
      rows.map(m => {
        m.push("val");
      })
    }

    setColumn(currColumn => {

      return (
        [...currColumn , ( "Col" + count )  ]
      )
    })
  }

  function onClickAddRowButton(e){

    setRows( arr => {

      return [...arr , returnArr()  ]

    } )
  }

  function returnArr(){
    var newarr = []

    column.map(m => {
      newarr.push("val");
    })

    return newarr;
  }
  
  function onClickDeleteColumnButton(id){

    if(rows != null){
      rows.map( m => {
        m.pop();
      } )
    }

    setColumn( currentcol => { return currentcol.filter(cols => cols !== id ) } )
  }

  function onClickDeleteRowButton(id){

    setRows( currow => { return currow.filter(thisrow => thisrow !== id)} )

  }

  return <>
  <div className='newbutton'>
  <ul id='list'>   
  </ul>
  </div>

  <div className='table' >
    <table>    
      <thead> 
        <tr>
        {column.map(
          col => {
            return [
              <th  key={crypto.randomUUID()} id='attributes'>{col} </th>
            ]
          }
        )}
        
         <button className='add-column' onClick={e => {onClickAddColumnButton(e) ; setCount(count+1) } } >+</button>
         <button className='remove-column' onClick={e => { onClickDeleteColumnButton( column[column.length-1] ) ; setCount( (count <= 1 ? 1  : count-1) ) } }  >-</button>
        </tr>

      </thead>
      <tbody>
           
           {rows.map(
            curow => {
              return [
                <tr>
                  {curow.map(
                    value =>{
                      return [
                        <td key={crypto.randomUUID()} id='row'>{value}</td>
                      ]
                    }
                  )}
                </tr>
              ]
            }
           )}

           <button className='add-row' onClick={e => onClickAddRowButton(e)}>+</button>
           <button className='remove-row' onClick={e => onClickDeleteRowButton( rows[rows.length-1] )} >-</button>
      </tbody>
    </table>
   
  </div>
  </>
}

export default App
