import styled from 'styled-components';

type NodeProps = {
  fill?: string;
};

const stroke = `  
  stroke: #00000080;
  stroke-width: 2;
`;

export const Rect = styled.rect<NodeProps>`
  fill: ${(props) => props.fill ?? '#fff'};
  ${stroke}
`;

export const Path = styled.path<NodeProps>`
  fill: ${(props) => props.fill ?? '#fff'};
  ${stroke}
`;

export const Ellipse = styled.ellipse<NodeProps>`
  fill: ${(props) => props.fill ?? '#fff'};
  ${stroke}
`;
