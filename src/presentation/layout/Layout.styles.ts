import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
