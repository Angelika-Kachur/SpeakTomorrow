import React, { Component } from 'react';
// import './App.css';
// import Header from './components/Header'
// import GoogleMapReact from 'google-map-react';

// import products from './data.js';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;


// var name = 'Toma';

// class App extends Component {
//   state = {
//     selectedPairs: []
//   }

//   handleCheckbox = product => event => {
//     // const {  } = event.target;

//     this.setState(({ selectedPairs }) => {
//       return {
//         selectedPairs: ['prd-avon']
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="App">

//         <Header />
  
//         <div className="main">
//           <ul className="productsList">
//             {products.map( product => (
//               <li key={product} className="productItem">
//                 <input type="checkbox" id={product}></input>
//                 <label htmlFor={product}>{product.toUpperCase()}</label>
//               </li>
//               ))}
//           </ul>

//           <section className="contacts-section">
//             <div className="holder">
//               <h1>Contacts</h1>
//               <p>Lorem ipsum lorem ipsum</p>
//               <div className="map">
//                 <div style={{ height: '100vh', width: '100%' }}>
//                   <GoogleMapReact
//                     bootstrapURLKeys={{ key: 'AIzaSyDUJuF_ykF8mTbyx9af6TL_eRM3ET3WFvs' }}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                   >
//                     <AnyReactComponent
//                       lat={59.955413}
//                       lng={30.337844}
//                       text={'Kreyser Avrora'}
//                     />
//                   </GoogleMapReact>
//                 </div>


//                 <p className="text-primary">.text-primary</p>

//                 <p>
//                 Hello {name}
//                 </p>

//                 <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 >
//                 Learn
//                 </a>

                
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDUJuF_ykF8mTbyx9af6TL_eRM3ET3WFvs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;