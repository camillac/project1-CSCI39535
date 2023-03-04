import './App.css';

import Homepage from './components/Homepage';
import Lodging from './components/Lodging';
import Attractions from './components/Attractions';
import Restaurants from './components/Restaurants';

import { Routes, Route, Outlet, Link, useNavigate} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Layout />}>
          <Route path="lodging" element={<Lodging />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="attractions" element={<Attractions />} />


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>    </div>
  );
}
const navStyle = {textDecoration: "none", color: "blue"};
function Layout() {

  let navigate = useNavigate();
  const home = () =>{
    let path = '/';
    navigate(path);
  }

  const lodging = () =>{
    let path = '/lodging';
    navigate(path);
  }

  const restaurants = () =>{
    let path = '/restaurants';
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
      <nav class="nav">
      <input type="button" name="home" value="Home" onClick={home} class="button"/>
      <input type="button" name="lodging" value="Lodging" onClick={lodging} class="button"/>
      <input type="button" name="restaurants" value="Restaurants" onClick={restaurants} class="button"/>
      <input type="button" name="attractions" value="Attractions" onClick={attractions} class="button"/>
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
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
