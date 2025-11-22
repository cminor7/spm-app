import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import MassEmail from "./pages/MassEmail";
import RequestForm from "./pages/RequestForm";

function App() {

  return (
    <main className='app-container'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/MassEmail' element={<MassEmail />}/>
        <Route path='/RequestForm' element={<RequestForm />}/>
      </Routes>

    </main>

  )
}

export default App
