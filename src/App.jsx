import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async () => {
    if (!query) return;

    setLoading(true);

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=d75d3373&s=${query}`
    );

    const data = await res.json();
    setMovies(data.Search || []);

    setLoading(false);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (!query) {
        setMovies([]);
        return;
      }
      searchMovies();

    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Movie Discovery</h1>

      <input
        value={query}
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
        }}
      />

      {loading && <p>Loading...</p>}

      {!loading && movies.length === 0 && query && (
        <p>No movies found.</p>
      )}


      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 200px)",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img
              src={
                movie.Poster && movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              width="200"
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
