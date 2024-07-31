// domains/location/location.map.jsx
const LocationMap = () => {
    const location = "4299 Mattson Street, Tigard, Oregon, United States";
    const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=-122.7825%2C45.4315%2C-122.7725%2C45.4415&layer=mapnik&marker=45.4365%2C-122.7775`;

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