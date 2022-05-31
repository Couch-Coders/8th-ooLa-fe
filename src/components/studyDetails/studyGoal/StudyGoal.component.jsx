import React from 'react';
import {
  StudyIntroductionTitle,
  StudyIntroductionCotent,
} from '../studyIntroduction/StudyIntroduction.style';

const StudyGoal = () => {
  return (
    <StudyIntroductionCotent>
      <StudyIntroductionTitle>스터디 목표</StudyIntroductionTitle>
      <p>우리 스터디는 이런 활동을 할 거에요!</p>
      <p>
        1~2주차: 디자인 패턴과 프로그래밍 패러다임
        <br />
        1~2주차: 디자인 패턴과 프로그래밍 패러다임
        <br />
        1~2주차: 디자인 패턴과 프로그래밍 패러다임
        <br />
        1~2주차: 디자인 패턴과 프로그래밍 패러다임
      </p>
    </StudyIntroductionCotent>
  );
};

export default StudyGoal;
