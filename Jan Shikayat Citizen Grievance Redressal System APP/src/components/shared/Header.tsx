import React from 'react';
interface HeaderProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
const Header = ({
  title,
  leftIcon,
  rightIcon
}: HeaderProps) => {
  return <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="w-10">{leftIcon}</div>
      <h1 className="text-lg font-medium">{title}</h1>
      <div className="w-10 flex justify-end">{rightIcon}</div>
    </div>;
};
export default Header;