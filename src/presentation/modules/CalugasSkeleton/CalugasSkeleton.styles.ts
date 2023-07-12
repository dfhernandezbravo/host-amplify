import styled from '@emotion/styled';

type CalugasProps = {
  index: number;
};

export const CalugasContainer = styled.section`
  display: flex;
  height: fit-content;
  width: 100%;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SkeletonContainer = styled.div<CalugasProps>`
  overflow: hidden;
  height: 290px;
  border-radius: 8px;
  width: ${(props) => (props.index === 2 || props.index === 3 ? '49%' : '24%')};
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    width: ${(props) =>
      props.index === 2 || props.index === 3 ? '100%' : '49%'};
  }
`;
