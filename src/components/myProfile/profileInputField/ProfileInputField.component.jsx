import React, { useState } from 'react';
import {
  StyledInputField,
  StyledInputFieldTItle,
  StyledInput,
} from './ProfileInputField.style';
import PropTypes from 'prop-types';

const ProfileInputField = ({ title, name, onChange, placeholder, value }) => {
  const changeHandler = event =>
    onChange(event.target.name, event.target.value);
  return (
    <StyledInputField>
      <StyledInputFieldTItle>{title}</StyledInputFieldTItle>
      <StyledInput
        size="large"
        placeholder={placeholder}
        onChange={changeHandler}
        name={name}
        value={value}
      />
    </StyledInputField>
  );
};

ProfileInputField.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default ProfileInputField;
