import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/containers/Button.css';

class MapContainer extends React.Component {
  state = {
    show: false,
  };

  handleClick = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { google } = this.props;
    const { show } = this.state;
    if (show) {
      return (
        <>
          <button
            className="style__button-hide"
            type="button"
            onClick={this.handleClick}
          >
            No Mostrar
          </button>
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            <Marker position={{ lat: 19.4267261, lng: -99.1718706 }} />
          </Map>
        </>
      );
    } else {
      return (
        <button
          className="style__button-show"
          type="button"
          onClick={this.handleClick}
        >
          Mostrar
        </button>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
