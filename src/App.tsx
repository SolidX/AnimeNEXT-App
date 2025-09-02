import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HoursPage from './pages/HoursPage';
import MapsPage from './pages/MapsPage';
import SchedulePage from './pages/SchedulePage';
import LocationsPage from './pages/LocationsPage';
import ShuttlesPage from './pages/ShuttlesPage';
import ExhibitorsListPage from './pages/ExhibitorsListPage';
import ConductPolicyPage from './pages/ConductPolicyPage';
import CosplayPropsPolicyPage from './pages/CosplayPropsPolicyPage';
import BagPolicyPage from './pages/BagPolicyPage';
import DressCodePage from './pages/DressCodePage';
import artists from './assets/artists.json'
import dealers from './assets/dealers.json'

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  function navHandler(nextPage : string) {
    setCurrentPage(nextPage);
  }

  return (
    <BrowserRouter>
      <Navigation currentPage={currentPage} navHandler={navHandler} />
      <Routes>
        <Route index={true} element={<HomePage title="Welcome to AnimeNEXT 2023!" />} />
        <Route path="/hours" element={<HoursPage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/location" element={<LocationsPage />} />
        <Route path="/shuttles" element={<ShuttlesPage />} />
        <Route path="/artistsalley" element={<ExhibitorsListPage title="Artists Alley" exhibitors={artists} />} />
        <Route path="/dealersroom" element={<ExhibitorsListPage title="Dealers' Room" exhibitors={dealers} />} />
        <Route path="/policies/conduct" element={<ConductPolicyPage />} />
        <Route path="/policies/dresscode" element={<DressCodePage />} />
        <Route path="/policies/bags" element={<BagPolicyPage />} />
        <Route path="/policies/cosplayprops" element={<CosplayPropsPolicyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
