import styled from 'styled-components';
import { PageWrapper } from '../../../../styles/container.style';

export const TopBannerContainer = styled.div`
  height: 200px;
  padding: 5.5rem 0;
  background-color: #cdf0ff;
  margin-bottom: 6rem;
`;

export const TopBannerText = styled(PageWrapper)`
  h2 {
    font-size: 2.8rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.8rem;
  }
`;
