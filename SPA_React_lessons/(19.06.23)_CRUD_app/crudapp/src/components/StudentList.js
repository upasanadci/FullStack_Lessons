// this will show all students list from an array, by default its empty array
import { useContext, useState } from "react";
import StudentContext from "../context/studentContext";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreIcon from '@mui/icons-material/More';
import {List, ListItem, ListItemText }from '@mui/material';
import StudentForm from "./StudentForm";
import StudentDetail from "./StudentDetail";

function StudentList() {
    const {
        students, 
        setStudents,
        setCurrentStudent,
        setCurrentIndex, 
        edit, 
        setEdit,
        detail, 
        setDetail
    } = useContext(StudentContext)
    // onclick remove a student from list
    const removeStudent = (index)=>{
        console.log(students)
        const newArray = students.filter((student, currentIndex)=>{
            return currentIndex!=index
        })
        console.log(newArray)
        setStudents(newArray)
    }

    // update student data
    const updateStudent = (index)=>{
        setEdit(!edit) // toggle means always do opposite from the current state
        setCurrentStudent(students[index])
        setCurrentIndex(index)
    }

    // detail of student data
    const detailStudent = (index)=>{
        setDetail(!detail)
    }

    if(students.length>0) {
        return ( 
            <>
             <h2>List of Students</h2>
             <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'lightBlue' }}>
                {
                    students.map((student, index)=>{
                        return <ListItem alignItems="flex-start" key={index}>
                                <ListItemText primary={student.studentName}/>
                                <DeleteIcon onClick={()=> removeStudent(index)}/>
                                <ModeEditIcon onClick={()=> updateStudent(index)}/>
                                <MoreIcon onClick={()=> detailStudent(index)}/>
                        </ListItem>
                    })
                }
             </List>
             {
                edit&& 
                <>
                  <StudentForm/>
                </>
             }
                          {
                detail&& 
                <>
                  <StudentDetail/>
                </>
             }
            </>
         );
    }
    else {
        return <h3>No student added yet</h3>
    }
}

export default StudentList;