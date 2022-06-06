import React, { Suspense } from 'react';
import { Tabs } from 'antd';
import { style } from './MyStudyPage.style';

const StudyList = React.lazy(() =>
  import('../../components/myStudy/myStudyList/MyStudyList.component'),
);

const MyStudyPage = () => {
  const { TabPane } = Tabs;

  const onChange = key => {
    console.log(key);
  };

  return (
    <MyStudyContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <TopBanner>
          <h2>마이 스터디</h2>
          <span>ooLa와 함께하는 스터디</span>
        </TopBanner>
        <TabsContainer>
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="진행스터디" key="1">
              <StudyList />
            </TabPane>
            <TabPane tab="내가만든스터디" key="2">
              <StudyList />
            </TabPane>
            <TabPane tab="진행예정스터디" key="3">
              <StudyList />
            </TabPane>
            <TabPane tab="완료스터디" key="4">
              <StudyList />
            </TabPane>
            <TabPane tab="관심스터디" key="5">
              <StudyList />
            </TabPane>
          </Tabs>
        </TabsContainer>
      </Suspense>
    </MyStudyContainer>
  );
};

export default MyStudyPage;

const { MyStudyContainer, TopBanner, TabsContainer } = style;
