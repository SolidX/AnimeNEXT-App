import { useState } from 'react';
import LocationsPage from './components/LocationsPage';

function App() {
  const [currentPage, setCurrentPage] = useState("Locations");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <LocationsPage
      currentPage={currentPage}
    />
  );
}

export default App
