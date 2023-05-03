import React, { useState, useEffect } from 'react';

export const useCoords = (num = 0) => {
  const [state, setState] = useState({ latitude: null, longitude: null });

  const [location, setLocation] = useState({
    south: { lat: null, lon: null },
    north: { lat: null, lon: null },
    east: { lat: null, lon: null },
    west: { lat: null, lon: null },
  });

  const onSuccess = ({ coords: { latitude, longitude } }) => {
    setState({ latitude, longitude });
  };

  const radius = () => {
    const { latitude, longitude } = state;
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    setLocation({
      south: { lat: lat + num * 0.01, lon: longitude },
      north: { lat: lat - num * 0.01, lon: longitude },
      east: { lat: latitude, lon: lon + num * 0.01 },
      west: { lat: latitude, lon: lon - num * 0.01 },
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  useEffect(() => {
    if (state.latitude !== null && num !== 0) radius();
  }, [state]);

  return { state, location };
};
