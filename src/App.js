import './App.css';
import { mapcontainer, TileLayer } from "react-leaflet";

function App() {
  return (
  <mapcontainer centre={[48.8566, 2.3522]} zoom={13}>
    <TileLayer>
      attribu
    </TileLayer>
  </mapcontainer>
  );
}

export default App;
