import styled from "styled-components";

export const Card = styled.div`
  background: #f8fafc;
  border: #d3d7d8 solid 1px;
  padding: 1rem;
  cursor: pointer;
`;

export const SelectedCard = styled(Card)`
  background: #e8f4f7;
  border: solid 2px #20536f;
`;

export const Title = styled.p`
  font-weight: block;
`;

export const Text = styled.p`
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  line-height: 2;
`;
