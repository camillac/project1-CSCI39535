import './css/Intro.css';

import logo from './img/StardewValleyLogo.png'


function Intro() {

  return (
    <div className="main">
      <img className="stardew" src={logo} alt="logo"/>
      <div className="about">
        <h1 style={{marginBottom: '3%'}}>Welcome To Stardew Valley!</h1>
        <p style={{marginBottom: '3%'}}>
          Stardew Valley is one of the hottest new travel destinations this year! Stardew Valley is a small country
          getaway, home to beautiful forests and mountain areas. Escape the confines of our modern corporate world
          to have some peace of mind in a new environment. Enjoy the relaxation of rustic farmlife and the peace and
          quiet of the great outdoors!
        </p>

        <p style={{marginBottom: '3%'}}>
          At Stardew Valley, you'll have free access to a farmhouse and be able to build your own home! All
          visitors are provided hand-me-down tools and a few coins to start their adventure, so you can leave your
          bags at home! Raise animals, grow crops, start an orchard, craft useful machines, and more! You'll have plenty of space
          to create the farm of your dreams.
        </p>

        <p style={{marginBottom: '3%'}}>Become part of the local community. With over 30 other townsfolk living in Stardew Valley,
        you won't have a problem finding new friends! Help rebuild the local community center and give back to the community!
        Stardew Valley is a great location for people who are looking to give back to the world and make a difference.
        Take part in seasonal festivals such as the luau, haunted maze, and feast of the winter star!</p>

        <p style={{marginBottom: '1%'}}>
          {"What are you waiting for? Book your tickets "}

          <a style={{color: '#5f1001'}} href="https://store.steampowered.com/app/413150/Stardew_Valley/" target="_blank" rel="noreferrer">today!</a>
        </p>
      </div>
    </div>
  );
}

export default Intro;
