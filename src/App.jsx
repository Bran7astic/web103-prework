import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import '@picocss/pico'
import Layout from './pages/Layout'
import AddCreator from './pages/AddCreator'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="add" element={<AddCreator/>}/>
          <Route path="edit/:uuid" element={<AddCreator edit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
