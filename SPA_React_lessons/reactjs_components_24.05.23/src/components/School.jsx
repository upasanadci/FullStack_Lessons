import React from 'react'

const School = ({school,students}) => { // 1. here I am grabbing the properties directly

// 2. when I am using the props: const School = (props) => {
// 2.   let {school , students}=  props; //I can grab the properties from the props object
   console.log(school)
   console.log(students)

  return (
    <div>Our school is  <span style={{color:"blue"}}>{school} </span></div>
  )
}

export default School