import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Convener from './components/Convener'
import Student from './components/Student'
import Academics from './components/Academics'
import ViewStudents from './components/ViewStudent'
import ViewAcademics from './components/ViewAcademics'
import ViewProject from './components/ViewProject'

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
              <Route path='/view-project' element={<ViewProject/>} />
            </Routes>
          </section>
    </Router>
   
  )
}

export default App
