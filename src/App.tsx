import { useState } from 'react';
import ConductPolicyPage from './pages/ConductPolicyPage';
import BagPolicyPage from './pages/BagPolicyPage';
import CosplayPropsPolicyPage from './pages/CosplayPropsPolicyPage';


function App() {
  const [currentPage, setCurrentPage] = useState("General Conduct Policy");

  //TODO: update currentPage on page click, surprisingly this never worked in the original version
  return (
    <ConductPolicyPage
      currentPage={currentPage}
    />
  );
}

export default App
