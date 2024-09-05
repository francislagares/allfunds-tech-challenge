import styled from 'styled-components';

export const StyledFavoriteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const FilledHeartIcon = styled.svg`
  fill: #ef4444; /* Color when favorite */
  stroke: none;
`;

export const OutlinedHeartIcon = styled.svg`
  fill: none;
  stroke: gray; /* Color for non-favorite */
  stroke-width: 1; /* Single-line stroke width */
`;
