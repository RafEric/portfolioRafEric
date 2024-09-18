import React from 'react';
import { useMyContext } from '../context/MyContext';

const MyComponent = () => {
  const { value } = useMyContext(); // Utilisation du contexte

  return <div>{value}</div>;
};

export default MyComponent;
