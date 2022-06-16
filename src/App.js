import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import Favorites from './pages/Favorites';
import MainNav from './components/layout/nav'

function App() {
  return <div>
    <MainNav/>
  <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
  </div>;
   
  
}

export default App;
