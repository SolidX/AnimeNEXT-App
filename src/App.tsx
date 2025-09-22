import { useState, useEffect } from 'react';
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
import Offline from './components/Offline';
import type { ExhibitorDetails, RawSchedule } from './components/components';

function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [artists, setArtists] = useState<ExhibitorDetails[]>([]);
  const [dealers, setDealers] = useState<ExhibitorDetails[]>([]);
  const [schedule, setSchedule] = useState<RawSchedule | null>(null);

  function navHandler(nextPage : string) {
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

  useEffect(() => {
      fetch('artists.json').then<ExhibitorDetails[], never>((response) => {
        if (response.ok) {
            return response.json();
        }

        //TODO: Error handling
        throw new Error(`Failed to get artist data. Status: ${response.status}`);
      }).then((data) => {
        setArtists(data);
      });

      fetch('dealers.json').then<ExhibitorDetails[], never>((response) => {
        if (response.ok) {
            return response.json();
        }

        //TODO: Error handling
        throw new Error(`Failed to get dealer data. Status: ${response.status}`);
      }).then((data) => {
        setDealers(data);
      });

      fetch('schedule.json').then<RawSchedule, never>((response) => {
        if (response.ok) {
            return response.json();
        }

        //TODO: Error handling
        throw new Error(`Failed to get dealer data. Status: ${response.status}`);
      }).then((data) => {
        setSchedule(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navigation currentPage={currentPage} navHandler={navHandler} />
      <Routes>
        <Route index={true} element={<HomePage title="Welcome to AnimeNEXT 2023!" />} />
        <Route path="/hours" element={<HoursPage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/schedule" element={<SchedulePage schedule={schedule} />} />
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
      {
        //BUG: Checking the network status using the navigator API doesn't work in Firefox Desktop for some reason in both the orignal and refactored version of the app
        isOnline !== true && <Offline />
      }
    </BrowserRouter>
  );
}

export default App
