import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      moviesArr: [],
      movieList: [],
      moviesListStr: '',
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
    // console.log(document.body.getElementsByClassName("form-control")[0].value);
    let currText = this.state.text;
    // console.log(currText);
    // console.log(this.state.text);
    let matchStrsArr = [];
    // let noMatch = true;
    for (let i = 0; i < moviesArr.length; i++) {
      let currTitle = moviesArr[i].title;
      // console.log(currTitle);
      if (currTitle.indexOf(currText) !== -1) {
        // matchStrsArr.push(moviesArr[i].title);
        matchStrsArr.push(currTitle);
        // {this.state.movieList}.push(moviesArr[i].title);
      }
    }
    if (matchStrsArr.length === 0) {
      matchStrsArr.push("None");
    }
    console.log(matchStrsArr);
    // {this.state.movieList}.push = matchStrArr.slice();
    this.setState({ movieList: matchStrsArr});
    // return matchStrsArr;
    let moviesListStrTemp = matchStrsArr.join(", ")
    console.log(moviesListStrTemp)
    this.setState({ moviesListStr: moviesListStrTemp});

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
        <div className=".search-results">
        Search results: 
        {/* console.log({this.state.text}) */}
        </div>
        <div>
          {this.state.moviesListStr}
        </div>
        <div>
          .
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
  {title: 'The Sunshine'},
  {title: 'Ex Machina'},
];

export default App;
// stuff
// Starter App component - hello there


