import React from "react";

function TitleSection(props) {
  const { title } = props;
  console.log(title);
  return (
    <div className="title-section">
      <div className="holder">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}

export default TitleSection;
