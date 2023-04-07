
import './App.css';
import {User} from './User.js';

function App() {
  const users = [
    { name: "John" , age: 28},
    { name: "Jane", age: 27},
    { name: "Jim", age: 26},
    { name: "Jill", age: 25},
  ];
  const planets = [
  { name: "mars", isGasPlanet : false },
  { name: "earth", isGasPlanet : false },
  { name: "venus", isGasPlanet : false },
  { name: "jupiter", isGasPlanet : true },
  { name: "neptune", isGasPlanet : true },
  { name: "uranus", isGasPlanet : true },
  ];


  return ( 
    <div className = "App">

      {users.map((user,key)=>{
        return <User name= {user.name} age= {user.age} />;
      })}

      {planets.map((planet,key) => {
      if(planet.isGasPlanet)  return <h1>{planet.name}</h1> ;
      })
      }
    </div>
  );
}

export default App;
