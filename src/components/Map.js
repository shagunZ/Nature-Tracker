import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"
import Infobox from "./Infobox"
import { useState } from "react"
const Map = (eventData,center,zoom) => {
    const [info,setInfo] = useState(null)

    const markers = eventData.map(ev=>{
        if(ev.categories[0].id===8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=>setInfo({id:ev.id,title:ev.title})}/>
        }
        return null
    })


  return (
    <div className="map">
        <GoogleMapReact
        bootstrapURLKeys={{
            key:'AIzaSyCi-jnQg3SVbWhQSrOXqlqUSLa9w0CLkSI'}}
            defaultCenter={ center }
            defaultZoom={ zoom }
        >
            {markers}
        </GoogleMapReact>
        {Infobox && <Infobox info={info} />}
    </div>
  )
}

Map.defaultProps={
    center:{
        lat: 42.3265,
        lng:-122.8756
    },
    zoom:6
}

export default Map