import React from "react";

export default function awesomeAnimals() {
  return (
    <div>
      {[
        "Awesome level 1: Chicken",
        "Awesome level 2: Sloth",
        "Awesome level 3: Porcupine",
        "Awesome level 4: Killer whale",
        "Awesome level 5: Velociraptor",
      ].map((animal) => {
        return <p>{animal}</p>;
      })}
    </div>
  );
}
