import styled from 'styled-components';

const BaseContainer = styled.div`
  overflow: hidden;
  display: block;
`;

interface SkeletonContainerProps {
  $w?: number;
  $h?: number;
  $m?: string;
  $b?: string;
}

export const SkeletonContainer = styled(BaseContainer)<SkeletonContainerProps>`
  width: ${(props) => `${props.$w}px` || '100px'};
  height: ${(props) => `${props.$h}px` || '100px'};
  margin: ${(props) => props.$m || '0px'};
  border: ${(props) => props.$b || 'none'};
`;

export const Box = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;
