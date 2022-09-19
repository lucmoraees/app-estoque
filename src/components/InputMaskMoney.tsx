/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import VMasker from 'vanilla-masker';
import React, {
  useEffect, InputHTMLAttributes, ReactElement,
} from 'react';
import { getInputById } from '../utils';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const options = {
  precision: 2,
  separator: ',',
  delimiter: '.',
  unit: 'R$ ',
  suffixUnit: '',
  zeroCents: false,
};

const InputMaskMoney: React.FC<InputProps> = ({ ...rest }): ReactElement => {
  useEffect(() => {
    const input = getInputById(rest.id || '');
    VMasker(input).maskMoney(options);
  }, [rest.id]);

  return (
    <input {...rest} />
  );
};

export default InputMaskMoney;
