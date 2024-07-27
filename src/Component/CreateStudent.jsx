import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import {db} from '../firebaseConfig'


function StudentName() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [isCreatingStudent, setIsCreatingStudent] = useState(false)

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            setIsCreatingStudent(true)
            await addDoc(collection(db, 'students'),{
                name: name,
                age: Number(age),
            })
            setName("")
            setAge('')
            setIsCreatingStudent(false)
            
        } catch (error) {
            console.log("Error Creating user:", error)
            setIsCreatingStudent(false)
        }
    }
  return (
    <form onSubmit={handleSubmit} className="form">
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Enter Student Name"/>
        <input type="text" value={age} onChange={(e)=> setAge(e.target.value)} placeholder="Enter Student Age" />
        <button type="submit" >{isCreatingStudent ? 'Creating...' : 'Create Student'}</button>
    </form>
  )
}

export default StudentName