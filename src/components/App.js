import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      movie: null,
      text: ''
    };

    this.changeCurrMovie = this.changeCurrMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  changeCurrMovie(movieIndex) {
    this.setState({ movie: movies[movieIndex] })
  }

  handleChange(elem) {
    this.setState({ text: elem.target.value });
  }

  handleSubmit() {
    // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.text}&key=${YOUTUBE_API_KEY}`)
    fetch(`${this.state.text}`)
    //   .then(res => res.json())
      .then(data => this.setState({ movies: movie, movie: movie.title[0] }))
  }

  
  
  render() {
    return(
      <div>
        <div className="header">
          <h3>
          Movie List
          </h3>
        </div>
        <div className="tbd">
        </div>

        <div className="col-md-6 offset-md-3">
            <Search
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
          
      
        <div className="movieList">
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
        </div>
      </div>
  )}

}

var Search = ({ handleChange, handleSubmit }) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={handleChange}
    />
    <button className="btn hidden-sm-down" onClick={handleSubmit}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

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


