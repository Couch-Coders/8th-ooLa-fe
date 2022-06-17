import { Modal } from 'antd';

const delays = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const ModalToCountDown = async () => {
  let secondsToGo = 1;
  const modal = Modal.success({
    title: '성공했습니다! 잠시후 화면이 이동됩니다.',
    centered: true,
    footer: null,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
  }, 1000);
  setTimeout(() => {
    clearTimeout(timer);
    modal.destroy();
  }, secondsToGo * 1000);
  await delays(1000);
};
export default ModalToCountDown;
