import { useState } from 'react'
import Header from './components/header'
import Form from './components/form'
import Meme from './components/Meme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-screen">
      <Header />
      <Form />
    </div>
  )
}

export default App
