import React, { useState } from "react";
import "./styles.css";

//input
const anime = {
  movies: [
    { name: " Spirited Away ", rating: "imdb 8.6/10" },
    { name: " Your Name ", rating: "imdb 8.4/10" },
    { name: " Ghost in the Shell ", rating: "imdb 8.0/10" }
  ],

  action: [
    { name: "  Attack on Titan ", rating: "imdb 9.0/10" },
    { name: " My Hero Academia ", rating: "imdb 8.4/10" },
    { name: " Vinland Saga ", rating: "imdb 8.8/10" }
  ],

  supernatural: [
    { name: " Demon Slayer: Kimetsu no Yaiba ", rating: "imdb 8.7/10" },
    { name: "  Death Note ", rating: "imdb 9.0/10" },
    { name: " Jujutsu Kaisen ", rating: "imdb 8.7/10" },
    { name: "  Fullmetal Alchemist: Brotherhood ", rating: "imdb 9.1/10" }
  ]
};

var fontLarge = {
  fontSize: "larger"
};
var Brand = {
  textAlign: "left",
  fontSize: "1.25rem"
};
//processing
export default function App() {
  const [selectedGenre, setGenre] = useState("movies");

  function onClickHandler(genre) {
    setGenre(genre);
  }

  //output
  return (
    <div className="App">
      <nav>
        <div style={Brand}>Anime recommender</div>
      </nav>

      <div>
        <h1>What to watch?</h1>
      </div>

      <div>
        {
          //Objects.keys
          Object.keys(anime).map((genre) => (
            <button onClick={() => onClickHandler(genre)}>
              <span>{genre}</span>
            </button>
          ))
        }
      </div>

      <div>
        <ul>
          {anime[selectedGenre].map((genre) => (
            <li>
              <div style={fontLarge}>
                {genre.name}
                <div>{genre.rating}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <footer></footer>
    </div>
  );
}
