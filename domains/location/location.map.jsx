// domains/location/location.map.jsx
const LocationMap = () => {
    const lat = 6.409480;
    const lng = 4.091520;
    const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.005}%2C${lat-0.005}%2C${lng+0.005}%2C${lat+0.005}&layer=mapnik&marker=${lat}%2C${lng}`;

    return (
        <div className="map-container">
            <iframe
                className="responsive-iframe"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={mapSrc}
            ></iframe>
        </div>
    );
}

export default LocationMap;