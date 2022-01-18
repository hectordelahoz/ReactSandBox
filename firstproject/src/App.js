import { useState } from 'react';
import './App.css';

function Header(){
  return(
    <>
      <h1>
        MammaDey's Cake
      </h1>
      <h2>
        cakes with love
      </h2>
    </>
  );
}

function Body(){
  return(
    <p>
      Because it is not just about a cake, is about creating moments and good memories.
    </p>
  );
}

function Menu(props){
  return(
    <ul>
      {props.cakes.map((cake) => <li key={cake.id}>{cake.flavor}</li>)}
    </ul>
  );
}

function Footer({year}){
  return(
    <footer>
      open since {year}
    </footer>
  );
}

function Signin(){
  return(
    <p>
      Follow us on instagram to get a discount @mammadeycakes
    </p>
  );
}

function Discount({discout}){
  return(
    <p>
      Thanks for following us, you get {discout} off
    </p>
  )
}

const cakes = [
  "Red Velvet",
  "Tropical Passion",
  "Bride Cake",
  "Colombian flavors"
];

const cakesObject = cakes.map((cake, i) => ({'id': i, 'flavor' : cake}));

function App() {
  const [followingStatus, setFollowingStatus] = useState("not following");
  return(
    <div className="App">
      <Header/>
      <Body/>            
      {followingStatus == "following"? <Discount discout="20%"/>:<Signin/>}
      <Menu cakes={cakesObject}/>
      <button onClick={() => setFollowingStatus("following")}>Follow</button>
      <button onClick={() => setFollowingStatus("not following")}>Unfollow</button>
      <Footer year="2020"/>
    </div>
  )
}

export default App;
