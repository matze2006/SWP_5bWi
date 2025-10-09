import React from 'react'

type Props = {}

const example_map_filter_sort_Aufgabe_2 = (props: Props) => {
    const numbers = [5, 2, 8, 1, 4]

    console.log("Original:", numbers)
    console.log("Map (Quadratwurzel aller Zahlen)", numbers.map(Math.sqrt))
    console.log("Filter (gerade Zahlen)", numbers.filter(num => num % 2 === 0))
    console.log("Sort (Sortieren aufsteigend)", numbers.sort((a,b) => a-b))
  
    return (
    <div>Lösung zu Aufgabe 2 in der Konsole</div>
  )
}

export default example_map_filter_sort_Aufgabe_2