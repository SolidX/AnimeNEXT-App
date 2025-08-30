import { useState } from 'react';
import HomePage from './components/HomePage';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <HomePage
      currentPage={currentPage}
      title="Welcome to AnimeNEXT 2023!"
    />
  )
}

export default App
