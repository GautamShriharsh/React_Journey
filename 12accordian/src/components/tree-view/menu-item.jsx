import React, { useEffect, useState } from 'react'
import MenuList from './menu-list'
import { FaMinus, FaPlus } from 'react-icons/fa'

function MenuItem({ item }) {

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  // const [displaySign, setDisplaySign] = useState('+')

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
    })
  }
  // Another way to change the sign using the state

  // function handleDisplaySign(currentLabel) {
  //   if (displayCurrentChildren[currentLabel]) {
  //     setDisplaySign('-')
  //   }
  //   else {
  //     setDisplaySign('+')

  //   }
  // }
  // useEffect(() => {
  //    handleDisplaySign(item.label)
  // }, [displayCurrentChildren])




  //console.log(displayCurrentChildren);
  // console.log(displaySign);


  return (
    <li className='menu-item'>
      <div style={{ display: 'flex', gap: '20px' }}>
        <p>{item.label}</p>
        <div>{item && item.children && item.children.length ?
          <span onClick={() => handleToggleChildren(item.label)}
          >

            {
              displayCurrentChildren[item.label] ? <FaMinus color='#fff' size={10} /> : <FaPlus color='#fff' size={10} />
              }
           

          </span>
          : null}</div>
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
        <MenuList list={item.children} />
        : null}
    </li>
  )
}

export default MenuItem
