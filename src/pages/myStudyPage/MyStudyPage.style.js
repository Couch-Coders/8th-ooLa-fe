import styled from 'styled-components';

const MyStudyContainer = styled.div`
  height: 100%;
  min-width: 1100px;
`;

const TopBanner = styled.div`
  height: 150px;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fffae6;
  margin-bottom: 30px;
`;

const TabsContainer = styled.div`
  padding: 0 200px;
`;

export const style = { MyStudyContainer, TopBanner, TabsContainer };
