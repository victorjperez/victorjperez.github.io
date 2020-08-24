import React, { useEffect, useState } from 'react';
import format from "date-fns/format";
// Components
import Header from './components/header'
import Intro from './components/intro'
import MainPage from "./components/mainPage";
// Helpers
import apiCall from "./helpers/apiCall";
import { InformationContext } from './helpers/informationContext'
import './App.scss';
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
  },[person])
  return (
    <div className="App">
      <Header />
      {loadedData ? (
        <InformationContext.Provider value={person}>
          <Intro />
          <MainPage />
        </InformationContext.Provider>
      ) : (
        ""
      )}
      <footer>
        © {format(new Date(), 'yyyy')} Victor J Perez III. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
