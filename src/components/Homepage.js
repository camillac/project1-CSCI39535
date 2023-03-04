import './css/Homepage.css';
import stardewvalleylogo from './img/StardewValleySign.png'

import { useNavigate } from "react-router-dom";

function Homepage() {

  let navigate = useNavigate();
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
    <div className="content">
      <center>
        <h1 className='welcome'>Welcome To</h1>
        <img class="logo" src={stardewvalleylogo}/>
        <input type="button" name="lodging" value="Lodging" onClick={lodging} class="button"/>
        <input type="button" name="restaurants" value="Restaurants" onClick={restaurants} class="button"/>
        <input type="button" name="attractions" value="Attractions" onClick={attractions} class="button"/>
      </center>
    </div>
  );
}

export default Homepage;
