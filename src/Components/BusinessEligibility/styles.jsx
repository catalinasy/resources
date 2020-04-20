import styled from 'styled-components';

export const Table = styled.div`
  width: 100%;
  margin: 0 1rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 3rem;
  &:nth-child(even) {
    background-color: #dee1e1;
  }
`;

export const HeaderRow = styled(Row)`
  border-bottom: #7F7F7F solid 2px;
  padding-bottom: 0.2rem;
  height: 1.5rem;
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Column)`
  font-weight: bolder;
`;

export const TableHeader = styled(Column)`
  font-weight: bolder;
  align-items: flex-end;
  padding-bottom: 0.2rem;
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Img = styled.img`
  width: 1.5rem;
  margin: 1rem;
`;
