import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Collapse } from "bootstrap";
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
import Offline from './components/Offline';
import { ExhibitorListTypes } from './components/components';

function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  
  function navHandler(nextPage : string) {
    Collapse.getOrCreateInstance("#siteNavigation").hide(); //Hide nav menu on mobile
    setCurrentPage(nextPage);    
  }

  function updateNetworkStatus() {
    setIsOnline(navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    window.addEventListener('load', updateNetworkStatus);

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
      window.removeEventListener('load', updateNetworkStatus);
    }
  }, [navigator.onLine]);

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
        <Route path="/artistsalley" element={<ExhibitorsListPage listType={ExhibitorListTypes.Artists} title="Artists Alley" />} />
        <Route path="/dealersroom" element={<ExhibitorsListPage listType={ExhibitorListTypes.Dealers} title="Dealers' Room" />} />
        <Route path="/policies/conduct" element={<ConductPolicyPage />} />
        <Route path="/policies/dresscode" element={<DressCodePage />} />
        <Route path="/policies/bags" element={<BagPolicyPage />} />
        <Route path="/policies/cosplayprops" element={<CosplayPropsPolicyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {
        //BUG: Checking the network status using the navigator API doesn't work in Firefox Desktop for some reason in both the orignal and refactored version of the app
        isOnline !== true && <Offline />
      }
    </BrowserRouter>
  );
}

export default App
