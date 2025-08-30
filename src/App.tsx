import { useState } from 'react';
import ExhibitorsListPage from './components/ExhibitorsListPage';
import artists from './assets/artists.json'
import dealers from './assets/dealers.json'

function App() {
  const [currentPage, setCurrentPage] = useState("Dealers' Room");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <ExhibitorsListPage
      currentPage={currentPage}
      title={currentPage}
      exhibitors={dealers}
    />
  )
}

export default App
