/* eslint-disable react/display-name */
import React from 'react';

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

export default Tabs;
