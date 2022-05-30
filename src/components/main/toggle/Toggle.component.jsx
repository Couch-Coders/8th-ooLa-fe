import React from 'react';
import { Switch } from 'antd';
import PropTypes from 'prop-types';

const Toggle = ({ toggleHandler }) => {
  return <Switch onClick={toggleHandler} defaultChecked />;
};

Toggle.propTypes = {
  toggleHandler: PropTypes.func,
};

export default Toggle;
