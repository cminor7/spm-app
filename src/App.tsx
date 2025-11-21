import {Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import MassEmail from "./pages/MassEmail"

function App() {

  return (
    <main className='main-cointent'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/MassEmail' element={<MassEmail />}/>
      </Routes>

    </main>

  )
}

export default App
