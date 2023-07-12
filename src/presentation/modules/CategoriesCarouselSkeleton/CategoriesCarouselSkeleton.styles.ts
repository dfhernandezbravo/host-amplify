import styled from '@emotion/styled';

type CategorySkeletonProps = {
  index?: number;
  isMobile?: boolean;
};

type ButtonProps = {
  right?: boolean;
};

export const Container = styled.div<CategorySkeletonProps>`
  margin: 0 auto;
  width: 100%;
  min-height: 170px;
  background-color: #fff;
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
`;

export const CategorySkeleton = styled.div<CategorySkeletonProps>`
  height: 170px;
  width: ${(props) => (props.isMobile ? '25%' : '12.5%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: ${(props) =>
    props.index && props.index > 3 && props.isMobile
      ? '1px solid #EAEAEA'
      : 'none'};
  border-left: ${(props) => (props.index !== 0 ? '1px solid #EAEAEA' : 'none')};
`;

export const CarouselNavButton = styled.div<ButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 44px;
  outline: none;
  border: none;
  background: hsla(0, 0%, 100%, 1);
  cursor: pointer;
  border-radius: 8px;
  color: #000;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  right: ${(props) => (props.right === true ? '-1rem' : '')};
  left: ${(props) => (props.right !== true ? '-1rem' : '')};

  &:hover {
    background-color: #fff;
  }

  @media (max-width: 768px) {
    width: 14px;
    height: 24px;
    right: ${(props) => (props.right === true ? '0' : '')};

    left: ${(props) => (props.right !== true ? '0' : '')};
  }
`;

export const Icon = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  font-size: 1.5rem;
  font-weight: 100;
`;
