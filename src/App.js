
import './App.css';
import Movie from './Composants/Movie';
import Rows from './Composants/Rows';
import requests from './request';
import Navbar from './Composants/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Movie/>
      <Rows title="NETFLIX Originals" firstligne={true} fetchURL={requests.fetchNetflixOriginals}/>  
      <Rows title="NETFLIX Originals"  fetchURL={requests.fetchNetflixOriginals}/>   
      <Rows title="TOP RATED MOVIES" fetchURL={requests.fetchTopRated}/>
      <Rows title="TRENDING MOVIES" fetchURL={requests.fetchTrending}/>
      <Rows title="ACTION MOVIES" fetchURL={requests.fetchActionMovies}/>
      <Rows title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies}/>
      <Rows title="DOCUMENTAIRE" fetchURL={requests.fetchDocumentaires}/>
      <Rows title="HOORROR MOVIES" fetchURL={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
