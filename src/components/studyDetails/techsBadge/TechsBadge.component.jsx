import { makeIcon } from '../../../utils/makeIcon';
import { IconContainer } from './TechBadge.style';

const TechsBadge = ({ content }) => {
  const tech = makeIcon(content);
  return <IconContainer>{tech}</IconContainer>;
};
export default TechsBadge;
