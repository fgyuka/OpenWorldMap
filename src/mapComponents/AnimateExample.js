import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { useRef } from 'react';
import SetViewOnClick from './SetOnClickView';
import Backdrop from './Backdrop';
import './Backdrop.css';

  
  function AnimateExample() {
    const animateRef = useRef(false)
  
    return (
      <>
        <p>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                animateRef.current = !animateRef.current
              }}
            />
            Animate panning
          </label>
        </p>
        <MapContainer center={[0,0]} zoom={2} scrollWheelZoom={true}>
            <TileLayer 
            minZoom={2}
            maxZoom={5}
            continuousWorld={false}
            noWrap={true}
            url="./maps2/{z}/{x}/{y}.png"/>
            <Marker position={[77.5, 180]} draggable={true}>
                <Popup>
                  Right Up Corner
                </Popup>
            </Marker>
            <Marker position={[-77.5, 180]} draggable={true}>
                <Popup>
                Right Down Corner
                </Popup>
            </Marker>
            <Marker position={[77.5, -180]} draggable={true}>
                <Popup>
                  Left Up Corner
                </Popup>
            </Marker>
            <Marker position={[-77.5, -180]} draggable={true}>
                <Popup>
                Left Down Corner
                </Popup>
            </Marker>
            <SetViewOnClick animateRef={animateRef} />
        </MapContainer>
      </>
    )
  }
  
  export default AnimateExample