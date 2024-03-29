import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {useState} from "react";
import {getCenter} from "geolib";
import {LocationMarkerIcon} from "@heroicons/react/outline";

const Map = ({searchResults}) => {
    const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = searchResults.map((result) => ({
        longitude: result.lng,
        latitude: result.lat
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude:center.longitude,
        zoom: 8,
        width: "100%",
        height: "100%"
    });

    const handleClick = (result) => {
        setSelectedLocation(result);
    }

    const handleClose = () => {
        setSelectedLocation({});
    }

    return (
        <div className={"h-full w-full"}>
            <ReactMapGL
                mapStyle={"mapbox://styles/sikal/cksyoup5k97vb18lj5x11qbhg"}
                mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
                {...viewport}
                onViewportChange={(v) => setViewport(v)}
            >
                {searchResults.map(({lng, lat, title}, index) => (
                    <div key={index}>
                        <Marker className={"h-1 w-8"} longitude={lng} latitude={lat} offsetLeft={-20} offsetTop={-10}>
                            <LocationMarkerIcon onClick={() => handleClick({lng, lat})} className={"text-red-600 cursor-pointer animate-bounce"} />
                        </Marker>

                        {selectedLocation.lng === lng && <Popup onClose={handleClose} closeOnClick={true} longitude={lng} latitude={lat}>
                            <div className={"flex items-center"}>{title}</div>
                        </Popup>}
                    </div>
                ))}
            </ReactMapGL>
        </div>
    );
};

export default Map;