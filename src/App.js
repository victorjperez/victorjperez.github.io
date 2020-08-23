import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import apiCall from "./helpers/apiCall";
const InformationContext = React.createContext({});
function App() {
  const [person, setPerson] = useState({})
  const [loadedData, setLoadedData] = useState({})
  useEffect(() =>{
     apiCall().then(
       (person) => {
         console.log(person);
         setPerson(person)
         setLoadedData(true)
       },
       (error) => {
         console.log(error);
       }
     );
    console.log(person)
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {loadedData ? 
        
        (<InformationContext.Provider value={person}>
          <p>{JSON.stringify(person)}</p>
        </InformationContext.Provider>) : ""}
      </header>
    </div>
  );
}

export default App;
