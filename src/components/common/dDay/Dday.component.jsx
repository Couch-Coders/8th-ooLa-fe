import React from 'react';
import styled from 'styled-components';

const DdayContainer = styled.div`
  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1890ff;
  }
`;

const Dday = ({ study }) => {
  const { startDate } = study;

  const setDate = new Date(startDate);
  const now = new Date();
  const distance = setDate.getTime() - now.getTime();
  const day = Math.floor(distance / (1000 * 60 * 60 * 24) + 1);
  let dDay = '';
  if (0 <= day && day <= 7) {
    dDay = `D-${day}`;
  }
  if (0 === day) {
    dDay = '오늘시작';
  } else {
    // console.log('');
  }

  return (
    <DdayContainer>
      <h4>{dDay}</h4>
    </DdayContainer>
  );
};

export default Dday;
