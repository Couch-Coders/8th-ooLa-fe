import styled from 'styled-components';

const FilteringContainer = styled.div`
  height: 300px;
  min-width: 1100px;
  background-color: #fffae6;
`;

const FilteringBanner = styled.div`
  padding: 0 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-weight: bold;
    margin-bottom: 50px;
  }
`;

const SelectContainer = styled.div`
  .ant-select {
    margin-right: 20px;
  }
`;

export const style = {
  FilteringContainer,
  FilteringBanner,
  SelectContainer,
};
