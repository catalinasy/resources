import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Store
import resourcesStore from '../../state/resources';

// Components
import ResourceCard from '../Card';

import { ResoruceList } from './styles';

// index = container
// container - dispatch // card - render
const Resource = ({ setSelectedResource }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resourcesStore.actions.fetchAllResources.request());
  }, []);

  const { resources } = useSelector(resourcesStore.selector.selectAll);
  const [resourceSelected, setResourceSelected] = useState(false);

  useEffect(() => {
    if (!resourceSelected) setSelectedResource(resources[0]);
  }, [resources, setSelectedResource]);

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
          />
        );
      })}
    </ResoruceList>
  );
};

export default Resource;
