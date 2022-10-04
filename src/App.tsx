import Problem01 from '01/p1'
import Home from 'Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/01/p" element={<Problem01 />} />
        <Route path="*" element={<p>Not Found Page!</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
