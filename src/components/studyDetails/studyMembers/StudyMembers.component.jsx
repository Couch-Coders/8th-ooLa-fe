/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from 'antd';
import StudyMemberItem from '../studyMemberItem/studyMemberItem.component';
import { StudyMemberContainer } from './StudyMembers.style';
import { getStudyMembers } from '../../../lib/apis/main';

const StudyMembers = () => {
  const [members, setMembers] = useState([]);
  const { studyId } = useParams();
  useEffect(() => {
    const fetchStudyMember = async () => {
      const memberArr = await getStudyMembers(studyId);
      setMembers(memberArr);
    };

    fetchStudyMember();
  }, []);

  return (
    <StudyMemberContainer>
      <Row gutter={24}>
        {!!members.length
          ? members.map(member => (
              <StudyMemberItem memberData={member} key={member.studyMemberId} />
            ))
          : null}
      </Row>
    </StudyMemberContainer>
  );
};
export default StudyMembers;
