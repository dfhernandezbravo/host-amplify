import styled, { css } from 'styled-components';

export const AccessibilityWrapper = styled.div<{ isNegative: boolean }>`
  padding: 0.75rem;
  height: fit-content;
  border-radius: 0.375rem;
  background-color: white;
  border: 1px solid transparent;

  ${({ isNegative }) =>
    isNegative &&
    css`
      border-color: black;
    `}

  & > h1 {
    font-size: 1.3em;
    font-weight: 700;
    padding-bottom: 0.5rem;
    text-align: center;

    @media (min-width: 1024px) {
      text-align: left;
    }
  }
`;

export const DesktopButtonsWrapper = styled.div`
  display: none;
  gap: 0.5rem;
  justify-content: space-around;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const MobileButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));

  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding-top: 0.75rem;

  @media (min-width: 768px) {
    grid-template-rows: repeat(1, minmax(0, 1fr));
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    display: none;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & span {
      text-align: center;
    }
  }
`;

export const AccessibilityButton = styled.button`
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
