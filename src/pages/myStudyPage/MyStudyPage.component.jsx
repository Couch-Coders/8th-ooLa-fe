import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import { style } from './MyStudyPage.style';
import TopBanner from '../../components/common/layout/topBanner/TopBanner.component';
import CreationStudyList from '../../components/myStudy/myStudyList/CreationStudyList.component';
import BeforeStartStudyList from '../../components/myStudy/myStudyList/BeforeStartStudyList.component';
import StartStudyList from '../../components/myStudy/myStudyList/StartStudyList.component';
import CompletionStudyList from '../../components/myStudy/myStudyList/CompletionStudyList.component';
import LikeStudyList from '../../components/myStudy/myStudyList/LikeStudyList.component';

const MyStudyPage = () => {
  const [activeTab, setActiveTab] = useState('1');
  const { TabPane } = Tabs;
  const { active } = useParams();

  useEffect(() => {
    if (active === 'like') {
      setActiveTab('5');
    } else {
      setActiveTab('1');
    }
  }, [active]);

  const activeTabHandler = key => {
    setActiveTab(key);
  };

  return (
    <>
      <TopBanner title="마이스터디" info="ooLa와 함께하는 스터디" />
      <TabsContainer>
        <Tabs activeKey={activeTab} onTabClick={activeTabHandler}>
          <TabPane tab="진행스터디" key="1">
            <StartStudyList />
          </TabPane>
          <TabPane tab="내가만든스터디" key="2">
            <CreationStudyList />
          </TabPane>
          <TabPane tab="진행예정스터디" key="3">
            <BeforeStartStudyList />
          </TabPane>
          <TabPane tab="완료스터디" key="4">
            <CompletionStudyList />
          </TabPane>
          <TabPane tab="관심스터디" key="5">
            <LikeStudyList />
          </TabPane>
        </Tabs>
      </TabsContainer>
    </>
  );
};

export default MyStudyPage;

const { TabsContainer } = style;
