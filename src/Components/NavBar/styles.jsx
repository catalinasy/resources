import styled from 'styled-components';

export const Nav = styled.div`
  margin: 0;
  height: 100vh;
  background: #20536F;
  display: flex;
  flex-direction: column;
  width: 5vw;
`;

export const Img = styled.img`
  width: 2rem;
  margin: 1rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;
`;

export const SelectedImageContainer = styled(ImgContainer)`
  background: #469CB6;
`;
