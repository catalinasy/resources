import React from 'react';
import { Card, Title, Text, SelectedCard } from './styles';

const ResourceCard = ({ name, description, onClick, isSelected }) => {
  return (
    <>
    {isSelected ? <SelectedCard onClick={onClick}>
      <Title>{name}</Title>
      <Text>{description}</Text>
    </SelectedCard> :
    <Card onClick={onClick}>
      <Title>{name}</Title>
      <Text>{description}</Text>
  </Card> }
    </>
  );
};

export default ResourceCard;
