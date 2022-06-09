import styled from 'styled-components';

export const StudyIntroductionTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.8rem;
`;

export const TagContainer = styled.div`
  margin-bottom: 2.8rem;
`;

export const StudyIntroductionContent = styled.div`
  background-color: rgba(205, 240, 255, 0.3);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;
  padding: 6rem;
  border-radius: 20px;
  margin-bottom: 5.5rem;
  p {
    font-size: 1.6rem;
  }
`;

export const style = {
  StudyIntroductionTitle,
  StudyIntroductionContent,
  TagContainer,
};
