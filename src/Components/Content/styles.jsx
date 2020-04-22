import styled from "styled-components";

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
  display: flex;
  justify-content: flex-start;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  margin: 0.5rem 0;
  border-radius: 12%;
  padding: 0.5rem;
`;

export const LabelGreen = styled(Label)`
  background: #94f74c;
  margin-left: 0.5rem;
`;

export const LabelYellow = styled(Label)`
  background: #fae64d;
  margin-right: 0.5rem;
`;
