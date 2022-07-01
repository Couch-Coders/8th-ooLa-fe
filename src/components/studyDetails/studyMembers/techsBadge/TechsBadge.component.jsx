import { makeIcon } from '../../../../utils/makeIcon';
import { IconContainer } from './TechBadge.style';

const TechsBadge = ({ content, type }) => {
  const tech = makeIcon(content);
  return <IconContainer type={type}>{tech}</IconContainer>;
};
export default TechsBadge;
