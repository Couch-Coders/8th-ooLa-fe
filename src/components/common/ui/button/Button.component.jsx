import { FilledBtn, KakaoOpenChatBtn, OutlineBtn } from './Button.style';

export const BUTTON_TYPE_CLASSES = {
  filled: 'filled',
  kakao: 'kakao-open-chat',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.filled) =>
  ({
    [BUTTON_TYPE_CLASSES.filled]: FilledBtn,
    [BUTTON_TYPE_CLASSES.kakao]: KakaoOpenChatBtn,
    [BUTTON_TYPE_CLASSES.inverted]: OutlineBtn,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
