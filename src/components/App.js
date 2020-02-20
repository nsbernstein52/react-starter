import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      moviesArr: [],
      currMovie: null,
      text: ''
    };

    this.changeCurrMovie = this.changeCurrMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  changeCurrMovie(movieIndex) {
    this.setState({ currMovie: moviesArr[movieIndex] })
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.text}&key=${YOUTUBE_API_KEY}`)
    // fetch(`${this.state.text}`)
    //   .then(res => res.json())
    //   .then(moviesArr => this.setState({ moviesArr: currMovie, currMovie: currMovie.title[0] }))
    console.log(document.body.getElementsByClassName("form-control")[0].value);
    console.log(this.state.text);
  }
  
  render() {
    return(
      <div>
        <div className=".navbar">
          <h3>
          Movie List
          </h3>
        </div>
        <div className="tbd">
        </div>

        <div className=".search-bar">
            <Search
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />
          </div>
          
      
        <div className=".movie-list">
        <tbody>
          <tr key="0" className="singleMovieEntry">
            {moviesArr[0].title}
          </tr>
          <tr key="1" className="singleMovieEntry">
            {moviesArr[1].title}
          </tr>
          <tr key="2" className="singleMovieEntry">
            {moviesArr[2].title}
          </tr>
          <tr key="3" className="singleMovieEntry">
            {moviesArr[3].title}
          </tr>
          <tr key="4" className="singleMovieEntry">
            {moviesArr[4].title}
          </tr>
        </tbody>
        </div>
      </div>
  )}

}

var Search = ({ handleChange, handleClick }) => (
  <div className="search-bar .form-control">
    <input
      className="form-control"
      type="text"
      onChange={handleChange}
    />
    <button className=".search-bar .btn" onClick={handleClick}>
      Go!
      {/* <span className="glyphicon glyphicon-search"></span> */}
    </button>
  </div>
);

var moviesArr = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;
// stuff
// Starter App component - hello there


