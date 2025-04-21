import type { NodeProps } from '@xyflow/react';
import { Root, SVG } from './wrapper-shape.style';
import { useSizeSVG } from '../../../hooks/useSizeSVG';
import {
  Children,
  cloneElement,
  isValidElement,
  type JSXElementConstructor,
  type ReactElement,
  type Ref,
  useRef,
} from 'react';
import { HandleAll } from '../../handle-all';
import type { TDataNodeProps } from '../../../types';

type ShapeProps = {
  width: number;
  height: number;

  rx?: number;
  ry?: number;
  r?: number;
  cx?: number;
  cy?: number;
};

type Props = Pick<NodeProps, 'id'> & {
  data: NodeProps['data'] & Omit<TDataNodeProps, 'color'>;
  children: ReactElement<ShapeProps> | ReactElement<ShapeProps>[];
  ref?: Ref<HTMLDivElement>;
};

type CustomElementType = {
  target?: string;
} & JSXElementConstructor<unknown>;

const isCustomElement = (child: ReactElement): child is ReactElement<unknown, CustomElementType> => {
  return typeof child.type === 'object' && 'target' in child.type;
};

const getElementType = (child: ReactElement): string | undefined => {
  if (typeof child.type === 'string') {
    return child.type;
  }

  if (isCustomElement(child)) {
    return child.type.target;
  }

  return;
};

export const WrapperShape = ({ data, children, id, ref }: Props) => {
  const textRef = useRef<SVGTextElement | null>(null);
  const { reactHeight, reactWidth } = useSizeSVG({
    ref: textRef.current,
    width: data.width,
    height: data.height,
  });

  return (
    <Root width={reactWidth} height={reactHeight} ref={ref}>
      <SVG width={reactWidth} height={reactHeight} viewBox={`0 0 ${reactWidth} ${reactHeight}`}>
        {Children.map(children, (child) => {
          if (isValidElement<ShapeProps>(child)) {
            const elementType = getElementType(child);

            const shapeProps: ShapeProps = {
              width: reactWidth,
              height: reactHeight,
              ...(elementType === 'ellipse' && {
                rx: reactWidth / 2,
                ry: reactHeight / 2,
              }),
              ...(elementType && {
                r: Math.min(reactWidth, reactHeight) / 2,
                cx: reactWidth / 2,
                cy: reactHeight / 2,
              }),
            };

            return cloneElement(child, shapeProps);
          }
          return child;
        })}
        <text ref={textRef} fontSize="14" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          {String(data.label)}
        </text>
      </SVG>
      <HandleAll id={id} />
    </Root>
  );
};
