import React from 'react';
import { useSelector } from 'react-redux';
import * as styled from './detailsAirComponentsStyles';

const DetailsAirComponents = () => {
  const { data } = useSelector((state) => state.airPollution);
  const { components } = data;

  return (
    <>
      <styled.ComponentsTitle>
        Pollutant components: (μg/m3)
      </styled.ComponentsTitle>
      <styled.ComponentsContainer>
        <styled.Component>
          <styled.ComponentLabel>
            Carbon monoxide (CO)
          </styled.ComponentLabel>
          <styled.ComponentValue>
            {components.co}
          </styled.ComponentValue>
        </styled.Component>
        <styled.Component>
          <styled.ComponentLabel>
            Nitrogen monoxide (NO)
          </styled.ComponentLabel>
          <styled.ComponentValue>
            {components.no}
          </styled.ComponentValue>
        </styled.Component>
        <styled.Component>
          <styled.ComponentLabel>
            Nitrogen dioxide (NO2)
          </styled.ComponentLabel>
          <styled.ComponentLabel>
            {components.no2}
          </styled.ComponentLabel>
        </styled.Component>
        <styled.Component>
          <styled.ComponentLabel>Ozone (O3)</styled.ComponentLabel>
          <styled.ComponentValue>
            {components.o3}
          </styled.ComponentValue>
        </styled.Component>
        <styled.Component>
          <styled.ComponentLabel>
            Sulphur dioxide (SO2)
          </styled.ComponentLabel>
          <styled.ComponentValue>
            {components.so2}
          </styled.ComponentValue>
        </styled.Component>
        <styled.Component>
          <styled.ComponentLabel>Ammonia (NH3)</styled.ComponentLabel>
          <styled.ComponentValue>
            {components.nh3}
          </styled.ComponentValue>
        </styled.Component>
        <styled.Component>
          <styled.ComponentLabel>
            Suspended Particles (Pm2.5)
          </styled.ComponentLabel>
          <styled.ComponentValue>
            {components.pm2_5}
          </styled.ComponentValue>
        </styled.Component>
        <styled.Component>
          <styled.ComponentLabel>
            Suspended Particles (Pm10)
          </styled.ComponentLabel>
          <styled.ComponentValue>
            {components.pm10}
          </styled.ComponentValue>
        </styled.Component>
      </styled.ComponentsContainer>
    </>
  );
};

export default DetailsAirComponents;
