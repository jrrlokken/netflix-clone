import { useEffect, useState } from "react";
import { firebaseDatabase } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import * as loadingActionTypes from "../../actions/LoadingActionTypes";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const { title, movieType, onMovieSelected } = props;
  const leafRoot = "movies";
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies(movieType);
  }, []);

  const fetchMovies = (movieType) => {
    dispatch({ type: loadingActionTypes.SHOW_LOADING });
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on("value", (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        setMovies(() => movies);
        dispatch({ type: loadingActionTypes.HIDE_LOADING });
      }
    });
  };

  const onMovieClicked = (movie) => {
    onMovieSelected(movie);
  };

  return (
    <div class="row">
      <h2>{title}</h2>
      <div class="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => onMovieClicked(movie)}
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
