
import './App.css';
import Axios from "axios";
import { useEffect , useState } from 'react';
function App() {
  const [name,setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const [generatedExcuse,setGeneratedExcuse] = useState("");
const fetchData = ()=> {
  Axios.get(`https://api.agify.io/?name=${name}`).then((res)=> {
    setPredictedAge(res.data);
  });
};
const fetchExcuse = (excuse) => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
  setGeneratedExcuse(res.data[0].excuse);
  });
};
  return (
    <div className = "App">
    <div>
    <input placeholder='Ex. samir..' onChange={(event)=> {setName(event.target.value)}}/>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name :  {predictedAge?.name}</h1>
      <h1>Predicted Age:  {predictedAge?.age}</h1>
      <h1>Count:  {predictedAge?.count}</h1>
    </div>
  
    <div>
    <h1>Create an Excuse</h1>
    <button onClick={()=>fetchExcuse("party")}>Party</button>
    <button onClick={()=>fetchExcuse("family")}>Family</button>
    <button onClick={()=>fetchExcuse("office")}>Office</button>
    <p>{generatedExcuse}</p>
    </div>
    </div>
  );
}

export default App;
