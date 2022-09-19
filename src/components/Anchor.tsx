/* eslint-disable react/jsx-props-no-spreading */
import React, { AnchorHTMLAttributes } from 'react';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor: React.FC<AnchorProps> = ({ children, ...rest }) => {
  const url = undefined;

  return (
    <a href={url} className=".anchor" {...rest}>
      {children}
    </a>
  );
};

export default Anchor;
