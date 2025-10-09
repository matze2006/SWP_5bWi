import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Car_example_Aufgabe_1 from './components/car_example_Aufgabe_1'
import Example_map_filter_sort_Aufgabe_2 from './components/example_map_filter_sort_Aufgabe_2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Car_example_Aufgabe_1 />
      <Example_map_filter_sort_Aufgabe_2 />
    </>
  )
}

export default App
