import styled from '@emotion/styled';

type DotsProps = {
  index: number;
};

export const CarouselDotsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
`;

export const Dot = styled.div<DotsProps>`
  border: none;
  width: ${(props) => (props.index === 0 ? '30px' : '12px')};
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => (props.index === 0 ? '#cc1515' : '#aeaeae')};
`;
