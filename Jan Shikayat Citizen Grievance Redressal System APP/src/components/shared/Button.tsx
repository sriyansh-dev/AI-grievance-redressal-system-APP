import React from 'react';
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  disabled?: boolean;
}
const Button = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  disabled = false
}: ButtonProps) => {
  return <button onClick={onClick} disabled={disabled} className={`
        flex items-center justify-center px-4 py-3 rounded-lg font-medium
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'bg-gray-300 text-gray-500' : variant === 'primary' ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-700'}
      `}>
      {children}
    </button>;
};
export default Button;