import React, { Component } from 'react';
import TitleSection from '../components/TitleSection';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


var pageTitle = 'Add Article';

class addArticle extends Component {

    render() {
        return (
            <div className="page-content">
                <TitleSection title={pageTitle}/>

                <Editor
                    // editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    };
};
  
export default addArticle;