import React from 'react';

var pageTitle = 'Title';

// class TitleSection extends Component {

//     render() {
//         return (
//             <section className="navigation">
//                 <div className="holder">
//                     <h1 className="title">{pageTitle}</h1>
//                 </div>
//             </section>
//         );
//     };
// };

function TitleSection(props) {
    const {title} = props;
    return (
        <section className="navigation">
            <div className="holder">
                <h1 className="title">{title}</h1>
            </div>
        </section>
    );
}
  
export default TitleSection;