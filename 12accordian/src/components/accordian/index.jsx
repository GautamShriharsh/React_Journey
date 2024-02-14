// single selection
//multiple selection
import data from './data'
import { useState } from "react"
import './styles.css'

export default function Accordian() {
   
    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multiple, setMultiple] = useState([])


     function handleSingleSelection(getCurrentId)  {
      if (getCurrentId === selected) {
        setSelected(null)
      } else {
      setSelected(getCurrentId)
      }
    }

    function handleMultiSelection(getCurrentId) {
         let cpyMultiple = [...multiple]
         const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
         if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
         else cpyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(cpyMultiple)
    }

    console.log(multiple);
   
   return( <div className="wrapper">
       <button
       onClick={() => setEnableMultiSelect(!enableMultiSelect)}
       >
        Enable Multiselection</button>
       <div className="accordian">
        {
          data && data.length > 0 ?
          data.map((dataItem) => (
            <div className="item"
            onClick = {
              enableMultiSelect 
              ? () => handleMultiSelection(dataItem.id) 
              : () => handleSingleSelection(dataItem.id)} 

            key={dataItem.id}>
              <div
              className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                
                !enableMultiSelect && selected === dataItem.id ?
                <div className='content'>{dataItem.answer}</div>
                : null
              }
              {
                 
                  enableMultiSelect && multiple.includes(dataItem.id) && (
                <div className='content'>{dataItem.answer}</div>
                    
                  )
                
               
              }
            </div>
          ))
          : <div>No data found</div>
        }
       </div>
   </div>
)
}