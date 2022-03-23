import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => {
  return (
    <>
    <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" style={{width:"50px", height:"50px", color:"#8dc63f"}}/>
    <p className="pin-text">{text}</p>
  </div>
    </>
  )
}

export default LocationPin