import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { 
  PageMap,
  Aside,
  Header,
  Footer,
  CreateOrphanage,
} from './styles';
import mapMarkerImg from '../../assets/map-marker.svg';

const OrphonagesMap: React.FC = () => {
  return (
    <PageMap>
      <Aside>
        <Header>
          <img src={mapMarkerImg} alt="map"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estao esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>Ubá</strong>
          <span>Minas Gerais</span>

          <CreateOrphanage to="">
            <FiPlus size={32} color="#FFF"/>
          </CreateOrphanage>
        </Footer>
      </Aside>

      <MapContainer 
        center={[-21.2159207,-42.8889974]}
        zoom={17.25}
        style={{
          width: '100%',
          height: '100%',
          zIndex: 5,
        }}
      >
        {/* <TileLayer 
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </MapContainer>
    </PageMap>
  );
}

export default OrphonagesMap;