import styled from 'styled-components';

type Size = {
  width: number;
  height: number;
};

export const Root = styled.div<Size>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const SVG = styled.svg<Size>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
