import React from 'react';
import PropTypes from 'prop-types';
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

ResourceCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default ResourceCard;
