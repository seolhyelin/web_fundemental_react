import Problem01 from '01/p1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/01/p" element={<Problem01 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
