import styled from "styled-components";

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px #d2d5d6 solid;
  margin: 1rem;
  font-weight: bolder;
  font-size: 16px;
`;

export const StyledTab = styled.div`
  padding: 1rem 1.5rem;
`;

export const SelectedTab = styled(StyledTab)`
  color: #63ace4;
  border-bottom: 2px solid #63ace4;
`;
