/* eslint-disable react/display-name */
import React from 'react';
import Proptypes from 'prop-types';

// Styled components
import { TabContainer, StyledTab, SelectedTab } from './styles';

// components

export const Tabs = React.memo(({ setTab, tabs, selectedTab }) => {
  const handleClick = (e, tab) => setTab(tab.id);
  return (
    <TabContainer>
      {tabs.map((tab) =>
        tab.id === selectedTab ? (
          <SelectedTab onClick={(e) => handleClick(e, tab)} key={tab.id}>
            {tab.label}
          </SelectedTab>
        ) : (
          <StyledTab onClick={(e) => handleClick(e, tab)} key={tab.id}>
            {tab.label}
          </StyledTab>
        ),
      )}
    </TabContainer>
  );
});

Tabs.propTypes = {
  setTab: Proptypes.func.isRequired,
  tabs: Proptypes.array.isRequired,
  selectedTab: Proptypes.number.isRequired,
}

export default Tabs;
