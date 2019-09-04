import React, {Component}from "react"
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '800px',
            height: '800px',
        };
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAcyaMPSML1RKdqR6B-YnHM-9JRpKhC6B4'
})(MapContainer);