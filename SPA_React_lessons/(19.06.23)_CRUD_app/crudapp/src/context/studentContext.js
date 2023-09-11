// Here you will decide what context or states data you need for later use as global state/data
import { createContext } from 'react';

// create a context for students
const StudentContext = createContext()

// export this in a place where you need to use it as a Provider so all its child can have it from provider as value
export default StudentContext