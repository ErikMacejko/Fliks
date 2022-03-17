import React, { useState, useEffect } from "react";
import Row from "./Components/Row";
import requests from "./request";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import './css/App.css';


function App( {} ) {

    return (

    <div className="app"> 
      <Navbar/>
      <Banner />
      <Row title= "TRENDING NOW" 
      fetchUrl={requests.fetchTrending}
        isLargedRow={true} />
      <Row title= "TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title= "ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title= "COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title= "HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title= "DOCUMENTAIRES" fetchUrl={requests.fetchDocumentaires} />
    </div>  

  )
  
}

export default App;
