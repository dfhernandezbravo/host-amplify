import styled from 'styled-components';

const BaseContainer = styled.div`
  overflow: hidden;
  display: block;
`;

interface SkeletonContainerProps {
  $w?: string;
  $h?: string;
  $m?: string;
  $b?: string;
}

export const SkeletonContainer = styled(BaseContainer)<SkeletonContainerProps>`
  width: ${(props) => `${props.$w}` || '100px'};
  height: ${(props) => `${props.$h}` || '100px'};
  margin: ${(props) => props.$m || '0px'};
  border: ${(props) => props.$b || 'none'};
`;

export const Box = styled.div<{ $width?: string }>`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width || 'none'};
`;
