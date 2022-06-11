import { useState } from 'react';

const UseInput = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueIsSelect = validateValue(selectedValue);
  const selectHasError = !valueIsSelect && isTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = event => {
    setIsTouched(true);
  };

  const selectBlurHandler = event => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setSelectedValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    selectBlurHandler,
    reset,
    selectHasError,
  };
};

export default UseInput;
