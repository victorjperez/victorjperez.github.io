import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
// Components
import Header from './components/header'
import Intro from './components/intro'
// Helpers
import apiCall from "./helpers/apiCall";
import { InformationContext } from './helpers/informationContext'
function App() {
  const [person, setPerson] = useState({})
  const [loadedData, setLoadedData] = useState(false)
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
      <Header />
      {loadedData ? (
        <InformationContext.Provider value={person}>
          <Intro />
          <p>{JSON.stringify(person)}</p>
        </InformationContext.Provider>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
