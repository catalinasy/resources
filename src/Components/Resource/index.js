import React, { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Proptypes from 'prop-types';

// Store
import resourcesStore from '../../state/resources';

// Components
import ResourceCard from '../Card';

import { ResoruceList } from './styles';

const Resource = ({ setSelectedResource, selectedResource }) => {

  const { resources } = useSelector(resourcesStore.selector.selectAll);
  const [resourceSelected, setResourceSelected] = useState(false);

  useEffect(() => {
    if (!resourceSelected) setSelectedResource(resources[0]);
  }, [resources, setSelectedResource, resourceSelected]);

  const handleClick = useCallback(
    (event, resource) => {
      setResourceSelected(true);
      setSelectedResource(resource);
    },
    [setSelectedResource],
  );

  return (
    <ResoruceList>
      {resources.map((r) => {
        return (
          <ResourceCard
            onClick={(e) => handleClick(e, r)}
            key={r.idResource}
            name={r.ds_name}
            description={r.ds_description}
            isSelected={r.idResource === selectedResource?.idResource}
          />
        );
      })}
    </ResoruceList>
  );
};

Resource.propTypes = {
  setSelectedResource: Proptypes.func.isRequired,
  selectedResource: Proptypes.object.isRequired,
}


export default Resource;
