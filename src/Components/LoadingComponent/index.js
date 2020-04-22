import React from 'react';
import { Spinner, LoadingContainer } from './styles';

const LoadingComponent = ({ name, description, onClick, isSelected }) => {
  return (
    <LoadingContainer>
        <Spinner/>
    </LoadingContainer>
  );
};

export default LoadingComponent;
