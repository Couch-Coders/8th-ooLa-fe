import React from 'react';
import { Tabs } from 'antd';
import StudyInfo from '../studyInfo/StudyInfo.component';
import StudyMembers from '../studyMembers/StudyMembers.component';
import SharingLink from '../shringLink/SharingLink.component';
import Comments from '../comments/Comments.component';
import { TabsContainer } from './StudyDetailsContent.style';

const StudyDetailContent = () => {
  return (
    <TabsContainer>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="스터디 정보" key="1">
          <StudyInfo />
        </Tabs.TabPane>
        <Tabs.TabPane tab="스터디 멤버" key="2">
          <StudyMembers />
        </Tabs.TabPane>
        <Tabs.TabPane tab="공유 로그" key="3">
          <SharingLink />
        </Tabs.TabPane>
      </Tabs>
    </TabsContainer>
  );
};
export default StudyDetailContent;
