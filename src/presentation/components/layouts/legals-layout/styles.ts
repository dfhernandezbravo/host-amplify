import styled, { css } from 'styled-components';

export const LegalsLayoutContainer = styled.div<{
  fontSize: string;
  isNegative: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  padding: 1rem;

  font-size: ${({ fontSize }) => fontSize};

  & > div {
    border-width: 1px;
    ${({ isNegative }) =>
      isNegative &&
      css`
        border-color: black;
        h2 > button {
          border-color: black;
        }
      `}
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  & > aside {
    @media (min-width: 1280px) {
      width: max-content;
    }

    @media (min-width: 1536px) {
      width: fit-content;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      position: sticky;
      top: 10rem;
      height: fit-content;
    }
  }

  & > div {
    background-color: white;
    border-radius: 0.375rem;
    padding: 0.5rem;
    font-size: inherit;

    @media (min-width: 1280px) {
      width: 100%;
    }

    @media (min-width: 1536px) {
      max-width: 80rem;
    }
  }
`;

export const SideBarWrapper = styled.div<{
  isNegative: boolean;
}>`
  background-color: white;
  border-radius: 0.375rem;
  height: fit-content;
  padding: 0.5rem 0;
  border: 1px solid transparent;

  ${({ isNegative }) =>
    isNegative &&
    css`
      border-color: black;
    `}
`;

export const LinkLabel = styled.div<{ isNegative: boolean; isActive: boolean }>`
  font-size: 1em;
  padding: 0.75rem 1rem;
  border-bottom-width: 1px;
  font-weight: 600;
  border-left-width: 4px;

  ${({ isActive, isNegative }) =>
    isActive &&
    css`
      color: ${isNegative ? 'white' : '#7f1d1d'};
      background-color: ${isNegative ? 'black' : '#fee2e2'};
      border-left-color: ${isNegative ? 'white' : '#7f1d1d'};
    `}
`;
