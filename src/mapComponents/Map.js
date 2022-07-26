import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { Component } from 'react';

class Map extends Component{
    render(){
        
        return(
        <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
            <TileLayer 
            minZoom={1}
            maxZoom={5}
            continuousWorld={false}
            noWrap={true}
            url="./maps2/{z}/{x}/{y}.png"/>
            <Marker position={[51.505, -0.09]} draggable={true}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        );
    }
}

export default Map;