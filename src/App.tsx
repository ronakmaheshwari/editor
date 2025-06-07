import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Code from './ui/pages/Code'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Code />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
