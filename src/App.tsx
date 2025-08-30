import { useState } from 'react';
import HoursPage from './components/HoursPage';

function App() {
  const [currentPage, setCurrentPage] = useState("Hours");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <HoursPage
      currentPage={currentPage}
    />
  )
}

export default App
