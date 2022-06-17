import Modal from '../../common/ui/modal/Modal.component';
import TechsBadge from '../techsBadge/TechsBadge.component';
import { TechsContainer } from './MemberProfileDetails.style';

const MemberProfileDetails = ({ onClose, techStack, introduce, nickName }) => {
  return (
    <Modal onClose={onClose}>
      <p>{`${nickName}님의 기술스텍`}</p>
      <TechsContainer>
        {techStack.map(tech => (
          <TechsBadge key={tech} content={tech} />
        ))}
      </TechsContainer>
      <div>{introduce}</div>
    </Modal>
  );
};

export default MemberProfileDetails;
