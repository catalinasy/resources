import React from 'react';
import { Card, Title, Text } from './styles';

const ResourceCard = ({ name, description, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Title>{name}</Title>
      <Text>{description}</Text>
    </Card>
  );
};

export default ResourceCard;
