import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/MyContext'

const Data = () => {

    const {data , updateData} = useContext(MyContext)


  return (
    <div>
        <h2>Data : {data} </h2>
        <button onClick={()=> updateData("new data are here")}>Update the data</button>
        </div>
  )
}

export default Data