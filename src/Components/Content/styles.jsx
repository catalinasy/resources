import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 94vh;
  overflow: hidden;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const Title = styled.p`
  font-weight: 900;
  font-size: 1.2rem;
`;

export const ResourceEligibilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const ResourceInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  margin: 0.4rem;
  padding: 0;
`;

export const DetailedLabel = styled.span`
  font-weight: bold;
`;

export const LabelContainer = styled.div`
  width: 7rem;
  display: flex;
  justify-content: space-between;

`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  margin: 0.5rem 0;
  border-radius: 15%;
  padding: 0.5rem;
`;

export const LabelGreen = styled(Label)`
  background: #94F74C;
  
`

export const LabelYellow = styled(Label)`
  background: #FAE64D;
`;
