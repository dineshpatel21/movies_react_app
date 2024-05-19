import React, { useEffect, useState } from "react";
import Movies from "./screens/Movies";
import Select from "react-select";
import { movies } from "./screens/moviesList";

const App = () => {
  const [language, setLanguage] = useState(null);
  const [country, setCountry] = useState(null);
  const [moviegenres, setMovieGenres] = useState(null);
  const [LanguageArray, setLanguageArray] = useState([]);
  const [CountryArray, setCountryArray] = useState([]);
  const [MovieGenresArray, setMovieGenresArray] = useState([]);
  const [moviesList, setMoviesList] = useState(movies);

  useEffect(() => {
    let language = [];
    let country = [];
    let moviesGenres = [];
    movies.map((item) => {
      item.movielanguages.map((it, idx) => {
        if (!language.includes(it)) {
          language.push(it);
        }
      });
    });
    let newLanguage = language.map((item, index) => {
      return { value: item, label: item };
    });
    setLanguageArray(newLanguage);
    // console.log("lanagauge : ", newLanguage);

    movies.map((item) => {
      item.moviecountries.map((it, idx) => {
        if (!country.includes(it)) {
          country.push(it);
        }
      });
    });
    let newCountry = country.map((item, index) => {
      return { value: item, label: item };
    });
    setCountryArray(newCountry);

    movies.map((item) => {
      item.moviegenres.map((it, idx) => {
        if (!moviesGenres.includes(it)) {
          moviesGenres.push(it);
        }
      });
    });
    let newMovieGenres = moviesGenres.map((item, index) => {
      return { value: item, label: item };
    });
    setMovieGenresArray(newMovieGenres);
    // console.log("lanagauge : ", newLanguage);
  }, []);

  useEffect(() => {
    if (language != null) {
      let newLanguage = language.map((item, inded) => {
        return item.value;
      });

      const filterMoviesByLanguage = (movies, languages) => {
        return movies.filter((movie) => {
          return movie.movielanguages.some((lang) => languages.includes(lang));
        });
      };

      let filteredMovies = filterMoviesByLanguage(movies, newLanguage);
      console.log("Movie Languages:", filteredMovies);
      setMoviesList(filteredMovies);
    }
  }, [language]);

  useEffect(() => {
    if (country != null) {
      let newCountry = country.map((item, inded) => {
        return item.value;
      });
      const filterMoviesByLanguage = (movies, countrys) => {
        return movies.filter((movie) => {
          return movie.moviecountries.some((lang) => countrys.includes(lang));
        });
      };
      let filteredCountry = filterMoviesByLanguage(movies, newCountry);
      setMoviesList(filteredCountry);
    }
  }, [country]);

  useEffect(() => {
    if (moviegenres != null) {
      let newmoviegenres = moviegenres.map((item, inded) => {
        return item.value;
      });
      const filterMoviesByLanguage = (movies, moviegenres) => {
        return movies.filter((movie) => {
          return movie.moviegenres.some((genres) =>
            moviegenres.includes(genres)
          );
        });
      };
      let filterednewmoviegenres = filterMoviesByLanguage(
        movies,
        newmoviegenres
      );
      setMoviesList(filterednewmoviegenres);
    }
  }, [moviegenres]);

  return (
    <div>
      <p style={{ marginLeft: "1vw", fontSize: 20, fontWeight: "bold" }}>
        Filter by
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20,
          marginLeft: "1vw",
        }}
      >
        <div style={{ width: 300 }}>
          <Select
            options={LanguageArray}
            defaultValue={language}
            placeholder="Select Language"
            onChange={setLanguage}
            isMulti
            isSearchable
            noOptionsMessage={() => "Language not found"}
          />
        </div>
        <div style={{ width: 300, marginRight: "5vw", marginLeft: "5vw" }}>
          <Select
            options={CountryArray}
            defaultValue={country}
            placeholder="Select Country"
            onChange={setCountry}
            isMulti
            isSearchable
            noOptionsMessage={() => "Country not found"}
          />
        </div>
        <div style={{ width: 300 }}>
          <Select
            defaultValue={moviegenres}
            options={MovieGenresArray}
            onChange={setMovieGenres}
            isMulti
            isSearchable
            placeholder="Select Genres"
            noOptionsMessage={() => "Genres not found"}
          />
        </div>
      </div>
      <Movies data={moviesList.length === 0 ? movies : moviesList} />
    </div>
  );
};

export default App;
