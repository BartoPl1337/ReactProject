import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import PostPage from './Pages/PostPage'
import ContactPage from './Pages/ContactPage'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
