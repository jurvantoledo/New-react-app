import React from "react";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";
import LikeButton from "./components/LikeButton";

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
      </body>
    </div>
  );
}

export default App;
