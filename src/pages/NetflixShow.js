import React from 'react';
import Row from '../components/row/Row';
import api from '../api/api';
import Banner from '../components/banner/Banner';
import Nav from '../components/nav/Nav';

const NetflixShow = () => {
  return (
    <div>
  <Nav /> 
   <Banner />
   <Row title="NETFLIX ORIGINAL " fetchUrl={api.fetchNetflixOriginals }    isLargeRow />
   <Row title="TRENDING NOW " fetchUrl={api.fetchTrending }   />
   <Row title="Top RATED " fetchUrl={api.fetchTopRated }   />
   <Row title="ACION MOVIES  " fetchUrl={api.fetchActionMovies }   />
   <Row title="COMEDY MOVIES " fetchUrl={api.fetchComedyMovies }   />
   <Row title="HORROR MOVIES" fetchUrl={api.fetchHorrorMovies }   />
   <Row title="ROMANCE MOVIES " fetchUrl={api.fetchRomanceMovies }   />
   <Row title="DOCUMENTARIES " fetchUrl={api.fetchDocumentaries }   />

    </div>
  )
}

export default NetflixShow