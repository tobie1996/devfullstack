
import React from 'react';

interface ButtonProps {
  className: string;
  message:string;
}

const Button: React.FC<ButtonProps> = ({ className,message }) => {
  return (
    <button className={className}>{message}</button>
  );
};

export default Button;

