import { useState } from 'react';
import MapsPage from './components/MapsPage';

function App() {
  const [currentPage, setCurrentPage] = useState("Maps");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <MapsPage 
      currentPage={currentPage}
    />
  );
}

export default App
