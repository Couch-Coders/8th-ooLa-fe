import Modal from '../../../common/ui/modal/Modal.component';
import TechsBadge from '../techsBadge/TechsBadge.component';
import {
  TechsContainer,
  StyledTitle,
  IntroduceContainer,
} from './MemberProfileDetails.style';

const MemberProfileDetails = ({ onClose, techStack, introduce, nickName }) => {
  return (
    <Modal onClose={onClose}>
      <StyledTitle>
        <span>{`${nickName}님`}</span>의 TechStack
      </StyledTitle>
      <TechsContainer>
        {techStack.map(tech => (
          <TechsBadge key={tech} content={tech} type="modal" />
        ))}
      </TechsContainer>
      <IntroduceContainer>{introduce}</IntroduceContainer>
    </Modal>
  );
};

export default MemberProfileDetails;
