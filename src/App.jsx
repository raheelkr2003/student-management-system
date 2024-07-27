import { useEffect, useState } from 'react';
import './App.css';
import CreatStudent from './components/CreatStudent';
import StudentList from './components/StudentList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

function App() {
  const [students, setStudents] = useState([]);
  const [loader, setLoader] = useState(false);

  const studentsCollection = collection(db, "students");

  const getStudents = async () => {
    setLoader(true); 
    try {
      const studentSnapShot = await getDocs(studentsCollection);
      const studentList = studentSnapShot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudents(studentList);
    } catch (error) {
      console.log(error);
    } 
      setLoader(false); 

  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className='app-container'>
      <h1 className='app-title'>Student Management System</h1>
      <CreatStudent getStudents={getStudents}  />
      {loader ? <p>Loading...</p> : <StudentList students={students} setStudents={setStudents}  />}
    </div>
  );
}

export default App;