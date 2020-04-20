import styled from 'styled-components';

export const Table = styled.div`
  width: 90%;
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
  border-bottom: gray solid 1px;
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
`;

export const Img = styled.img`
  width: 1.5rem;
  margin: 1rem;
`;
