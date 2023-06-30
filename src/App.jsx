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
        m.push({id : crypto.randomUUID() , value : "val" , isSelected : false });
      })
    }

    setColumn(currColumn => {

      return (
        [...currColumn , {id : crypto.randomUUID() , value : "col"+count , isSelected : false  }   ]
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
      newarr.push( { id : crypto.randomUUID() , value : "val" , isSelected : false} );
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

  function selectColumn(id){

    setColumn(columns => {

      return columns.map( col => {
          
        if(col.id === id)
        {
          col.isSelected = true;
        }

        return col;
      })

    })

  }

  function deSelectColumn(id , updatedvalue){

    setColumn(columns => {

      return columns.map( col => {
          
        if(col.id === id)
        {
          col.value = updatedvalue;
          col.isSelected = false;
        }

        return col;
      })

    })

  }

  function selectRow(id){

    setRows(allrows => {

      return allrows.map(row => {
        return row.map(val => {
          if(val.id === id){
             val.isSelected = true;
          }

          return val;
        })
      })
    })
  }

  function deSelectRow(id , updatedvalue){

    setRows(allrows => {

      return allrows.map(row => {
        return row.map(val => {
          if(val.id === id){
             val.value = updatedvalue;
             val.isSelected = false;
          }

          return val;
        })
      })
    })

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
              <th  key={col.id} id='attributes' onClick={e => selectColumn(col.id)} >{ (col.isSelected) ? <input className='row-input' type="text" defaultValue={col.value} onBlur={e => {deSelectColumn( col.id , e.target.value)}} /> : col.value } </th>
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
                    val =>{
                      return [
                        <td key={val.id} id='row' onMouseUpCapture={ e => {selectRow(val.id)} }> { (val.isSelected) ? <input className='row-input' type="text" defaultValue={val.value}   onBlur={e => { deSelectRow(val.id , e.target.value ) } }/> : val.value   } </td>
                      ]
                    }
                  )}
                </tr>
              ]
            }
           )}

           
      </tbody>
      
    </table>
    <button className='add-row' onClick={e => onClickAddRowButton(e)}>+</button>
           <button className='remove-row' onClick={e => onClickDeleteRowButton( rows[rows.length-1] )} >-</button>
   
  </div>
  </>
}

export default App
