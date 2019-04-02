import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
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
          <Map
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;