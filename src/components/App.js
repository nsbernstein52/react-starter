import React from 'react';

class App extends React.Component {
  render(){
    return(
    <div>
      <table 
        id="movieList"
      >
        <h3>
        Movie List
        </h3>
      </table>
      <table id="ovies" >
        <tr key="0" className="singleMovieEntry">
          {movies[0].title}
        </tr>
        <tr key="1" className="singleMovieEntry">
          {movies[1].title}
        </tr>
        <tr key="2" className="singleMovieEntry">
          {movies[2].title}
        </tr>
        <tr key="3" className="singleMovieEntry">
          {movies[3].title}
        </tr>
        <tr key="4" className="singleMovieEntry">
          {movies[4].title}
        </tr>
      </table>
    </div>
  )}
}

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;
// stuff
// Starter App component - hello there
