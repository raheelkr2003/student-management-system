import './App.css'
import StudentList from './Component/StudentList'
import StudentName from './Component/CreateStudent'

function App() {
  return (
    <div className='app-container'>
      <h1 className='heading-title'>Student Managment System</h1>
      <StudentName/>
      <StudentList/>
    </div>
  )
}

export default App