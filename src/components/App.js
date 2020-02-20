import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      moviesArr: [],
      movieList: [],
      moviesListStr: '',
      currMovie: null,
      text: '',

      userMoviesArr: [],
      userMoviesListStr: '',
      currUserMovie: null,
      userText: '',

      movieDisplayMode: "library",
      movieDisplayArr: [],
    };

    // this.changeCurrMovie = this.changeCurrMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);

  }

  // changeCurrMovie(movieIndex) {
  //   this.setState({ currMovie: moviesArr[movieIndex] })
  // }
// 

  // var VideoList = ({ videos, changeMainVideo }) => (
  //   <div className="video-list">
  //     {videos.map((video, idx) => (
  //       <VideoListEntry
  //         video={video}
  //         changeMainVideo={changeMainVideo}
  //         idx={idx}
  //       />
  //     ))}
  //   </div>
  // );
  
  // var moviesDisplayList = ({ movies, displayMode }) => (
  //   <div className="movies-display-list">
  //     {movies.map((movie, movieIndex) => (
  //       <MovieListEntry
  //         movie={movie}
  //         index={index}
  //         source={source}
  //       />
  //     ))}
  //   </div>
  // );

  var VideoListEntry = ({ video, idx, changeMainVideo }) => (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div onClick={() => changeMainVideo(idx)} className="video-list-entry-title">{video.snippet.title}</div>
        <div className="video-list-entry-detail">{video.snippet.description}</div>
      </div>
    </div>
  );

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

  handleUserChange(event) {
    this.setState({ userText: event.target.value });
  }

  // currUserMovie: null,
  // userMoviesArr: [],
  // userText: '',
  handleUserClick(event) {
    event.preventDefault();
    // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.text}&key=${YOUTUBE_API_KEY}`)
    // fetch(`${this.state.text}`)
    //   .then(res => res.json())
    //   .then(moviesArr => this.setState({ moviesArr: currMovie, currMovie: currMovie.title[0] }))
    // console.log(document.body.getElementsByClassName("form-control")[0].value);
    let newTitle = this.state.userText;
    // console.log(newTitle);
    // console.log(this.state.userText);
    let userMoviesTempArr = [];
    // for (let i = 0; i < userMoviesTempArr.length; i++) {
    //   let currTitle = userMoviesTempArr[i].title;
    //   // console.log(currTitle);
    //   if (currTitle !== newTitle) {
    //     // matchStrsArr.push(moviesArr[i].title);
        userMoviesTempArr.push(newTitle);
        console.log(userMoviesTempArr);
        // {this.state.movieList}.push(moviesArr[i].title);
    //   }
    // }
    if (userMoviesTempArr.length === 0) {
      userMoviesTempArr.push("None");
    }
    console.log(userMoviesTempArr);
    // {this.state.movieList}.push = matchStrArr.slice();
    this.setState({ userMoviesArr: userMoviesTempArr});
    // return matchStrsArr;
    let moviesListStrTemp = userMoviesTempArr.join(", ")
    console.log(moviesListStrTemp)
    this.setState({ userMoviesListStr: moviesListStrTemp});
    this.setState({ currentLivaMode: false});
    if (!this.state.currentLivaMode) {

    }
  }

  render() {
    return(
      <div>
        <div className=".navbar">
          <h3>
          Movie List
          </h3>
        </div>

        <div className="library-based-movies">

          <div className=".search-bar">
            Search
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
        </div>

        <div>
          .
        </div>
      
        <div className=".movie-list">
        <tbody>
          Current Movie Library
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

        <div>
          .
        </div>
        <div>
          .
        </div>

        <div className="user-added-movies">

          {/* user added */}
          <div className=".search-bar">
            Add your favorite movies (comma separated)
              <AddMovie
                handleUserChange={this.handleUserChange}
                handleUserClick={this.handleUserClick}
              />
          </div>
          <div className=".search-results">
          My added movies results: 
          {/* console.log({this.state.text}) */}
          </div>
          <div>
            {this.state.userMoviesListStr}
          </div>

          <div>
            .
          </div>

          {this.state.movies.map((movie, index, source) => {
          if (movie.source === source) {
            return (
              <MovieEntry
                title={movie.title}
              />
            )
          }
          return null;
        })}




        </div> 

        </tbody>
        </div>
      </div>
  )}

}

var AddMovie = ({ handleUserChange, handleUserClick }) => (
  <div className="search-bar .form-control">
    <input
      className="form-control"
      type="text"
      onChange={handleUserChange}
    />
    <button className=".search-bar .btn" onClick={handleUserClick}>
      Add!
    </button>
  </div>
);


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
  {title: 'Mean Girls', library: true},
  {title: 'Hackers', library: true},
  {title: 'The Grey', library: true},
  {title: 'The Sunshine', library: true},
  {title: 'Ex Machina', library: true},
];

export default App;
// stuff
// Starter App component - hello there


