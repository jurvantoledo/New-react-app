import React from "react";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";
import LikeButton from "./components/LikeButton";
import ArticleList from "./components/ArticleList";
import ArticleCard from "./components/ArticleCard";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <Title title="My Title" />
        </h1>
      </header>
      <body>
        <p>
          <LikeCounter />
        </p>
        <p>
          <LikeButton />
        </p>
        <p>
          <ArticleCard />
          <ArticleList />
        </p>
      </body>
    </div>
  );
}

export default App;
