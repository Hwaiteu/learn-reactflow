import styled from 'styled-components';

type Path = {
  fill?: string;
};

export const Path = styled.path`
  fill: ${(props) => props.fill ?? '#fff'};
  stroke: #00000080;
  stroke-width: 2;
`;
