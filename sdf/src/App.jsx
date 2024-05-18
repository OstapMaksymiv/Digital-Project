import Main from './pages/Main//Main'
// import Gallery from './pages/Gallery//Gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Layout} from './Layout'
// import Projects from './pages/Projects/Projects'
// import Project from './pages/Project/Project'
// import Contacts from './pages/Contacts/Contacts'
// import Certifications from './pages/Certifications/Certifications'
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Main/>}/>
          {/* <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Project/:id" element={<Project/>}/>
          <Route path="/Certifications" element={<Certifications/>}/>
          <Route path="/Contacts" element={<Contacts/>}/> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
