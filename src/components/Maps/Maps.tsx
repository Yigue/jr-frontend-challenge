import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

const libraries: ["places"] = ["places"];

interface Props {
  location: {
    lat: number;
    lng: number;
  };
}

const Maps = ({ location }: Props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const containerStyle = {
    width: "100%",
    height: "20rem",
  };

  const position = {
    lat: location.lat,
    lng: location.lng,
  };

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={15}
    >
      <MarkerF 
        position={position}
        title="Ubicación"
      />
    </GoogleMap>
  );
};

export default Maps;
