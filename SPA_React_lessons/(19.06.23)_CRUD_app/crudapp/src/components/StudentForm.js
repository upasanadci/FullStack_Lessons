import { useContext, useId } from "react";
import StudentContext from "../context/studentContext";
import {v4 as uuidv4} from "uuid"
function StudentForm() {
    const {students, setStudents, currentStudent, setCurrentStudent, currentIndex, setEdit} = useContext(StudentContext)
    const getFormData = (e)=>{
        console.log(e.target)
        e.preventDefault()
        // if currentStudent have some data update the students array else just push or add new object
        if(currentIndex>=0) {
            // update the object based on index
            students[currentIndex] = currentStudent
            setStudents([...students])
            setEdit(false)
        } else {
            // add a new object
            setStudents([
                ...students,
                {
                    id: uuidv4(),
                    studentName:  e.target.studentName.value,
                    country:  e.target.country.value,
                    city:  e.target.city.value
                }
            ])
        }
    }
    // on change the input data for urrent object
    const changeInput = (e)=>{
        setCurrentStudent({...currentStudent, [e.target.name]: e.target.value})
    }
    return ( 
        <>
        <h1>Student Form </h1>
        <form onSubmit={getFormData}>
            <br/>
            <label>Name of Student:</label>
            <input type="text" name="studentName" value={currentStudent.studentName} onChange={changeInput}/>
            <br/>
            <label>Country:</label>
            <input type="text" name="country" value={currentStudent.country} onChange={changeInput}/>
            <br/>
            <label>City:</label>
            <input type="text" name="city" value={currentStudent.city} onChange={changeInput}/>
            <br/>
            <br/>
            <button type="submit">Add</button>
            <button type="reset">Reset</button>
        </form>
        </>
     );
}

export default StudentForm;