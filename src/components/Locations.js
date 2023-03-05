import './css/Locations.css';
import map from './img/Map.webp'
import farm from './img/StardewValleyFarm.png'
import town from './img/PelicanTown.png'
import mountain from './img/Mountain.png'

import Card from './Card';

const farmDesc = `The farmhouse is where you will stay during your visit to Stardew Valley!
Here, you will be able to grow crops, raise farm animals, and decorate your new home.
Chop trees, break rocks, and cut weeds to expand your farm area! The farmhouse can be renovated
to have multiple expansions, as well as a functional kitchen! Sell crops and materials at the end of the day
to earn money!`

const townDesc = `Pelican Town is a short walk from the farmhouse and is home to many of the villagers of
Stardew Valley! Many community events are hosted in the town center. You can enjoy a nice stroll around town,
visit the museum, have a drink at the Stardrop Saloon, or fish in the local river. Don't forget to forage through
trash cans for any hidden loot! Just be sure to stay out of view of the locals in town!`

const mountainDesc = `Located north of Pelican Town is a large mountainous area. Here, you'll find large mountain lakes
and some local villagers! Robin, the local woodworker, lives in the mountains with her husband, Demetrius, and their two
kids, Sebastian and Maru. Make sure you greet Linus who lives in a tent behind Robin's house. In the spring, the debris to the
cave is cleared and you'll have access to the mines, as well as the Adventure's Guild.`

function Locations() {
  return (
    <div className='main' >
      <div className='header'>
        <h1 style={{marginTop:'20px' }}>Locations</h1>
        <h3 style={{marginTop:'10px', fontSize: '2vw' }}>Explore the Various Locations Stardew Valley Has To Offer!</h3>
        <img className="map" src={map} alt="map"/>
      </div>
      <div>
        <Card img={farm} title={"The Farmhouse"} description={farmDesc} class="border"/>
        <Card img={town} title={"Pelican Town"} description={townDesc} class="border"/>
        <Card img={mountain} title={"The Mountain"} description={mountainDesc} class="border"/>
      </div>
    </div>
  );
}

export default Locations;
