import { useState } from 'react';
import ShuttlesPage from './components/ShuttlesPage';

function App() {
  const [currentPage, setCurrentPage] = useState("Shuttles");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <ShuttlesPage
      currentPage={currentPage}
    />
  );
}

export default App
