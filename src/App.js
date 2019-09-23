import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genre={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
  // constructor(props){
  //   super(props);
  //   console.log("constructor")
  // }
  // state={
  //   count: 0
  // };
  // componentDidMount(){
  //   console.log("component rendered")
  // }
  // componentDidUpdate(){
  //   console.log("component updated!")
  // }
  // render(){
  //   console.log("rendering!")
  //   return (
  //   <div>
  //     <h1>The number is: {this.state.count}</h1>
  //     <button onClick={this.add}>Add</button>
  //     <button onClick={this.minus}>Minus</button>
  //     </div>
  //   );
  // }
  // add = () => {
  //   this.setState(current => ({count: current.count +1}))};
  // minus = () => {this.setState(current => ({count: current.count -1}))};
}

export default App;
