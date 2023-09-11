import {useState} from 'react'
import MyProps from "./MyProps";

function Person() {
    // states
    const initialData = {
        id: 1,
        name: 'Yassine',
        age: 18,
        student: 'yes'
    }
    const [person, setPerson] = useState(initialData)
    // update person data
    const updatePerson = (e)=>{
        setPerson({...person, name: e.target.value})
        // setPersons([...person, newValue])
    }
    return ( 
        <div>
            <input type="text" onChange={updatePerson}/>
           <input type="text" onChange={e=>setPerson({...person, name: e.target.value})}/>

           <p>{JSON.stringify(person)}</p>
           <MyProps data={person} />
        </div>
     );
}

export default Person;