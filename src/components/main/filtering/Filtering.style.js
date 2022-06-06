import styled from 'styled-components';
import { PageWrapper } from '../../../styles/container.style';

const FilteringContainer = styled.div`
  height: 30rem;
  width: 100%;
  background-color: #39a0ed;
  margin-bottom: 2rem;
`;

const FilteringBanner = styled(PageWrapper)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    font-weight: bold;
    color: #fefefe;
    margin-bottom: 5rem;
  }
`;

const SelectContainer = styled.div`
  .ant-select {
    margin-right: 2rem;
  }
`;

export const style = {
  FilteringContainer,
  FilteringBanner,
  SelectContainer,
};
