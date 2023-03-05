import './App.css';

import Homepage from './components/Homepage';
import Intro from './components/Intro';
import Locations from './components/Locations';
import Attractions from './components/Attractions';
import Shops from './components/Shops';

import { Routes, Route, Outlet, useNavigate} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Layout />}>
          <Route path="intro" element={<Intro />} />
          <Route path="locations" element={<Locations />} />
          <Route path="shops" element={<Shops />} />
          <Route path="attractions" element={<Attractions />} />


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>    </div>
  );
}

function Layout() {

  let navigate = useNavigate();
  const home = () =>{
    let path = '/';
    navigate(path);
  }

  const intro = () =>{
    let path = '/intro';
    navigate(path);
  }

  const locations = () =>{
    let path = '/locations';
    navigate(path);
  }

  const shops = () =>{
    let path = '/shops';
    navigate(path);
  }

  const attractions = () =>{
    let path = '/attractions';
    navigate(path);
  }
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <center>
        <nav>
        <input type="button" name="home" value="Home" onClick={home} className="button"/>
        <input type="button" name="intro" value="Intro" onClick={intro} className="button"/>
        <input type="button" name="locations" value="Locations" onClick={locations} className="button"/>
        <input type="button" name="shops" value="Shops" onClick={shops} className="button"/>
        <input type="button" name="attractions" value="Attractions" onClick={attractions} className="button"/>
        </nav>
      </center>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {

  let navigate = useNavigate();
  const home = () =>{
    let path = '/';
    navigate(path);
  }

  return (
      <div className="main">
        <h1 style={{marginTop:'20px' }}>Uh Oh! Page Not Found!</h1>
        <input type="button" name="home" value="Oops!" onClick={home} className="button"/>
      </div>
  );
}
