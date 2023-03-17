import React from "react";
import Map from '../../assets/map.png'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GMapView(){
  return (
    // Important! Always set the container height explicitly
    <div>
      <img style={{width:'200px', height:'200px', objectFit: 'cover', borderRadius: '10px'}} src={Map}></img>
    </div>
  );
}