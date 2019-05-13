import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

var pageTitle = "Add Article";

class addArticle extends Component {
  render() {
    return (
      <div className="page-content">
        <TitleSection title={pageTitle} />
        <section className="add-article-section">
          <div className="holder">
            <div className="add-article">
              <Editor
                // editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default addArticle;
