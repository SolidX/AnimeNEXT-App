import { useState } from 'react';
import Page from './components/Page';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <Page
      currentPage={currentPage}
      title="Welcome to AnimeNEXT 2023!"
    />
  )
}

export default App
