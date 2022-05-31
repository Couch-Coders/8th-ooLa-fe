import React from 'react';
import StudyTag from '../studyTag/StudyTag.component';

import {
  StudyIntroductionTitle,
  StudyIntroductionCotent,
} from './StudyIntroduction.style';

const DUMMY_HASHTAG = ['CS지식', '주말', '저녁 시간대'];

const StudyIntroduction = () => {
  return (
    <div>
      <StudyIntroductionCotent>
        <StudyIntroductionTitle>스터디 소개</StudyIntroductionTitle>
        <div>
          {DUMMY_HASHTAG.map(tag => (
            <StudyTag content={tag} key={tag} />
          ))}
        </div>
        <p>
          안녕하세요
          <br />
          씹어 먹자! CS지식! 리더입니다.
          <br />
          CS 지식 스터디 함께 할 멤버를 모집합니다.
          <br />
          구체적인 일정 및 시간은 카카오 오픈 채팅에서 함께 의논해요!
          <br />
        </p>
      </StudyIntroductionCotent>
    </div>
  );
};
export default StudyIntroduction;