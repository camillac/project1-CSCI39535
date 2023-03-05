//import './Attractions.css';
import beach from './img/Beach.png'
import mines from './img/Mines.png'
import spa from './img/Spa.png'

import Card from './Card';

const beachDesc = `Pelican Beach is located just below Pelican Town. Enjoy the calming sounds of
the ocean, collect seashells, and take a walk on the boardwalk! Don't forget to check out the fish shop
and try your hand at fishing! Pelican Beach is known for its vast variety of saltwater fish. In Summer,
the Luau and Dance of the Moonlight Jellies festivals are held on the beach. In Winter, the Night Market
is held on the pier from the 15th to the 17th. Don't miss out on this beautiful ocean escape!`

const minesDesc = `If you're travelling to Stardew Valley, you must visit the mines at least once in your life! Visitors will
mine ore and rocks, fight off monsters, and find hidden treasure chests! This unique attraction is perfect for energetic kids
or competetive folks! There are 120 different floors in the mines so make sure to pack extra food for your trip. There are
elevators that will carry you back to the top, so no need to worry about getting trapped! Be sure to visit the Adventure's
Guild to purchase equipment and souvenirs!`

const spaDesc = `The spa is the perfect place to unwind when you travel to Stardew Valley. Located north of the mountains near
the Railroad, the spa is a relaxing getaway from the rest of the town. Enjoy a steaming hot soak in the rejuvinating mountain springs!
The baths are known to have revitalizing properties and many patrons of report feeling healthier and
more energized after standing still in the water for only a couple of minutes. Some of the local townsfolk visit the spa from time to
time, so don't be afraid to say hi!`


function Attractions() {
  return (
    <center>
      <div className="main">
        <div className='header' style={{marginBottom: '3%'}}>
          <h1 style={{marginTop:'20px' }}>Attractions</h1>
          <h3 style={{marginTop:'10px', fontSize: '2vw' }}>Must-See Attractions to Visit When You Book Your Ticket To Stardew Valley!</h3>
        </div>
        <div className="boxes">
          <Card img={beach} title={"Pelican Beach"} description={beachDesc} />
          <Card img={mines} title={"The Mines"} description={minesDesc} />
          <Card img={spa} title={"The Spa"} description={spaDesc} />
        </div>
      </div>
    </center>
  );
}

export default Attractions;
