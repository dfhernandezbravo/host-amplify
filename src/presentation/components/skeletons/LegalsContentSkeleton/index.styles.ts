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
  width: ${(props) => `${props.$w}` || '100%'};
  height: ${(props) => `${props.$h}` || '100px'};
  margin: ${(props) => props.$m || '0px'};
  border: ${(props) => props.$b || 'none'};
`;

export const Box = styled.div<{ $width?: string }>`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width || '100%'};
`;

type RowProps = {
  justifycontent?: string;
};

export const Row = styled.div<RowProps>`
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifycontent || 'center'};

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
