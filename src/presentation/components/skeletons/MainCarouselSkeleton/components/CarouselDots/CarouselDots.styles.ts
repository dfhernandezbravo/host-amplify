import styled from 'styled-components';
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
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${(props) => (props.index === 3 ? '1.9px solid #cc1515' : 'none')};
`;

export const InnerDot = styled.div<DotsProps>`
  border: none;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => (props.index === 3 ? '#cc1515' : '#aeaeae')};
`;
