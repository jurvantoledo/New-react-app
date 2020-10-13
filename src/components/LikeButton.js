import React, { useState } from "react";

export default function LikeButton() {
  const [likeBut, set_likeBut] = useState(false);

  const LikedThis = () => {
    if (likeBut === false) {
      set_likeBut(true);
      console.log("I got liked");
    } else {
      set_likeBut(false);
      console.log("I got unliked");
    }
  };

  return (
    <div>
      <button onClick={LikedThis}>
        {likeBut === true ? "Liked" : "Unliked"}
      </button>
    </div>
  );
}
