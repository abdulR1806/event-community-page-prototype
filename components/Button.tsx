
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ease-in-out hover:scale-105';
  
  const variantStyles = {
    primary: 'bg-[#00F5A0] text-[#1A1A2E]',
    secondary: 'bg-transparent text-[#F0F0F5] border border-[#A9A9B2] hover:bg-[#F0F0F5] hover:text-[#1A1A2E]',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};