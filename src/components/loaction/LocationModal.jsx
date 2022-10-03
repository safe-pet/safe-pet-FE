import styled from "styled-components";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const { kakao } = window;

export const LocationModal = ({ showModal, closeModal, locationValue}) => {
  // 거래장소 props 추가 예정
  const { kakao } = window;

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (!map) return;
    const places = new kakao.maps.services.Places();

    places.keywordSearch(locationValue, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        markers.push({
          position: {
            lat: data[0].y,
            lng: data[0].x,
          },
          content: data[0].place_name,
        });
        bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));
        // }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  }, [map]);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {showModal ? (
        <StyledBackground onClick={closeModal}>
          <StyledModalContainer onClick={(e) => e.stopPropagation()}>
            {
              <Map className="myMap"
                center={{
                  lat: 37.566826,
                  lng: 126.9786567,
                }}
                style={{ width: "500px", height: "500px" }}
                level={3}
                onCreate={setMap}
              >
                {markers.map((marker) => (
                  <MapMarker
                    key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                    position={marker.position}
                    onClick={() => setInfo(marker)}
                  >
                    {info && info.content === marker.content && (
                      <div style={{ color: "#000" }}>{marker.content}</div>
                    )}
                  </MapMarker>
                ))}
              </Map>
            }
          </StyledModalContainer>
        </StyledBackground>
      ) : null}
    </div>
  );
};

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
  cursor: auto;
`;

const StyledModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* width: 400px;
    height: 400px;
    padding: 16px;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgb(71, 181, 255);
    text-align: center; */

  .myMap {
    border-radius: 40px;
    box-shadow: 1px 1px 5px 1px #FFF455;
  }
`;
