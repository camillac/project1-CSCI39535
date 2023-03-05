import './css/Homepage.css';
import stardewvalleylogo from './img/Logo.png'

import { useNavigate } from "react-router-dom";

function Homepage() {

  let navigate = useNavigate();
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
    <div className="content">
      <center>
        <h1 className='welcome'>Your Travel Guide To</h1>
        <img className="logo" src={stardewvalleylogo} alt="logo"/>
        <input type="button" name="intro" value="Intro" onClick={intro} className="button"/>
        <input type="button" name="locations" value="Locations" onClick={locations} className="button"/>
        <input type="button" name="shops" value="Shops" onClick={shops} className="button"/>
        <input type="button" name="attractions" value="Attractions" onClick={attractions} className="button"/>
      </center>
    </div>
  );
}

export default Homepage;
