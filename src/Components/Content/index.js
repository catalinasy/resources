/* eslint-disable react/display-name */
import React, { useState } from 'react';

// Styled components
import {
  Container,
  TabContainer,
  Title,
  ResourceEligibilityContainer,
  ResourceInformation,
  StyledParagraph,
  DetailedLabel,
  LabelContainer,
  LabelGreen,
  LabelYellow,
} from './styles';

// components
import Resource from '../Resource';
import Tabs from '../Tabs';

// import NavBar from '../NavBar';
import BusinessEligibility from '../BusinessEligibility';

import { thousandsSeparators } from '../../utils/helpers'

export const Content = React.memo(() => {
  const [selectedResource, setSelectedResource] = useState();
  const [selectedTab, setSelectedTab] = useState(1);
  const tabs = [
    {
      id: 1,
      label: 'Eligibility',
    },
    {
      id: 2,
      label: 'Uses',
    },
    {
      id: 3,
      label: 'Questions',
    },
  ];

  return (
    <Container>
      <Resource setSelectedResource={setSelectedResource} selectedResource={selectedResource} />
      <TabContainer>
        <ResourceEligibilityContainer>
        <LabelContainer>
          {console.log(selectedResource)}
  <LabelYellow>{selectedResource?.resourcetype?.ds_name}</LabelYellow>
  <LabelGreen>{selectedResource?.resourcescope?.ds_name}</LabelGreen>
        </LabelContainer>
          <Title>{selectedResource?.ds_name || 'Selected Resource Name'}</Title>
          <ResourceInformation>
            <StyledParagraph>
              <DetailedLabel>Issued: </DetailedLabel> {selectedResource?.dt_start},
              <DetailedLabel> Expired: </DetailedLabel>
              {selectedResource?.dt_end || 'null'}
            </StyledParagraph>
            <StyledParagraph>
              <DetailedLabel>desitionTime:</DetailedLabel> {selectedResource?.nr_timedecision}{' '}
            </StyledParagraph>
            <StyledParagraph>
              <DetailedLabel>Amount: </DetailedLabel>${thousandsSeparators(selectedResource?.nr_amountmin) || 0} - $
              {thousandsSeparators(selectedResource?.nr_amountmax)}
            </StyledParagraph>
            <StyledParagraph>
              <DetailedLabel>Tax Layability:</DetailedLabel>
              {selectedResource?.nr_taxliability || 'null'}
            </StyledParagraph>
            <StyledParagraph>
              <DetailedLabel>Loan Details:</DetailedLabel>
            </StyledParagraph>
            <StyledParagraph>
              <DetailedLabel>Loan Amount: </DetailedLabel>up to ${thousandsSeparators(selectedResource?.nr_amountmax)}
            </StyledParagraph>
            <StyledParagraph>
              <DetailedLabel>Term: </DetailedLabel>
            </StyledParagraph>
            <StyledParagraph>
              <DetailedLabel>Notes: </DetailedLabel>
            </StyledParagraph>
            <StyledParagraph>{selectedResource?.ds_description}</StyledParagraph>
          </ResourceInformation>
        </ResourceEligibilityContainer>
        <Tabs setTab={setSelectedTab} tabs={tabs} selectedTab={selectedTab} />
        {selectedTab === 1 && <BusinessEligibility selectedResource={selectedResource} />}
        {selectedTab === 2 && 'Uses'}
        {selectedTab === 3 && 'Questions'}
      </TabContainer>
    </Container>
  );
});

export default Content;
