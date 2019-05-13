import React from "react";
import imageBlog1 from "../images/blog-image-1.png";

import firestore from "../firebase";

function Article(props) {
  const { article } = props;
  console.log(props);

  return (
    <div className="article">
      <h1 className="title"> {article.previewTitle} </h1>{" "}
      <div className="image">
        <img src={imageBlog1} alt="" />
      </div>{" "}
      <div className="text"> {article.previewText} </div>{" "}
    </div>
  );
}

export default Article;
