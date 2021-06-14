import { useState } from "react";
import Nav from "../nav/Nav";
import Header from "../header/Header";
import Row from "../row/Row";
import Detail from "../detail/Detail";

function Home() {
  const [selectedMovie, setSelectedMovie] = useState();
  const selectMovie = (movie) => {
    setSelectedMovie(() => movie);
  };
  const closeDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="app">
        {/* Nav */}
        <Nav />
        {/* End Nav */}
        {/* Header */}
        <Header />
        {/* Header */}
        <Row
          title="Netflix Originals"
          movieType="netflix-originals"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Trending Now"
          movieType="trending-now"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Top Rated"
          movieType="top-rated"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Action Movies"
          movieType="action-movies"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Horror Movies"
          movieType="horror-movies"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Romance Movies"
          movieType="romance-movies"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Documentaries Movies"
          movieType="documentaries-movies"
          onMovieSelected={selectMovie}
        />
      </div>
      {selectedMovie && (
        <Detail movie={selectedMovie} onDetailClosed={closeDetail} />
      )}
    </>
  );
}

export default Home;
