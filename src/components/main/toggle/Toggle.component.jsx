import React, { useContext } from 'react';
import { StudyListContext } from '../../../context/StudyList.context';
import { Switch } from 'antd';
import PropTypes from 'prop-types';

const Toggle = () => {
  const { toggleHandler } = useContext(StudyListContext);
  return <Switch onClick={toggleHandler} />;
};

Toggle.propTypes = {
  toggleHandler: PropTypes.func,
};

export default Toggle;
