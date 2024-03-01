import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Convener from './components/Convener'
import Student from './components/Student'
import Academics from './components/Academics'
import ViewStudents from './components/ViewStudents'
import ViewAcademics from './components/ViewAcademics'

function App() {

  return (
    <Router>
      <section className='entry-point'>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/convener' element={<Convener />} />
              <Route path='/student' element={<Student />} />
              <Route path='/academics' element={<Academics />} />
              <Route path='/view-students' element={<ViewStudents />} />
              <Route path='/view-academics' element={<ViewAcademics />} />
            </Routes>
          </section>
    </Router>
   
  )
}

export default App
