import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./styles.css";

//input
const anime = {
  action: [
    {
      name: "  Attack on Titan ",
      rating: "imdb 9.0/10",
      link: "https://www.youtube.com/watch?v=MGRm4IzK1SQ"
    },
    {
      name: " My Hero Academia ",
      rating: "imdb 8.4/10",
      link: "https://youtu.be/EPVkcwyLQQ8"
    },
    {
      name: " Vinland Saga ",
      rating: "imdb 8.8/10",
      link: "https://www.youtube.com/watch?v=f8JrZ7Q_p-8s"
    }
  ],
  movies: [
    {
      name: " Spirited Away ",
      rating: "imdb 8.6/10",
      link: "https://www.youtube.com/watch?v=f8JrZ7Q_p-8"
    },
    {
      name: " Your Name ",
      rating: "imdb 8.4/10",
      link: "https://youtu.be/s0wTdCQoc2k"
    },
    {
      name: " Ghost in the Shell ",
      rating: "imdb 8.0/10",
      link: "https://www.youtube.com/watch?v=SvBVDibOrgs"
    }
  ],

  supernatural: [
    {
      name: " Demon Slayer: Kimetsu no Yaiba ",
      rating: "imdb 8.7/10",
      link: "https://www.youtube.com/watch?v=VQGCKyvzIM4"
    },
    {
      name: "  Death Note ",
      rating: "imdb 9.0/10",
      link: "https://www.youtube.com/watch?v=YKJyP8L6QEss"
    },
    {
      name: " Jujutsu Kaisen ",
      rating: "imdb 8.7/10",
      link: "https://www.youtube.com/watch?v=YKJyP8L6QEs"
    },
    {
      name: "  Fullmetal Alchemist: Brotherhood ",
      rating: "imdb 9.1/10",
      link: "https://youtu.be/-GoNo0DGroU"
    }
  ]
};
var buttonStyle = {
  cursor: "pointer",
  background: "white",
  borderRadius: "0.5rem",
  padding: "0.5rem 1.2rem 0.5rem 1.2rem",
  boxShadow: "0 1px 10px rgba(146,161,176,.15)",
  border: "none",
  marginLeft: "1rem",
  marginTop: "1rem"
};

var listStyle = {
  listStyle: "none",
  padding: "1rem",
  boxShadow: "0rem 0.2rem 0.2rem #2563EB",
  width: "80%",
  margin: "1rem 1rem",
  borderRadius: "0.5rem",
  background: "white"
};
var player = {
  padding: "1rem",
  marginLeft: "auto",
  marginRight: "auto"
};

var fontLarge = {
  fontSize: "larger"
};

var fontSmall = {
  fontSize: "smaller"
};
var Brand = {
  textAlign: "left",
  fontSize: "1.25rem"
};
var footer = {
  backgroundColor: "#2563EB",
  color: "white",
  padding: "2.85rem",
  textAlign: "center",
  borderTopRightRadius: "1rem",
  boxShadow: "0 1px 25px #E5E7EB",
  margin: "6rem auto 0rem auto"
};

//processing
export default function App() {
  const [selectedGenre, setGenre] = useState("action");

  function onClickHandler(genre) {
    setGenre(genre);
  }

  //output
  return (
    <div className="App">
      <nav>
        <div style={Brand}>Anime recommender</div>
      </nav>

      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <h1 style={{ margin: "2rem" }}>What to watch?</h1>

        <div>
          {
            //Objects.keys
            Object.keys(anime).map((genre) => (
              <button style={buttonStyle} onClick={() => onClickHandler(genre)}>
                <span>{genre}</span>
              </button>
            ))
          }
        </div>

        <div style={{ textAlign: "left", marginTop: "2rem" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {anime[selectedGenre].map((genre) => (
              <li style={listStyle}>
                <div style={fontLarge}>
                  {genre.name}
                  <div style={fontSmall}>{genre.rating}</div>

                  <ReactPlayer
                    width="18rem"
                    height="12rem"
                    style={player}
                    url={genre.link}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer style={footer}>Made with ❤️ by Abhishek</footer>
    </div>
  );
}
