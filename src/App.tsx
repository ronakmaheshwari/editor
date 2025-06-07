import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Code from './ui/pages/Code'
import Leetcode from './ui/pages/Leetcode'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Code />}/>
          <Route path='/leetcode' element={<Leetcode />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
