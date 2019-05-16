import React, {PureComponent} from "react"
import {Marker} from "react-map-gl"

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;



export default class Pin extends PureComponent {

  handleClick() {
    const { quest, markerClick } = this.props
    markerClick(quest)
  }
  
  render() {
    const {
      quest,
      size = 20,
      color = "#d00"
    } = this.props;
    const style = {
      backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        outline: "none",
        padding: 0,
        appearance: "none",
    }
    return (
      <Marker
        latitude={quest.location.lat}
        longitude={quest.location.lng}
        
      >
        <button
          style={style}
          onClick={this.handleClick}
        >
          <svg
            height={size}
            viewBox="0 0 24 24"
            style={{
              fill: color,
              stroke: "none"
            }}
          >
            <path d={ICON} />
          </svg>
        </button>
      </Marker>
    );
  }
}
