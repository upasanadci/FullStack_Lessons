import { useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import StudentContext from './context/studentContext';

function App() {
  const [students, setStudents] = useState([])
  const initialData = {studentName: '', country: '', city: ''}
  const [currentStudent, setCurrentStudent] = useState(initialData)
  const [currentIndex, setCurrentIndex] = useState()
  const [edit, setEdit] = useState(false)
  const [detail, setDetail] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
          <StudentContext.Provider value={{
            students, 
            setStudents, 
            currentStudent, 
            setCurrentStudent, 
            currentIndex, 
            setCurrentIndex,
            edit,
            setEdit,
            detail, 
            setDetail
            }}>
               {/* all childrens */}
              <StudentForm/>
              <StudentList/>
          </StudentContext.Provider>
      </header>
    </div>
  );
}

export default App;
