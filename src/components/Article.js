import React from 'react';

function Article(props) {
    const {article} = props;
    console.log(props);
    return (
        <div className="article">
            <h1 className="title">{article.title}</h1>
            <div className="text">{article.text}</div>
        </div>
    );
}
  
export default Article;