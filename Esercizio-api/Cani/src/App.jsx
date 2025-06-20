import { useState } from 'react'
import './App.css'
import DogBreedsApp from './components/DogCeo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <DogBreedsApp/>
      </div>
       </>
  )
}

export default App



