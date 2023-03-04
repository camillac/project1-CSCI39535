import './css/Homepage.css';
import stardewvalleylogo from './img/StardewValleySign.png'

import { useNavigate } from "react-router-dom";

function Homepage() {

  let navigate = useNavigate();
  const locations = () =>{
    let path = '/locations';
    navigate(path);
  }

  const farm = () =>{
    let path = '/farm';
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
        <h1 className='welcome'>Welcome To</h1>
        <img class="logo" src={stardewvalleylogo}/>
        <input type="button" name="locations" value="Locations" onClick={locations} class="button"/>
        <input type="button" name="shops" value="Shops" onClick={shops} class="button"/>
        <input type="button" name="attractions" value="Attractions" onClick={attractions} class="button"/>
      </center>
    </div>
  );
}

export default Homepage;
