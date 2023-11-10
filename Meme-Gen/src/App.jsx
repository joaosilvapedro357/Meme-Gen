import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Meme from './Pages/Get'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/get" element={<Meme/>}/>
      </Routes>
    </div>
  )
}

export default App
