import styled from 'styled-components';
import { PageWrapper } from '../../../styles/container.style';

const FilteringContainer = styled.div`
  height: 30rem;
  width: 100%;
  background-color: #cdf0ff;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
`;

const FilteringBanner = styled(PageWrapper)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-weight: bold;
    margin-bottom: 5rem;
    color: #333333;
  }
`;

const SelectContainer = styled.div`
  .ant-select {
    margin-right: 2rem;
  }

  .ant-btn {
    background-color: #0fb2f2;
    border-color: #0fb2f2;
    color: #fff;
  }
`;

export const style = {
  FilteringContainer,
  FilteringBanner,
  SelectContainer,
};
