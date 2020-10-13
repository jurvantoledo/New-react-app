// src/components/ArticleCard.js
import React from "react";

export default function ArticleCard(props) {
  return (
    <div className="Article">
      <p>{props.id}</p>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}