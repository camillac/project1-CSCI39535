import './css/Shops.css';
import pierre from './img/Pierres_Shop.png'
import saloon from './img/Saloon.png'
import jojamart from './img/Jojamart.png'

import Card from './Card';

const pierreDesc = `Pierre's General Store is your one-stop-shop in Stardew Valley! Pierre sells various seeds, saplings,
fertilizer, ingredients and other useful items for all your farming needs.
As well as selling goods, Pierre also buys foraged items, crops, artisan goods, cooked dishes, and animal products! Be sure
to exchange some of your materials there instead of waiting overnight for shipping! Pierre's General Store is normally
open most days at 9am so make sure to stop by! You never know when you might need a little something extra on your trip!`

const saloonDesc = `Grab a drink and a bite to eat at the local saloon! The Stardrop Saloon is owned by Gus, and is
located in the center of Pelican Town. It's a meeting place for many villagers, and hosts a variety of entertainment,
including fully playable arcade machines, a jukebox, and a Joja Cola soda machine. Make sure to check out the
"Dish of the Day" which rotates day by day! At night, many of the local townsfolk come to drink and dance! The saloon
is the highlight of nightlife in Stardew Valley!`

const jojamartDesc = `On the rightmost part of town is JojaMart, a chain grocery store! JojaMart is owned
by "Joja Corporation" and it is managed by Morris, who also handles customer service. They have goods for all your general needs,
especially if you need something late at night! JojaMart is one of the only stores in town open until 11pm! Many people recommend
purchasing a JojaMart membership if you plan on staying in Stardew Valley for an longer period of time. The lines are never long
and it's quick and easy! With a JojaMart membership, the prices are unbeatable!`

function Shops() {
  return (
      <div className="main">
        <div className='header' style={{marginBottom: '3%'}}>
          <h1 style={{marginTop:'20px' }}>Shops</h1>
          <h3 style={{marginTop:'10px', fontSize: '2vw' }}>Be Sure to Check Out These Shops in Stardew Valley!</h3>
        </div>
        <div className="boxes">
          <Card img={pierre} title={"Pierre's General Store"} description={pierreDesc} class="noborder"/>
          <Card img={saloon} title={"Stardrop Saloon"} description={saloonDesc} class="noborder"/>
          <Card img={jojamart} title={"JojaMart"} description={jojamartDesc} class="noborder"/>
        </div>
      </div>
  );
}

export default Shops;
