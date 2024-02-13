// single selection
//multiple selection
import data from './data'
import { useState } from "react"

export default function Accordian() {
   
    const [selected, setSelected] = useState(null);

     function handleSingleSelection(getCurrentId)  {
      if (getCurrentId === selected) {
        setSelected(null)
      } else {
      setSelected(getCurrentId)
      }
    }

    // console.log(selected);
   
   return( <div className="wrapper">
       <div className="accordian">
        {
          data && data.length > 0 ?
          data.map((dataItem) => (
            <div className="item"
            onClick = {() => handleSingleSelection(dataItem.id)} 
            key={dataItem.id}>
              <div
              className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                selected === dataItem.id ?
                <div className='content'>{dataItem.answer}</div>
                : null
              }
            </div>
          ))
          : <div>No data found</div>
        }
       </div>
   </div>
)
}