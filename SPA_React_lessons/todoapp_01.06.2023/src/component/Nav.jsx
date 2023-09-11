import React from 'react'

const Nav = ({setDisplayHelp}) => {

 const clickHandler = (str) => {
  if (str === "todo") {
    setDisplayHelp(false)

  } else {
    setDisplayHelp(true)
  }
  }

  return (
    <nav>
        <h1 onClick={()=>clickHandler("todo")}>Todo app</h1>
        <a onClick={clickHandler}>Help</a>
    </nav>
  )
}

export default Nav