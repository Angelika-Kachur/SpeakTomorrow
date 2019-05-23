import React from "react";

function TitleSection(props) {
  const { title } = props;
  console.log(title);
  return (
    <section className="title-section">
      <div className="holder">
        <h1 className="title">{title}</h1>
      </div>
    </section>
  );
}

export default TitleSection;
