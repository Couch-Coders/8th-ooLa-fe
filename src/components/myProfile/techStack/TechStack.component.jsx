import React from 'react';

import { TechStackList, TechStackTitle } from './TechStack.style';

import TechItem from '../techItem/TechItem.component';

const techs = {
  frontend: [
    'Javascript',
    'Html5',
    'Css3',
    'React',
    'Typscript',
    'Redux',
    'NestJs',
    'NextJs',
  ],
  backend: ['Python', 'NodeJs', 'GraphQL', 'Go', 'Django'],
  mobile: ['React-Native', 'Flutter', 'Swift'],
};

const TechStack = () => {
  return (
    <div>
      <TechStackTitle>기술스택</TechStackTitle>
      <TechStackTitle>프론트엔드</TechStackTitle>
      <TechStackList>
        {techs.frontend.map(tech => (
          <TechItem name={tech} key={tech} />
        ))}
      </TechStackList>
      <TechStackTitle>백엔드</TechStackTitle>
      <TechStackList>
        {techs.backend.map(tech => (
          <TechItem name={tech} key={tech} />
        ))}
      </TechStackList>
      <TechStackTitle>모바일</TechStackTitle>
      <TechStackList>
        {techs.mobile.map(tech => (
          <TechItem name={tech} key={tech} />
        ))}
      </TechStackList>
    </div>
  );
};
export default TechStack;
