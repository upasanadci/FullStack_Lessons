import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import StudentContext from '../context/studentContext';

function StudentDetail() {
    const {currentStudent} = useContext(StudentContext)
    return ( 
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {currentStudent.studentName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {currentStudent.country}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {currentStudent.city}
          </Typography>
        </CardContent>
      </Card>
     );
}

export default StudentDetail;