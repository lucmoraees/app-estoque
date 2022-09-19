/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes, ReactElement } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ type = 'button', children, ...rest }): ReactElement => (
  <button type={type} {...rest}>
    {children}
  </button>
);

export default Button;
