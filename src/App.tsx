import { useState } from 'react';
import AboutPage from './pages/AboutPage';


function App() {
  const [currentPage, setCurrentPage] = useState("About");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <AboutPage
      currentPage={currentPage}
    />
  );
}

export default App
