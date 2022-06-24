import React, { useContext } from 'react';
import { ProfileContext } from '../../../context/Profile.context';
import { makeIcon } from '../../../utils/makeIcon';
import {
  TechStackList,
  TechStackTitle,
  TechStackSubTitle,
} from './TechStack.style';

import TechItem from '../techItem/TechItem.component';

const techs = {
  frontend: [
    'Javascript',
    'Html5',
    'Css3',
    'React',
    'Typescript',
    'Redux',
    'NestJs',
    'NextJs',
  ],
  backend: ['Python', 'NodeJs', 'GraphQL', 'Go', 'Django'],
  mobile: ['ReactNative', 'Flutter', 'Swift'],
};

const TechStack = () => {
  return (
    <div>
      <TechStackTitle>기술스택을 골라주세요.</TechStackTitle>
      <TechStackSubTitle>프론트엔드</TechStackSubTitle>
      <TechStackList>
        {techs.frontend.map(tech => (
          <TechItem name={tech} key={tech} icon={makeIcon(tech)} />
        ))}
      </TechStackList>
      <TechStackSubTitle>백엔드</TechStackSubTitle>
      <TechStackList>
        {techs.backend.map(tech => (
          <TechItem name={tech} key={tech} icon={makeIcon(tech)} />
        ))}
      </TechStackList>
      <TechStackSubTitle>모바일</TechStackSubTitle>
      <TechStackList>
        {techs.mobile.map(tech => (
          <TechItem name={tech} key={tech} icon={makeIcon(tech)} />
        ))}
      </TechStackList>
    </div>
  );
};
export default TechStack;
