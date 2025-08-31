import { useState } from 'react';
import DressCodePage from './pages/DressCodePage';


function App() {
  const [currentPage, setCurrentPage] = useState("Dress Code");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <DressCodePage
      currentPage={currentPage}
    />
  );
}

export default App
