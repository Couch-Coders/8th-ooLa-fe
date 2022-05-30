import React from 'react';
import { Row } from 'antd';
import StudyMemberItem from '../studyMemberItem/studyMemberItem.component';

const DUMMY_MEMBER = {
  membersArray: [
    {
      key: Math.floor(Math.random() * 1000),
      role: 'leader',
      photoUrl: 'https://joeschmoe.io/api/v1/random',
      nickname: '트릴로니',
      techStackArray: ['Python', 'NodeJs', 'Django'],
      blogUrl: 'http://localhost:3000/',
      githubUrl: 'http://localhost:3000/',
      selfIntroduction:
        '안녕하세요. 프론트엔드 공부하고 있습니다. 잘 부탁드립니다.',
    },
    {
      key: Math.floor(Math.random() * 1000),
      role: 'member',
      photoUrl: 'https://joeschmoe.io/api/v1/random',
      nickname: '트릴로니',
      techStackArray: ['Python', 'NodeJs', 'Django'],
      blogUrl: 'http://localhost:3000/',
      githubUrl: 'http://localhost:3000/',
      selfIntroduction:
        '안녕하세요. 프론트엔드 공부하고 있습니다. 잘 부탁드립니다.',
    },
    {
      key: Math.floor(Math.random() * 1000),
      role: 'member',
      photoUrl: 'https://joeschmoe.io/api/v1/random',
      nickname: '트릴로니',
      techStackArray: ['Python', 'NodeJs', 'Django'],
      blogUrl: 'http://localhost:3000/',
      githubUrl: 'http://localhost:3000/',
      selfIntroduction:
        '안녕하세요. 프론트엔드 공부하고 있습니다. 잘 부탁드립니다.',
    },
    {
      key: Math.floor(Math.random() * 1000),
      role: 'member',
      photoUrl: 'https://joeschmoe.io/api/v1/random',
      nickname: '트릴로니',
      techStackArray: ['Python', 'NodeJs', 'Django'],
      blogUrl: 'http://localhost:3000/',
      githubUrl: 'http://localhost:3000/',
      selfIntroduction:
        '안녕하세요. 프론트엔드 공부하고 있습니다. 잘 부탁드립니다.',
    },
    {
      key: Math.floor(Math.random() * 1000),
      role: 'member',
      photoUrl: 'https://joeschmoe.io/api/v1/random',
      nickname: '트릴로니',
      techStackArray: ['Python', 'NodeJs', 'Django'],
      blogUrl: 'http://localhost:3000/',
      githubUrl: 'http://localhost:3000/',
      selfIntroduction:
        '안녕하세요. 프론트엔드 공부하고 있습니다. 잘 부탁드립니다.',
    },
  ],
};

const StudyMembers = () => {
  return (
    <section>
      <h3>스터디 멤버</h3>
      <Row gutter={16}>
        {DUMMY_MEMBER.membersArray.map(member => (
          <StudyMemberItem member={member} key={member.key} />
        ))}
      </Row>
    </section>
  );
};
export default StudyMembers;
