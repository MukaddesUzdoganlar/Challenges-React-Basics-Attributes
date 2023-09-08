import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">Sample Article Title</h2>
      <label htmlFor="articleInput">Article Input:</label>
      <input id="articleInput" type="text" />
      <div className="App"></div>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Main_Page"
      >
        Read More
      </a>
    </article>
  );
}
